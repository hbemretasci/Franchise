import { CheckCircle2, X } from 'lucide-react';

export interface ToastMessage {
  id: number;
  title: string;
  description: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-4 bottom-5 left-4 z-[120] mx-auto flex max-w-[440px] items-start gap-3.5 rounded-[20px] border border-white/15 bg-[#1d1d1f]/95 p-4 text-white shadow-2xl backdrop-blur-xl sm:right-6 sm:left-auto sm:mx-0"
    >
      <CheckCircle2
        className="mt-0.5 h-5 w-5 shrink-0 text-[#2997ff]"
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-semibold tracking-[-0.01em] text-white">
          {toast.title}
        </p>
        <p className="mt-0.5 text-[13px] leading-[1.45] text-[#d2d2d7]">
          {toast.description}
        </p>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Bildirimi kapat"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#a1a1a6] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
