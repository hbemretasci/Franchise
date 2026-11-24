import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import {
  X,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  Users,
} from 'lucide-react';
import {
  EDUCATION_TIERS,
  type EducationTier,
  type InfoDocument,
} from '../data/educationData';

interface ModalShellProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  maxWidthClass?: string;
  children: ReactNode;
}

function ModalShell({
  open,
  onClose,
  titleId,
  maxWidthClass = 'max-w-[520px]',
  children,
}: ModalShellProps) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div
        className={`relative z-10 w-full ${maxWidthClass} max-h-[90svh] overflow-y-auto rounded-[28px] border border-black/[0.08] bg-white text-[#1d1d1f] shadow-2xl`}
      >
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Login Modal                                                             */
/* -------------------------------------------------------------------------- */

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export function LoginModal({ open, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetNotice, setResetNotice] = useState(false);

  useEffect(() => {
    if (open) {
      setError(null);
      setResetNotice(false);
    }
  }, [open]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setError('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (password.length < 6) {
      setError('Şifreniz en az 6 karakter olmalıdır.');
      return;
    }

    setError(null);
    onLoginSuccess(trimmedEmail);
    setPassword('');
    onClose();
  };

  return (
    <ModalShell open={open} onClose={onClose} titleId="login-modal-title">
      <div className="p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-medium text-[#6e6e73]">
              Sonsuz Akademi Hesabı
            </p>
            <h2
              id="login-modal-title"
              className="mt-1 text-[26px] font-semibold tracking-[-0.025em] text-[#1d1d1f]"
            >
              Giriş Yap
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Giriş penceresini kapat"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition-colors hover:bg-[#e8e8ed] hover:text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-[14px] leading-[1.55] text-[#6e6e73]">
          Canlı ders kayıtlarınıza, proje teslimlerinize ve sertifikalarınıza
          erişmek için oturum açın.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="login-email"
              className="block text-[13px] font-medium text-[#1d1d1f]"
            >
              E-posta Adresi
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@eposta.com"
              className="mt-1.5 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-[13px] font-medium text-[#1d1d1f]"
              >
                Şifre
              </label>
              <button
                type="button"
                onClick={() => setResetNotice(true)}
                className="text-[12px] font-medium text-[#0071e3] hover:underline focus-visible:outline-none focus-visible:underline"
              >
                Şifremi unuttum
              </button>
            </div>
            <div className="relative mt-1.5">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-[14px] border border-black/15 bg-white py-3 pr-11 pl-4 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-[#6e6e73] transition-colors hover:text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
              >
                {showPassword ? (
                  <EyeOff className="h-4.5 w-4.5" aria-hidden="true" />
                ) : (
                  <Eye className="h-4.5 w-4.5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-[12px] bg-[#ff3b30]/10 px-3.5 py-2.5 text-[13px] font-medium text-[#c92a22]"
            >
              {error}
            </p>
          )}

          {resetNotice && (
            <p
              role="status"
              className="rounded-[12px] bg-[#0071e3]/10 px-3.5 py-2.5 text-[13px] text-[#005bb5]"
            >
              Şifre sıfırlama bağlantısı için kayıtlı e-posta adresinizi girip
              destek ekibimizle iletişime geçebilirsiniz:
              iletisim@sonsuzakademi.com
            </p>
          )}

          <button
            type="submit"
            className="mt-2 min-h-[46px] w-full rounded-full bg-[#0071e3] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#0077ed] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            Oturum Aç
          </button>
        </form>
      </div>
    </ModalShell>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Curriculum Details Modal ("Daha Fazla Bilgi")                           */
/* -------------------------------------------------------------------------- */

interface CurriculumModalProps {
  tier: EducationTier | null;
  onClose: () => void;
  onProceedToEnroll: (tier: EducationTier) => void;
}

export function CurriculumModal({
  tier,
  onClose,
  onProceedToEnroll,
}: CurriculumModalProps) {
  if (!tier) return null;

  return (
    <ModalShell
      open={Boolean(tier)}
      onClose={onClose}
      titleId="curriculum-modal-title"
      maxWidthClass="max-w-[740px]"
    >
      <div className="p-7 sm:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-medium text-[#0071e3] tabular-nums">
              {tier.levelLabel} · {tier.duration} · {tier.totalHours}
            </p>
            <h2
              id="curriculum-modal-title"
              className="mt-1.5 text-[28px] sm:text-[32px] font-semibold leading-[1.12] tracking-[-0.028em] text-[#1d1d1f]"
            >
              {tier.title} Müfredatı
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Müfredat penceresini kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition-colors hover:bg-[#e8e8ed] hover:text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#424245]">
          {tier.curriculum.summary}
        </p>

        {/* Key Program Facts */}
        <div className="mt-6 grid grid-cols-1 gap-3 rounded-[20px] bg-[#f5f5f7] p-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Clock
              className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0071e3]"
              aria-hidden="true"
            />
            <div>
              <p className="text-[12px] font-medium text-[#6e6e73]">
                Eğitim Biçimi
              </p>
              <p className="mt-0.5 text-[14px] font-medium text-[#1d1d1f]">
                {tier.curriculum.format}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BookOpen
              className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0071e3]"
              aria-hidden="true"
            />
            <div>
              <p className="text-[12px] font-medium text-[#6e6e73]">
                Uygulama Yoğunluğu
              </p>
              <p className="mt-0.5 text-[14px] font-medium text-[#1d1d1f] tabular-nums">
                {tier.totalHours} · {tier.projectCount}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users
              className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0071e3]"
              aria-hidden="true"
            />
            <div>
              <p className="text-[12px] font-medium text-[#6e6e73]">
                Hedef Katılımcı
              </p>
              <p className="mt-0.5 text-[14px] text-[#1d1d1f]">
                {tier.curriculum.targetAudience}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award
              className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0071e3]"
              aria-hidden="true"
            />
            <div>
              <p className="text-[12px] font-medium text-[#6e6e73]">
                Sertifikasyon
              </p>
              <p className="mt-0.5 text-[14px] text-[#1d1d1f]">
                {tier.curriculum.certificate}
              </p>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="mt-8">
          <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
            Haftalık Müfredat Planı
          </h3>
          <div className="mt-4 divide-y divide-black/[0.08] rounded-[20px] border border-black/[0.08]">
            {tier.curriculum.modules.map((mod) => (
              <div key={mod.week} className="p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-[15px] font-semibold text-[#1d1d1f]">
                    {mod.title}
                  </h4>
                  <span className="text-[12px] font-medium text-[#6e6e73] tabular-nums">
                    {mod.week}
                  </span>
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {mod.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-[#424245]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mt-7">
          <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
            Program Kazanımları
          </h3>
          <ul className="mt-3 space-y-2.5">
            {tier.curriculum.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[#424245]"
              >
                <CheckCircle2
                  className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0071e3]"
                  aria-hidden="true"
                />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-black/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-full border border-black/15 px-6 py-2.5 text-[14px] font-medium text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
          >
            Kapat
          </button>
          <button
            type="button"
            onClick={() => onProceedToEnroll(tier)}
            className="min-h-[44px] rounded-full bg-[#0071e3] px-7 py-2.5 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[#0077ed] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
          >
            {tier.title} İçin Kayıt Ol
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Enrollment / Pre-Registration Modal ("Kayıt Ol")                        */
/* -------------------------------------------------------------------------- */

interface EnrollmentModalProps {
  tier: EducationTier | null;
  onClose: () => void;
  onEnrollSuccess: (payload: { fullName: string; tierTitle: string }) => void;
}

export function EnrollmentModal({
  tier,
  onClose,
  onEnrollSuccess,
}: EnrollmentModalProps) {
  const [selectedTierId, setSelectedTierId] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studyMode, setStudyMode] = useState<'online' | 'hibrit'>('online');
  const [kvkkAccepted, setKvkkAccepted] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (tier) {
      setSelectedTierId(tier.id);
      setError(null);
      setSubmitted(false);
    }
  }, [tier]);

  if (!tier) return null;

  const activeTier =
    EDUCATION_TIERS.find((t) => t.id === selectedTierId) ?? tier;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const cleanedPhone = phone.replace(/\s+/g, '');

    if (trimmedName.length < 3) {
      setError('Lütfen adınızı ve soyadınızı eksiksiz girin.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Lütfen geçerli bir telefon numarası girin.');
      return;
    }
    if (!kvkkAccepted) {
      setError('Başvurunuzu tamamlamak için KVKK aydınlatma onayı gereklidir.');
      return;
    }

    setError(null);
    setSubmitted(true);
    onEnrollSuccess({
      fullName: trimmedName,
      tierTitle: activeTier.title,
    });
  };

  return (
    <ModalShell
      open={Boolean(tier)}
      onClose={onClose}
      titleId="enroll-modal-title"
      maxWidthClass="max-w-[560px]"
    >
      <div className="p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-medium text-[#0071e3]">
              Ön Kayıt ve Başvuru Formu
            </p>
            <h2
              id="enroll-modal-title"
              className="mt-1 text-[26px] font-semibold tracking-[-0.025em] text-[#1d1d1f]"
            >
              {activeTier.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kayıt penceresini kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition-colors hover:bg-[#e8e8ed] hover:text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center py-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3]">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
              Ön Kaydınız Alındı
            </h3>
            <p className="mt-2.5 max-w-[400px] text-[15px] leading-[1.6] text-[#6e6e73]">
              Teşekkürler <span className="font-medium text-[#1d1d1f]">{fullName}</span>.{' '}
              <span className="font-medium text-[#1d1d1f]">{activeTier.title}</span>{' '}
              başvurunuz başarıyla kaydedildi. Eğitim danışmanlarımız 24 saat
              içinde sizinle iletişime geçecektir.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 min-h-[44px] rounded-full bg-[#0071e3] px-8 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0077ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
            >
              Tamam
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            {/* Program Selection */}
            <div>
              <label
                htmlFor="enroll-tier"
                className="block text-[13px] font-medium text-[#1d1d1f]"
              >
                Başvurulan Eğitim Kademesi
              </label>
              <select
                id="enroll-tier"
                value={selectedTierId}
                onChange={(e) => setSelectedTierId(e.target.value)}
                className="mt-1.5 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3 text-[15px] text-[#1d1d1f] transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
              >
                {EDUCATION_TIERS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} ({item.levelLabel.split('·')[1]?.trim()}) —{' '}
                    {item.duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="enroll-fullname"
                className="block text-[13px] font-medium text-[#1d1d1f]"
              >
                Ad Soyad
              </label>
              <input
                id="enroll-fullname"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Örn. Deniz Kaya"
                className="mt-1.5 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="enroll-email"
                  className="block text-[13px] font-medium text-[#1d1d1f]"
                >
                  E-posta
                </label>
                <input
                  id="enroll-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deniz@eposta.com"
                  className="mt-1.5 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="enroll-phone"
                  className="block text-[13px] font-medium text-[#1d1d1f]"
                >
                  Telefon Numarası
                </label>
                <input
                  id="enroll-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XX XXX XX XX"
                  className="mt-1.5 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] tabular-nums transition-colors focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
                />
              </div>
            </div>

            {/* Study Format Segmented Control */}
            <div>
              <span className="block text-[13px] font-medium text-[#1d1d1f]">
                Katılım Tercihi
              </span>
              <div className="mt-1.5 grid grid-cols-2 gap-1.5 rounded-[14px] bg-[#f5f5f7] p-1">
                <button
                  type="button"
                  onClick={() => setStudyMode('online')}
                  className={`min-h-[40px] rounded-[11px] px-3 text-[14px] font-medium transition-all ${
                    studyMode === 'online'
                      ? 'bg-white text-[#1d1d1f] shadow-sm'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Canlı Çevrimiçi
                </button>
                <button
                  type="button"
                  onClick={() => setStudyMode('hibrit')}
                  className={`min-h-[40px] rounded-[11px] px-3 text-[14px] font-medium transition-all ${
                    studyMode === 'hibrit'
                      ? 'bg-white text-[#1d1d1f] shadow-sm'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Hibrit (İstanbul)
                </button>
              </div>
            </div>

            {/* KVKK Consent */}
            <label className="flex cursor-pointer items-start gap-3 pt-1">
              <input
                type="checkbox"
                checked={kvkkAccepted}
                onChange={(e) => setKvkkAccepted(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-black/25 accent-[#0071e3]"
              />
              <span className="text-[12px] leading-[1.5] text-[#6e6e73]">
                KVKK Aydınlatma Metni kapsamında başvuru bilgilerimin eğitim
                danışmanlığı amacıyla işlenmesini onaylıyorum.
              </span>
            </label>

            {error && (
              <p
                role="alert"
                className="rounded-[12px] bg-[#ff3b30]/10 px-3.5 py-2.5 text-[13px] font-medium text-[#c92a22]"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 min-h-[46px] w-full rounded-full bg-[#0071e3] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#0077ed] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2"
            >
              Ön Kayıt Başvurusunu Gönder
            </button>
          </form>
        )}
      </div>
    </ModalShell>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Legal & Corporate Info Document Modal                                   */
/* -------------------------------------------------------------------------- */

interface InfoDocumentModalProps {
  doc: InfoDocument | null;
  onClose: () => void;
}

export function InfoDocumentModal({ doc, onClose }: InfoDocumentModalProps) {
  if (!doc) return null;

  return (
    <ModalShell
      open={Boolean(doc)}
      onClose={onClose}
      titleId="info-doc-modal-title"
      maxWidthClass="max-w-[640px]"
    >
      <div className="p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-medium text-[#6e6e73]">
              {doc.updatedAt}
            </p>
            <h2
              id="info-doc-modal-title"
              className="mt-1 text-[26px] font-semibold tracking-[-0.025em] text-[#1d1d1f]"
            >
              {doc.title}
            </h2>
            <p className="mt-1.5 text-[14px] text-[#6e6e73]">{doc.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Bilgi penceresini kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition-colors hover:bg-[#e8e8ed] hover:text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 space-y-5 border-t border-black/[0.08] pt-6">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-[15px] font-semibold text-[#1d1d1f]">
                {section.heading}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.65] text-[#424245]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end border-t border-black/[0.08] pt-5">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[42px] rounded-full bg-[#1d1d1f] px-6 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#3a3a3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
          >
            Anladım
          </button>
        </div>
      </div>
    </ModalShell>
  );
}
