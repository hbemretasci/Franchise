import { Star } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '../data/educationData';

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="mx-3 flex w-[330px] sm:w-[380px] shrink-0 flex-col justify-between rounded-[24px] border border-black/[0.06] bg-white p-7 text-left transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        {/* Star Rating Row */}
        <div
          className="flex items-center gap-1"
          aria-label={`5 üzerinden ${item.rating} yıldız`}
        >
          {Array.from({ length: item.rating }).map((_, idx) => (
            <Star
              key={idx}
              className="h-4 w-4 fill-[#f5a623] text-[#f5a623]"
              aria-hidden="true"
            />
          ))}
          <span className="ml-1.5 text-[12px] font-medium text-[#6e6e73] tabular-nums">
            {item.rating}.0
          </span>
        </div>

        {/* Review Quote */}
        <p className="mt-4 text-[15px] leading-[1.6] text-[#1d1d1f]">
          “{item.quote}”
        </p>
      </div>

      {/* Participant Attribution */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-black/[0.06] pt-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold tracking-tight ${item.avatarBg}`}
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-semibold text-[#1d1d1f]">
            {item.name}
          </p>
          <p className="truncate text-[12px] text-[#6e6e73]">
            {item.role}, {item.company}
          </p>
          <p className="mt-0.5 text-[12px] font-medium text-[#0071e3]">
            {item.completedTier}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsMarquee() {
  return (
    <section
      id="yorumlar"
      aria-labelledby="testimonials-heading"
      className="w-full overflow-hidden bg-[#f5f5f7] py-24 sm:py-32 text-[#1d1d1f]"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 text-center">
        <div className="mb-3 flex flex-wrap items-center justify-center gap-x-2.5 text-[13px] sm:text-[14px] font-medium text-[#6e6e73] tabular-nums">
          <span>Katılımcı Yorumları</span>
          <span aria-hidden="true">·</span>
          <span>4.9 / 5.0 Memnuniyet</span>
          <span aria-hidden="true">·</span>
          <span>3.400+ Mezun</span>
        </div>

        <h2
          id="testimonials-heading"
          className="mx-auto max-w-[700px] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1d1d1f] [text-wrap:balance]"
        >
          Gerçek sonuçlar. Mezunlarımız anlatıyor.
        </h2>

        <p className="mx-auto mt-4 max-w-[560px] text-[16px] sm:text-[18px] leading-[1.55] text-[#6e6e73]">
          Dört farklı kademeyi tamamlayarak kariyerinde somut ilerleme sağlayan
          katılımcılarımızın deneyimleri.
        </p>
      </div>

      {/* Seamless Left-to-Right Marquee (-50% -> 0%) with Soft Edge Fade & Hover Pause */}
      <div className="marquee-viewport relative mt-14 w-full overflow-hidden py-2">
        <div className="marquee-track">
          {/* Set 1 */}
          <div className="flex shrink-0 items-stretch">
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={`a-${item.id}`} item={item} />
            ))}
          </div>
          {/* Set 2 (identical clone for seamless loop) */}
          <div className="flex shrink-0 items-stretch" aria-hidden="true">
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={`b-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
