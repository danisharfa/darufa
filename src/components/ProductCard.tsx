import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { StarIcon } from '@hugeicons/core-free-icons';

const categoryLabels: Record<string, string> = {
  'kue-kering': 'Kue Kering',
  'kue-basah': 'Kue Basah',
  roti: 'Roti',
  'cake-bolu': 'Cake & Bolu',
};

const priceFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export interface Product {
  id: string;
  name: string;
  category: 'kue-kering' | 'kue-basah' | 'roti' | 'cake-bolu';
  price: number;
  unit: string;
  image: { src: string; width: number; height: number };
  isAvailable: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="relative h-full">
      <img
        src={product.image.src}
        width={product.image.width}
        height={product.image.height}
        alt={product.name}
        className="aspect-square w-full object-cover"
      />

      {product.isBestSeller && (
        <div
          className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-primary-foreground shadow-sm"
          aria-label="Best seller"
        >
          <HugeiconsIcon icon={StarIcon} strokeWidth={2} className="size-3.5" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span className="line-clamp-2 min-h-10 min-w-0">{product.name}</span>
          <Badge variant="outline" className="shrink-0">
            {categoryLabels[product.category]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        {product.isAvailable ? (
          <Badge className="bg-success text-success-foreground">Ready Stock</Badge>
        ) : (
          <Badge className="bg-warning text-warning-foreground">Pre-Order</Badge>
        )}
      </CardContent>
      <CardFooter className="justify-between">
        <span className="font-heading text-lg font-semibold text-primary">
          {priceFormatter.format(product.price)}
          <span className="ml-1 text-sm font-normal text-muted-foreground">/ {product.unit}</span>
        </span>
      </CardFooter>
    </Card>
  );
}
