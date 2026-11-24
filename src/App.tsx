import { useCallback, useEffect, useState } from 'react';
import {
  EDUCATION_TIERS,
  INFO_DOCUMENTS,
  type EducationTier,
} from './data/educationData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TierSection } from './components/TierSection';
import { TestimonialsMarquee } from './components/TestimonialsMarquee';
import { Footer } from './components/Footer';
import {
  LoginModal,
  CurriculumModal,
  EnrollmentModal,
  InfoDocumentModal,
} from './components/Modals';
import { Toast, type ToastMessage } from './components/Toast';

export default function App() {
  const [activeTierId, setActiveTierId] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);
  const [curriculumTier, setCurriculumTier] = useState<EducationTier | null>(
    null,
  );
  const [enrollTier, setEnrollTier] = useState<EducationTier | null>(null);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = useCallback((title: string, description: string) => {
    const id = Date.now();
    setToast({ id, title, description });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => {
      setToast((current) => (current?.id === toast.id ? null : current));
    }, 5200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  // Track currently visible tier section for crisp top-bar active indicator
  useEffect(() => {
    const elements = EDUCATION_TIERS.map((tier) =>
      document.getElementById(tier.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveTierId(visible[0].target.id);
        } else if (window.scrollY < 320) {
          setActiveTierId(null);
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleExploreFirstTier = () => {
    const firstTierEl = document.getElementById('kademe-1');
    if (firstTierEl) {
      firstTierEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLoginSuccess = (email: string) => {
    setLoggedInEmail(email);
    showToast(
      'Hoş geldiniz',
      `${email} hesabı ile oturumunuz başarıyla açıldı.`,
    );
  };

  const handleLogout = () => {
    setLoggedInEmail(null);
    showToast('Oturum kapatıldı', 'Hesabınızdan güvenli biçimde çıkış yapıldı.');
  };

  const handleProceedFromCurriculum = (tier: EducationTier) => {
    setCurriculumTier(null);
    setEnrollTier(tier);
  };

  const handleEnrollSuccess = ({
    fullName,
    tierTitle,
  }: {
    fullName: string;
    tierTitle: string;
  }) => {
    showToast(
      'Başvurunuz başarıyla alındı',
      `${fullName}, ${tierTitle} ön kayıt talebiniz oluşturuldu.`,
    );
  };

  const activeInfoDoc = activeDocId ? (INFO_DOCUMENTS[activeDocId] ?? null) : null;

  return (
    <div className="min-h-screen w-full bg-black text-[#1d1d1f]">
      <Navbar
        activeTierId={activeTierId}
        loggedInEmail={loggedInEmail}
        onOpenLogin={() => setLoginOpen(true)}
        onLogout={handleLogout}
      />

      <main>
        <HeroSection onExploreFirstTier={handleExploreFirstTier} />

        {EDUCATION_TIERS.map((tier) => (
          <TierSection
            key={tier.id}
            tier={tier}
            onOpenDetails={setCurriculumTier}
            onOpenEnroll={setEnrollTier}
          />
        ))}

        <TestimonialsMarquee />
      </main>

      <Footer onOpenInfoDoc={setActiveDocId} />

      {/* Interactive Modals */}
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <CurriculumModal
        tier={curriculumTier}
        onClose={() => setCurriculumTier(null)}
        onProceedToEnroll={handleProceedFromCurriculum}
      />

      <EnrollmentModal
        tier={enrollTier}
        onClose={() => setEnrollTier(null)}
        onEnrollSuccess={handleEnrollSuccess}
      />

      <InfoDocumentModal
        doc={activeInfoDoc}
        onClose={() => setActiveDocId(null)}
      />

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
