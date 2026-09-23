import { useEffect, useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard, type Product } from '@/components/ProductCard';

const categories: { value: string; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'kue-kering', label: 'Kue Kering' },
  { value: 'kue-basah', label: 'Kue Basah' },
  { value: 'roti', label: 'Roti' },
  { value: 'cake-bolu', label: 'Cake & Bolu' },
];

const categoryValues = new Set(categories.map((item) => item.value));

function getInitialCategory() {
  if (typeof window === 'undefined') return 'all';
  const fromUrl = new URLSearchParams(window.location.search).get('category');
  return fromUrl && categoryValues.has(fromUrl) ? fromUrl : 'all';
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(getInitialCategory);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.replaceState(window.history.state, '', url);
  }, [category]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchCategory = category === 'all' || product.category === category;
      const matchSearch = !query || product.name.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [products, search, category]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={category} onValueChange={(value) => setCategory(String(value))}>
          <TabsList>
            {categories.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Input
          type="search"
          placeholder="Cari nama produk..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="sm:max-w-xs"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          Produk tidak ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
