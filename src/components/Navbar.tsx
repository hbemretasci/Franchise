import { useEffect, useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { EDUCATION_TIERS } from '../data/educationData';

interface NavbarProps {
  activeTierId: string | null;
  loggedInEmail: string | null;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export function Navbar({
  activeTierId,
  loggedInEmail,
  onOpenLogin,
  onLogout,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (tierId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(tierId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/78 backdrop-blur-[20px] backdrop-saturate-180 border-b border-white/10">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Minimalist Infinity Logo + Brand Name */}
        <button
          type="button"
          onClick={handleScrollTop}
          className="group flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded-md py-1"
          aria-label="Sonsuz Akademi ana sayfaya dön"
        >
          <svg
            viewBox="0 0 44 22"
            className="h-5 w-8 text-white transition-opacity duration-200 group-hover:opacity-80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 22,11 C 25.8,4.6 30.8,3 35,3 C 39.2,3 41.5,6.4 41.5,11 C 41.5,15.6 39.2,19 35,19 C 30.8,19 25.8,17.4 22,11 C 18.2,4.6 13.2,3 9,3 C 4.8,3 2.5,6.4 2.5,11 C 2.5,15.6 4.8,19 9,19 C 13.2,19 18.2,17.4 22,11 Z"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">
            Sonsuz Akademi
          </span>
        </button>

        {/* Zone 2: Center 4 Tier Links */}
        <nav
          aria-label="Eğitim Kademeleri"
          className="hidden lg:flex items-center gap-7"
        >
          {EDUCATION_TIERS.map((tier) => {
            const isActive = activeTierId === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => handleNavClick(tier.id)}
                className={`relative py-1.5 text-[13px] font-normal tracking-[-0.01em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] rounded-sm ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#d2d2d7] hover:text-white'
                }`}
              >
                {tier.navLabel}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-[15px] h-[1.5px] bg-white transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Pill Login Button) + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {loggedInEmail ? (
            <button
              type="button"
              onClick={onLogout}
              title={`Oturumu kapat (${loggedInEmail})`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#1d1d1f] transition-all duration-200 hover:bg-[#f5f5f7] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="max-w-[120px] truncate">{loggedInEmail.split('@')[0]}</span>
              <LogOut className="h-3.5 w-3.5 text-[#6e6e73]" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenLogin}
              className="rounded-full bg-white px-4.5 py-1.5 text-[13px] font-medium text-[#1d1d1f] transition-all duration-200 hover:bg-[#e8e8ed] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Giriş Yap
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-[#f5f5f7] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-out border-t border-white/10 bg-black/95 backdrop-blur-2xl ${
          mobileMenuOpen ? 'max-h-[340px] opacity-100' : 'max-h-0 opacity-0 border-t-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Mobil Eğitim Kademeleri" className="mx-auto max-w-[1200px] px-5 py-4 flex flex-col gap-1">
          {EDUCATION_TIERS.map((tier) => {
            const isActive = activeTierId === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => handleNavClick(tier.id)}
                className={`flex min-h-[44px] w-full items-center justify-between rounded-xl px-3.5 text-left text-[15px] transition-colors duration-150 ${
                  isActive
                    ? 'bg-white/12 text-white font-medium'
                    : 'text-[#d2d2d7] hover:bg-white/8 hover:text-white'
                }`}
              >
                <span>{tier.navLabel}</span>
                <span className="text-[12px] text-[#86868b]">{tier.duration}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
