import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { WhatsappIcon } from '@hugeicons/core-free-icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { MobileNavTrigger, MobileNavPanel } from './MobileNavbar';
import type { ReactNode } from 'react';

interface NavbarProps {
  children?: ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b backdrop-blur-sm transition-colors ${
        open ? 'bg-background' : 'bg-background/80 supports-backdrop-filter:bg-background/60'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-10 px-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0" aria-label="Darufa" onClick={() => setOpen(false)}>
          {children}
        </a>

        {/* Desktop menu - hilang di mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/catalog" className={navigationMenuTriggerStyle()}>
                Katalog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/baking-class" className={navigationMenuTriggerStyle()}>
                Baking Class
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                Tentang
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            render={
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" />
            }
          >
            <HugeiconsIcon icon={WhatsappIcon} strokeWidth={2} className="size-4" />
            <span className="hidden sm:inline">Chat WA</span>
          </Button>

          {/* Mobile menu - hilang di desktop */}
          <div className="md:hidden">
            <MobileNavTrigger open={open} onToggle={() => setOpen((prev) => !prev)} />
          </div>
        </div>
      </div>

      <MobileNavPanel open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
