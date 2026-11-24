import { MapPin, Phone, Mail } from 'lucide-react';
import { EDUCATION_TIERS } from '../data/educationData';

interface FooterProps {
  onOpenInfoDoc: (docId: string) => void;
}

export function Footer({ onOpenInfoDoc }: FooterProps) {
  const scrollToTier = (tierId: string) => {
    const el = document.getElementById(tierId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full border-t border-black/10 bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1120px] px-5 pt-16 pb-10 sm:px-8">
        {/* Multi-column Apple-style Footer Grid */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand Summary */}
          <div>
            <div className="flex items-center gap-2 text-[#1d1d1f]">
              <svg
                viewBox="0 0 44 22"
                className="h-4.5 w-7"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 22,11 C 25.8,4.6 30.8,3 35,3 C 39.2,3 41.5,6.4 41.5,11 C 41.5,15.6 39.2,19 35,19 C 30.8,19 25.8,17.4 22,11 C 18.2,4.6 13.2,3 9,3 C 4.8,3 2.5,6.4 2.5,11 C 2.5,15.6 4.8,19 9,19 C 13.2,19 18.2,17.4 22,11 Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[14px] font-semibold tracking-[-0.015em]">
                Sonsuz Akademi
              </span>
            </div>
            <p className="mt-4 max-w-[260px] text-[13px] leading-[1.6] text-[#6e6e73]">
              Temel seviyeden uzmanlığa dört kademeli, proje odaklı modern
              eğitim platformu.
            </p>
          </div>

          {/* Column 2: Education Programs */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.01em] text-[#1d1d1f]">
              Eğitim Programları
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {EDUCATION_TIERS.map((tier) => (
                <li key={tier.id}>
                  <button
                    type="button"
                    onClick={() => scrollToTier(tier.id)}
                    className="text-[13px] text-[#424245] transition-colors duration-150 hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    {tier.navLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Support */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.01em] text-[#1d1d1f]">
              Kurumsal ve Destek
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('hakkimizda')}
                  className="text-[13px] text-[#424245] transition-colors duration-150 hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('egitmenler')}
                  className="text-[13px] text-[#424245] transition-colors duration-150 hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
                >
                  Eğitmen Kadrosu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('kurumsal')}
                  className="text-[13px] text-[#424245] transition-colors duration-150 hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
                >
                  Kurumsal Eğitimler
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInfoDoc('sss')}
                  className="text-[13px] text-[#424245] transition-colors duration-150 hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
                >
                  Sıkça Sorulan Sorular
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Address Info */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.01em] text-[#1d1d1f]">
              İletişim ve Adres
            </h3>
            <address className="mt-3.5 space-y-3 not-italic text-[13px] leading-[1.55] text-[#424245]">
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#6e6e73]"
                  aria-hidden="true"
                />
                <span>
                  Büyükdere Cad. No: 193, Kanyon Ofis Kat: 8, 34394 Levent /
                  İstanbul
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 shrink-0 text-[#6e6e73]"
                  aria-hidden="true"
                />
                <a
                  href="tel:+902124804200"
                  className="tabular-nums transition-colors hover:text-[#1d1d1f] hover:underline"
                >
                  +90 (212) 480 42 00
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-[#6e6e73]"
                  aria-hidden="true"
                />
                <a
                  href="mailto:iletisim@sonsuzakademi.com"
                  className="transition-colors hover:text-[#1d1d1f] hover:underline"
                >
                  iletisim@sonsuzakademi.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col gap-4 border-t border-black/10 pt-6 text-[12px] text-[#6e6e73] md:flex-row md:items-center md:justify-between">
          <p>
            Telif Hakkı © 2026 Sonsuz Akademi Eğitim Teknolojileri A.Ş. Tüm
            hakları saklıdır.
          </p>

          <nav
            aria-label="Yasal bağlantılar"
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <button
              type="button"
              onClick={() => onOpenInfoDoc('gizlilik')}
              className="transition-colors hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
            >
              Gizlilik Politikası
            </button>
            <span aria-hidden="true" className="text-black/20">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenInfoDoc('kullanim')}
              className="transition-colors hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
            >
              Kullanım Koşulları
            </button>
            <span aria-hidden="true" className="text-black/20">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenInfoDoc('kvkk')}
              className="transition-colors hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
            >
              KVKK
            </button>
            <span aria-hidden="true" className="text-black/20">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenInfoDoc('cerez')}
              className="transition-colors hover:text-[#1d1d1f] hover:underline focus-visible:outline-none focus-visible:underline"
            >
              Çerez Politikası
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
