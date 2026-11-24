import { useState } from 'react';
import { Layers } from 'lucide-react';
import type { EducationTier } from '../data/educationData';

interface TierSectionProps {
  tier: EducationTier;
  onOpenDetails: (tier: EducationTier) => void;
  onOpenEnroll: (tier: EducationTier) => void;
}

export function TierSection({
  tier,
  onOpenDetails,
  onOpenEnroll,
}: TierSectionProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const isDark = tier.surface === 'dark';
  const isLightGray = tier.surface === 'light-gray';

  const sectionBgClass = isDark
    ? 'bg-black text-[#f5f5f7]'
    : isLightGray
      ? 'bg-[#f5f5f7] text-[#1d1d1f]'
      : 'bg-white text-[#1d1d1f]';

  const kickerTextClass = isDark ? 'text-[#a1a1a6]' : 'text-[#6e6e73]';
  const bodyTextClass = isDark ? 'text-[#a1a1a6]' : 'text-[#6e6e73]';

  const cardSurfaceClass = isDark
    ? 'bg-[#111113] border border-white/10'
    : isLightGray
      ? 'bg-white border border-black/[0.06]'
      : 'bg-[#f5f5f7] border border-black/[0.06]';

  const secondaryButtonClass = isDark
    ? 'border-[#2997ff] text-[#2997ff] hover:bg-[#2997ff]/12 focus-visible:ring-offset-black'
    : 'border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/[0.08] focus-visible:ring-offset-white';

  const mediaFrameClass = isDark
    ? 'bg-black border border-white/10'
    : isLightGray
      ? 'bg-[#e8e8ed] border border-black/[0.06]'
      : 'bg-[#f5f5f7] border border-black/[0.06]';

  return (
    <section
      id={tier.id}
      aria-labelledby={`${tier.id}-heading`}
      className={`scroll-mt-14 w-full py-24 sm:py-32 lg:py-36 transition-colors ${sectionBgClass}`}
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        {/* Apple-style Centered Showcase Header */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
          {/* Clean Unboxed Metadata Kicker */}
          <div
            className={`mb-3.5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[13px] sm:text-[14px] font-medium tracking-[0.01em] tabular-nums ${kickerTextClass}`}
          >
            <span>{tier.levelLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{tier.duration}</span>
            <span aria-hidden="true">·</span>
            <span>{tier.totalHours}</span>
          </div>

          <h2
            id={`${tier.id}-heading`}
            className="text-[clamp(2.25rem,4.4vw,3.75rem)] font-semibold leading-[1.07] tracking-[-0.03em] [text-wrap:balance]"
          >
            {tier.title}
          </h2>

          <p
            className={`mt-3 text-[20px] sm:text-[24px] font-medium leading-[1.3] tracking-[-0.018em] [text-wrap:balance] ${
              isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
            }`}
          >
            {tier.headline}
          </p>

          <p
            className={`mt-4 max-w-[620px] text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.008em] ${bodyTextClass}`}
          >
            {tier.description}
          </p>

          {/* Mandatory Apple Pill CTA Pair */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => onOpenDetails(tier)}
              className={`min-h-[44px] rounded-full border px-6 py-2.5 text-[15px] font-medium whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 ${secondaryButtonClass}`}
            >
              Daha Fazla Bilgi
            </button>

            <button
              type="button"
              onClick={() => onOpenEnroll(tier)}
              className={`min-h-[44px] rounded-full bg-[#0071e3] px-7 py-2.5 text-[15px] font-medium text-white whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#0077ed] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 ${
                isDark ? 'focus-visible:ring-offset-black' : 'focus-visible:ring-offset-white'
              }`}
            >
              Kayıt Ol
            </button>
          </div>
        </div>

        {/* Studio Product Visual Anchor */}
        <div
          className={`mt-12 sm:mt-16 overflow-hidden rounded-[28px] ${mediaFrameClass}`}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {!imageFailed ? (
              <img
                src={tier.imageSrc}
                alt={tier.imageAlt}
                referrerPolicy="no-referrer"
                loading={tier.stageNumber === 1 ? 'eager' : 'lazy'}
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            ) : (
              <div
                className={`flex h-full w-full flex-col items-center justify-center gap-3 p-8 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#141416] via-[#0b0b0c] to-black text-[#a1a1a6]'
                    : 'bg-gradient-to-br from-[#f5f5f7] via-[#ececf0] to-[#e5e5ea] text-[#6e6e73]'
                }`}
              >
                <Layers className="h-9 w-9 opacity-60" aria-hidden="true" />
                <span className="text-[15px] font-medium">{tier.title}</span>
              </div>
            )}
          </div>
        </div>

        {/* 3 Standout Feature Cards */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {tier.features.map((feature) => (
            <article
              key={feature.index}
              className={`flex flex-col justify-between rounded-[24px] p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-0.5 ${cardSurfaceClass}`}
            >
              <div>
                <div
                  className={`flex items-center justify-between text-[13px] font-medium tabular-nums ${kickerTextClass}`}
                >
                  <span>{feature.index}</span>
                  <span>{feature.metric}</span>
                </div>

                <h3
                  className={`mt-5 text-[20px] sm:text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] ${
                    isDark ? 'text-white' : 'text-[#1d1d1f]'
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-3 text-[15px] leading-[1.6] ${bodyTextClass}`}
                >
                  {feature.description}
                </p>
              </div>

              <div
                className={`mt-7 pt-5 border-t ${
                  isDark ? 'border-white/10' : 'border-black/[0.06]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onOpenDetails(tier)}
                  className={`inline-flex items-center text-[13px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:underline ${
                    isDark
                      ? 'text-[#2997ff] hover:text-[#66b3ff]'
                      : 'text-[#0071e3] hover:text-[#005bb5]'
                  }`}
                >
                  Müfredatta incele
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
