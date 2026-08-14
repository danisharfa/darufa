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
import { MobileNavbar } from './MobileNavbar';
import logo from '../assets/200.svg';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-10 px-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0">
          <img src={logo.src} alt="Darufa" className="h-9 w-auto" />
        </a>

        {/* Desktop menu - hilang di mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/catalog" className={navigationMenuTriggerStyle()}>
                Catalog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/baking-class" className={navigationMenuTriggerStyle()}>
                Baking Class
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            render={<a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" />}
          >
            <HugeiconsIcon icon={WhatsappIcon} strokeWidth={2} className="size-4" />
            <span className="hidden sm:inline">Chat WA</span>
          </Button>

          {/* Mobile menu - hilang di desktop */}
          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
}
