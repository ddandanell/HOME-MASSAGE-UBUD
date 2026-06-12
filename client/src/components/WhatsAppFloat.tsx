import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";

export default function WhatsAppFloat() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-200 hover:bg-emerald-300 text-gray-900 shadow-2xl animate-pulse"
        data-testid="whatsapp-float-button"
        style={{ touchAction: 'manipulation' }}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Tooltip - hidden on mobile (touch devices), visible on sm+ hover */}
      <div className="hidden sm:block absolute bottom-20 right-0 bg-card border border-border rounded-lg p-3 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <p className="text-sm font-medium">💬 Chat with us on WhatsApp</p>
        <p className="text-xs text-muted-foreground">Quick booking & instant replies</p>
      </div>

      <WhatsAppBookingModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
}
