import { HugeiconsIcon } from '@hugeicons/react';
import {
  Call02Icon,
  FacebookIcon,
  InstagramIcon,
  Location01Icon,
  Mail01Icon,
  TiktokIcon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

const socials = [
  { href: null, icon: InstagramIcon, label: 'Instagram' },
  { href: null, icon: FacebookIcon, label: 'Facebook' },
  { href: null, icon: TiktokIcon, label: 'TikTok' },
  { href: 'https://wa.me/6281234567890', icon: WhatsappIcon, label: 'WhatsApp' },
];

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="md:col-span-2">
          <a href="/" className="inline-flex items-center" aria-label="Darufa">
            {children}
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Dipesan online, tersedia ready stock atau pre-order. Ambil sendiri atau diantar sesuai
            area.
          </p>
          <div className="mt-4 flex gap-1">
            {socials.map((social) =>
              social.href ? (
                <Button
                  key={social.label}
                  render={<a href={social.href} target="_blank" rel="noopener noreferrer" />}
                  variant="ghost"
                  size="icon"
                  aria-label={social.label}
                >
                  <HugeiconsIcon icon={social.icon} strokeWidth={2} className="size-5" />
                </Button>
              ) : (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  disabled
                  aria-label={`${social.label} (belum tersedia)`}
                >
                  <HugeiconsIcon icon={social.icon} strokeWidth={2} className="size-5" />
                </Button>
              ),
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Kontak</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <HugeiconsIcon
                icon={Location01Icon}
                strokeWidth={2}
                className="mt-0.5 size-4 shrink-0"
              />
              <span>
                Jl. Taman Sejahtera 12 No.1, Pejeruk, Kec. Ampenan, Kota Mataram, Nusa Tenggara
                Barat
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HugeiconsIcon icon={Call02Icon} strokeWidth={2} className="size-4 shrink-0" />
              <a
                href="https://wa.me/6281234567890"
                className="transition-colors hover:text-foreground"
              >
                +62 812-3456-7890
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4 shrink-0" />
              <a href="mailto:hello@darufa.id" className="transition-colors hover:text-foreground">
                hello@darufa.id
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex w-full max-w-6xl justify-center px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p>© {year} DARUFA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
