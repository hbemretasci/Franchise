import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreFirstTier: () => void;
}

const INFINITY_PATH =
  'M 180,85 C 212,35 256,22 292,22 C 326,22 344,50 344,85 C 344,120 326,148 292,148 C 256,148 212,135 180,85 C 148,35 104,22 68,22 C 34,22 16,50 16,85 C 16,120 34,148 68,148 C 104,148 148,135 180,85 Z';

export function HeroSection({ onExploreFirstTier }: HeroSectionProps) {
  return (
    <section
      aria-label="Giriş"
      className="relative flex min-h-[calc(100svh-56px)] w-full flex-col items-center justify-between overflow-hidden bg-black px-6 pt-14 pb-10 sm:pt-20 sm:pb-12 text-center text-white"
    >
      {/* Subtle radial atmospheric depth on deep black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 68% 52% at 50% 38%, rgba(255, 255, 255, 0.085) 0%, rgba(0, 113, 227, 0.055) 38%, rgba(0, 0, 0, 0) 72%)',
        }}
      />

      {/* Main Centered Stage */}
      <div className="relative z-10 my-auto flex w-full max-w-[920px] flex-col items-center">
        {/* Neon Infinity Symbol Container */}
        <div className="relative mb-10 sm:mb-12 flex items-center justify-center">
          {/* Ambient soft luminous radial halo behind SVG */}
          <div
            aria-hidden="true"
            className="animate-infinity-halo pointer-events-none absolute h-44 w-80 sm:h-52 sm:w-[420px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 45%, rgba(0,0,0,0) 75%)',
            }}
          />

          {/* Floating Custom Neon Infinity SVG */}
          <div className="animate-infinity-float relative w-[270px] sm:w-[340px] md:w-[380px]">
            <svg
              viewBox="0 0 360 170"
              className="h-auto w-full overflow-visible"
              fill="none"
              role="img"
              aria-label="Parlayan neon sonsuzluk simgesi"
            >
              <defs>
                {/* Wide ambient white neon bloom */}
                <filter
                  id="neonWideBloom"
                  x="-40%"
                  y="-60%"
                  width="180%"
                  height="220%"
                >
                  <feGaussianBlur stdDeviation="12" result="blurWide" />
                  <feMerge>
                    <feMergeNode in="blurWide" />
                  </feMerge>
                </filter>

                {/* Crisp layered neon tube glow */}
                <filter
                  id="neonTubeGlow"
                  x="-30%"
                  y="-50%"
                  width="160%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="4.5" result="blurMid" />
                  <feGaussianBlur stdDeviation="1.6" result="blurTight" />
                  <feMerge>
                    <feMergeNode in="blurMid" />
                    <feMergeNode in="blurTight" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* High-intensity orbiting light beam glow */}
                <filter
                  id="neonBeamGlow"
                  x="-40%"
                  y="-60%"
                  width="180%"
                  height="220%"
                >
                  <feGaussianBlur stdDeviation="7" result="beamBloom" />
                  <feGaussianBlur stdDeviation="2.4" result="beamCore" />
                  <feMerge>
                    <feMergeNode in="beamBloom" />
                    <feMergeNode in="beamCore" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Layer 1: Wide soft atmospheric glow */}
              <path
                d={INFINITY_PATH}
                stroke="rgba(255, 255, 255, 0.24)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonWideBloom)"
              />

              {/* Layer 2: Base neon white contour */}
              <path
                d={INFINITY_PATH}
                stroke="rgba(255, 255, 255, 0.42)"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonTubeGlow)"
              />

              {/* Layer 3: Subtle crisp inner filament */}
              <path
                d={INFINITY_PATH}
                stroke="rgba(255, 255, 255, 0.72)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Layer 4: Continuous orbiting luminous white beam (glow trail) */}
              <path
                d={INFINITY_PATH}
                pathLength={1000}
                stroke="#ffffff"
                strokeWidth="5.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="165 835"
                filter="url(#neonBeamGlow)"
                className="animate-infinity-beam-trail"
              />

              {/* Layer 5: Razor-bright white core spark */}
              <path
                d={INFINITY_PATH}
                pathLength={1000}
                stroke="#ffffff"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="72 928"
                className="animate-infinity-beam"
              />
            </svg>
          </div>
        </div>

        {/* Hero Headline & Value Proposition */}
        <p className="mb-3 text-[13px] sm:text-[14px] font-medium tracking-[0.02em] text-[#a1a1a6]">
          Sonsuz Akademi · Dört Kademeli Uzmanlık Mimarisi
        </p>

        <h1 className="max-w-[780px] text-[clamp(2.35rem,5.2vw,4.4rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-white [text-wrap:balance]">
          Öğrenmenin sınırlarını yeniden tanımlayın.
        </h1>

        <p className="mt-5 max-w-[600px] text-[17px] sm:text-[20px] font-normal leading-[1.5] tracking-[-0.01em] text-[#a1a1a6] [text-wrap:balance]">
          Temel kavramlardan stratejik liderliğe uzanan, her aşaması gerçek projelerle
          yapılandırılmış dört kademeli eğitim sistemi.
        </p>
      </div>

      {/* Scroll Cue */}
      <div className="relative z-10 mt-10 flex flex-col items-center">
        <button
          type="button"
          onClick={onExploreFirstTier}
          className="group inline-flex flex-col items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium text-[#a1a1a6] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
        >
          <span>Kademeleri Keşfet</span>
          <ChevronDown
            className="animate-cue-nudge h-4 w-4 text-[#a1a1a6] transition-colors duration-200 group-hover:text-white"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
