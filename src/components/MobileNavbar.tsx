import { HugeiconsIcon } from '@hugeicons/react';
import { Bread04Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/catalog', label: 'Katalog' },
  { href: '/baking-class', label: 'Baking Class' },
  // { href: '/about', label: 'Tentang' },
];

interface MobileNavTriggerProps {
  open: boolean;
  onToggle: () => void;
}

export function MobileNavTrigger({ open, onToggle }: MobileNavTriggerProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={open ? 'Tutup menu' : 'Buka menu'}
      onClick={onToggle}
    >
      <HugeiconsIcon icon={open ? Cancel01Icon : Bread04Icon} strokeWidth={2} className="size-5" />
    </Button>
  );
}

interface MobileNavPanelProps {
  open: boolean;
  onNavigate: () => void;
}

export function MobileNavPanel({ open, onNavigate }: MobileNavPanelProps) {
  return (
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden"
      style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
    >
      <div className="overflow-hidden">
        <nav className="flex flex-col gap-1 border-t px-4 py-4 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
