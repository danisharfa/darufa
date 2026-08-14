import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import placeholder from '@/assets/200.svg';

const categoryLabels: Record<string, string> = {
  'kue-kering': 'Kue Kering',
  'kue-basah': 'Kue Basah',
  roti: 'Roti',
};

const priceFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export interface Product {
  id: string;
  name: string;
  category: 'kue-kering' | 'kue-basah' | 'roti';
  price: number;
  isAvailable: boolean;
  isFeatured: boolean;
  tags: string[];
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="relative">
      <img src={placeholder.src} alt={product.name} className="aspect-square w-full object-cover" />
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span>{product.name}</span>
          <Badge variant="outline" className="shrink-0">
            {categoryLabels[product.category]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1">
        {product.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
        {!product.isAvailable && <Badge variant="destructive">Habis</Badge>}
      </CardContent>
      <CardFooter className="justify-between">
        <span className="font-heading text-lg font-semibold text-primary">
          {priceFormatter.format(product.price)}
        </span>
      </CardFooter>
    </Card>
  );
}
