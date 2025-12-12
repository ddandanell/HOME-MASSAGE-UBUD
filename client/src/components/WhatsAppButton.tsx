import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateGeneralInquiryMessage, openWhatsApp, CTA_TEXT } from '@/lib/whatsapp';

/**
 * Unified WhatsApp floating button component
 * Replaces: FloatingWhatsApp.tsx, WhatsAppFloat.tsx
 * 
 * Design decisions:
 * - Single implementation for consistency
 * - Appears after scrolling 100px
 * - Mobile: Bottom-left, simple circular button
 * - Desktop: Bottom-right, expandable with label
 * - Consistent emerald-200 branding
 */

interface WhatsAppButtonProps {
  variant?: 'mobile' | 'desktop' | 'both';
  message?: string;
}

export default function WhatsAppButton({ 
  variant = 'both',
  message 
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    openWhatsApp(message || generateGeneralInquiryMessage());
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile version - Bottom left */}
      {(variant === 'mobile' || variant === 'both') && (
        <div className="fixed bottom-4 left-4 z-50 md:hidden">
          <Button
            onClick={handleClick}
            className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl p-0"
            aria-label={CTA_TEXT.WHATSAPP}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Desktop version - Bottom right with expandable label */}
      {(variant === 'desktop' || variant === 'both') && (
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <Button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
            aria-label={CTA_TEXT.WHATSAPP}
          >
            <MessageCircle className="h-5 w-5" />
            <span className={`transition-all duration-300 overflow-hidden ${
              isHovered ? 'max-w-xs ml-2' : 'max-w-0 ml-0'
            }`}>
              <span className="whitespace-nowrap">{CTA_TEXT.PRIMARY}</span>
            </span>
          </Button>
        </div>
      )}
    </>
  );
}

/**
 * Quick Book button variant (appears on scroll, pulsing animation)
 * Used in headers and hero sections for prominent CTA
 */
export function QuickBookButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <Button 
        onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
        size="lg"
        className="shadow-lg hover:shadow-xl animate-pulse"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        {CTA_TEXT.QUICK_BOOK}
      </Button>
    </div>
  );
}
