import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ProductCard, type Product } from '@/components/ProductCard';

export function FeaturedProductsCarousel({ products }: { products: Product[] }) {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <Carousel opts={{ align: 'start', loop: true }} plugins={[autoplay.current]} className="sm:px-12">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
