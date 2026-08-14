import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Bread04Icon } from '@hugeicons/core-free-icons';

const links = [
  { href: '/catalog', label: 'Catalog' },
  { href: '/baking-class', label: 'Baking Class' },
  { href: '/about', label: 'About' },
];

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Buka menu" />}>
        <HugeiconsIcon icon={Bread04Icon} strokeWidth={2} className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Darufa</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 p-4 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
