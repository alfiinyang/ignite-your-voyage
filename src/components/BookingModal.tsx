// src/components/BookingModal.tsx
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

const BookingModal = ({ isOpen, onClose, serviceName }: BookingModalProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    const initForm = () => {
      if (!formContainerRef.current) return;

      // Clear any previously rendered form
      formContainerRef.current.innerHTML = "";

      const formDiv = document.createElement("div");
      formDiv.className = "hs-form-frame";
      formDiv.setAttribute("data-region", "eu1");
      formDiv.setAttribute("data-form-id", "bd46be24-cabe-4408-836b-e98f284f29c0");
      formDiv.setAttribute("data-portal-id", "147618081");
      formContainerRef.current.appendChild(formDiv);

      // Re-trigger HubSpot embed processing
      if ((window as any).hsFormsOnReady) {
        (window as any).hsFormsOnReady();
      }
    };

    const existingScript = document.querySelector(
      'script[src="https://js-eu1.hsforms.net/forms/embed/147618081.js"]'
    );

    if (existingScript && scriptLoadedRef.current) {
      initForm();
    } else if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js-eu1.hsforms.net/forms/embed/147618081.js";
      script.defer = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        // Small delay to let HubSpot initialize
        setTimeout(initForm, 300);
      };
      document.body.appendChild(script);
    } else {
      // Script tag exists but may still be loading
      existingScript.addEventListener("load", () => {
        scriptLoadedRef.current = true;
        setTimeout(initForm, 300);
      });
      // If already loaded
      setTimeout(initForm, 300);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Book ${serviceName}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-background rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-border">
        {/* Header */}
        <div className="sticky top-0 bg-background z-10 flex items-start justify-between p-6 pb-4 border-b border-border">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              Get Started
            </p>
            <h2 className="text-xl font-bold text-foreground">
              Book: <span className="text-primary">{serviceName}</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Fill out the form and we'll be in touch within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <div ref={formContainerRef} />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;