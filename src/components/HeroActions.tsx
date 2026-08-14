import { Button } from '@/components/ui/button';

export function HeroActions() {
  return (
    <div className="mt-2 flex flex-col gap-3 sm:flex-row">
      <Button size="lg" render={<a href="/catalog" />}>
        Lihat Menu
      </Button>
      <Button
        size="lg"
        variant="outline"
        render={<a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" />}
      >
        Pesan via WhatsApp
      </Button>
    </div>
  );
}
