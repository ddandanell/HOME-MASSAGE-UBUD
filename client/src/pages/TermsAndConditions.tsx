import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions"
        description="Terms and Conditions for Home Massage Ubud. Read our booking policies, cancellation rules, and service terms for in-villa massage services in Bali."
        canonical="https://homemassageubud.com/terms-and-conditions"
        noindex={false}
      />
      
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-center mb-8">
              Last Updated: January 18, 2026
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the Home Massage Ubud website (homemassageubud.com) or booking our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.
              </p>
              <p className="text-muted-foreground">
                These Terms and Conditions constitute a legally binding agreement between you and Home Massage Ubud regarding your use of our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Home Massage Ubud provides professional in-villa massage and wellness services throughout Ubud, Bali, and surrounding areas. Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Traditional Balinese massage</li>
                <li>Deep tissue massage</li>
                <li>Aromatherapy massage</li>
                <li>Hot stone massage</li>
                <li>Thai massage</li>
                <li>Couples massage</li>
                <li>Other specialized treatments as listed on our website</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Booking and Reservations</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 How to Book</h3>
              <p className="text-muted-foreground mb-4">
                Bookings can be made through:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>WhatsApp: +62 811-2656-869</li>
                <li>Email: hello@homemassageubud.com</li>
                <li>Website contact form</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">3.2 Booking Confirmation</h3>
              <p className="text-muted-foreground mb-4">
                A booking is confirmed once you receive confirmation from us via WhatsApp, email, or SMS. We recommend booking at least 24-48 hours in advance to ensure availability, especially during peak season.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">3.3 Minimum Notice</h3>
              <p className="text-muted-foreground">
                We require a minimum of 2 hours notice for bookings, subject to therapist availability. Same-day bookings are accepted on a first-come, first-served basis.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Cancellation and Rescheduling Policy</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Client Cancellations</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>More than 6 hours before appointment:</strong> Full refund or free rescheduling</li>
                <li><strong>3-6 hours before appointment:</strong> 50% cancellation fee or free rescheduling</li>
                <li><strong>Less than 3 hours before appointment:</strong> 100% cancellation fee, no refund</li>
                <li><strong>No-show:</strong> 100% charge, no refund</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">4.2 Rescheduling</h3>
              <p className="text-muted-foreground mb-4">
                You may reschedule your appointment free of charge if you provide at least 6 hours notice. Rescheduling requests with less notice are subject to availability and may incur fees.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">4.3 Our Cancellations</h3>
              <p className="text-muted-foreground">
                In rare cases where we need to cancel (therapist illness, emergency, weather), we will notify you immediately and offer a full refund or alternative time slot at no extra charge.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Accepted Payment Methods</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Cash (IDR preferred)</li>
                <li>Bank transfer</li>
                <li>Credit/debit cards (where available)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">5.2 Payment Timing</h3>
              <p className="text-muted-foreground mb-4">
                Payment is due at the completion of the service unless other arrangements have been made in advance.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">5.3 Pricing</h3>
              <p className="text-muted-foreground mb-4">
                All prices are listed in Indonesian Rupiah (IDR). Prices are subject to change without notice, but confirmed bookings honor the quoted price.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">5.4 Tips and Gratuities</h3>
              <p className="text-muted-foreground">
                Tips are not included in our prices but are greatly appreciated for excellent service. Typical gratuity is 10-20% of the service fee.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Service Location and Access</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Service Areas</h3>
              <p className="text-muted-foreground mb-4">
                We provide services throughout Ubud center, Tegallalang, Sanggingan, Campuhan, Penestanan, and surrounding areas within a 15km radius of Ubud center.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">6.2 Location Requirements</h3>
              <p className="text-muted-foreground mb-4">
                You must provide:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Accurate villa/hotel name and address</li>
                <li>Contact phone number</li>
                <li>Any special access instructions</li>
                <li>Suitable massage location within your accommodation</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">6.3 Massage Space</h3>
              <p className="text-muted-foreground">
                You are responsible for providing a suitable space for the massage (quiet area with adequate lighting, temperature control, and privacy). Our therapists bring all necessary equipment including massage table, linens, and oils.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Health and Safety</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Health Disclosure</h3>
              <p className="text-muted-foreground mb-4">
                You must disclose any health conditions, injuries, allergies, or concerns that may affect your massage treatment, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Pregnancy</li>
                <li>Recent surgeries or injuries</li>
                <li>Skin conditions</li>
                <li>Allergies to oils or lotions</li>
                <li>Heart conditions or blood pressure issues</li>
                <li>Any other medical conditions</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">7.2 Medical Advice</h3>
              <p className="text-muted-foreground mb-4">
                Our massage services are for relaxation and wellness purposes only. They do not replace medical treatment. If you have any medical concerns, please consult a healthcare professional before booking.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">7.3 Hygiene Standards</h3>
              <p className="text-muted-foreground mb-4">
                We maintain strict hygiene protocols:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Fresh linens for every client</li>
                <li>Sanitized equipment</li>
                <li>Therapists practice good personal hygiene</li>
                <li>Single-use products where applicable</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Professional Conduct</h2>
              
              <h3 className="text-xl font-semibold mb-3">8.1 Our Standards</h3>
              <p className="text-muted-foreground mb-4">
                All our therapists are licensed professionals who maintain the highest standards of ethical conduct. Our services are strictly therapeutic and professional.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">8.2 Zero Tolerance Policy</h3>
              <p className="text-muted-foreground mb-4">
                We have a zero-tolerance policy for inappropriate behavior from either clients or therapists. Any form of sexual misconduct will result in immediate termination of service without refund and may be reported to authorities.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">8.3 Client Conduct</h3>
              <p className="text-muted-foreground">
                Clients are expected to behave respectfully toward our therapists. We reserve the right to refuse or terminate service to anyone who is intoxicated, abusive, or behaves inappropriately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Liability and Indemnification</h2>
              
              <h3 className="text-xl font-semibold mb-3">9.1 Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                While we take every precaution to ensure your safety and satisfaction, Home Massage Ubud is not liable for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Injuries resulting from undisclosed health conditions</li>
                <li>Allergic reactions to products (when allergies were not disclosed)</li>
                <li>Theft or loss of personal property during service</li>
                <li>Indirect, consequential, or incidental damages</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">9.2 Maximum Liability</h3>
              <p className="text-muted-foreground mb-4">
                Our maximum liability for any claim is limited to the amount paid for the service in question.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">9.3 Client Responsibility</h3>
              <p className="text-muted-foreground">
                You are responsible for securing your personal belongings during the massage service. We recommend keeping valuables in a safe place.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on the Home Massage Ubud website, including text, images, logos, and graphics, is the property of Home Massage Ubud or its licensors and is protected by copyright and trademark laws.
              </p>
              <p className="text-muted-foreground">
                You may not reproduce, distribute, modify, or create derivative works from our content without written permission.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Reviews and Testimonials</h2>
              <p className="text-muted-foreground mb-4">
                By submitting a review or testimonial, you grant us permission to use your feedback for marketing purposes, including on our website, social media, and promotional materials. We may edit reviews for clarity or length but will not alter the substance of your feedback.
              </p>
              <p className="text-muted-foreground">
                Reviews must be honest, accurate, and not contain offensive or defamatory content. We reserve the right to remove inappropriate reviews.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Force Majeure</h2>
              <p className="text-muted-foreground">
                We are not liable for failure to perform our services due to circumstances beyond our control, including natural disasters, severe weather, government actions, civil unrest, or other force majeure events. In such cases, we will work with you to reschedule or provide a full refund.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-3">13.1 Informal Resolution</h3>
              <p className="text-muted-foreground mb-4">
                If you have any concerns or complaints about our services, please contact us immediately. We are committed to resolving issues promptly and fairly.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">13.2 Governing Law</h3>
              <p className="text-muted-foreground mb-4">
                These Terms and Conditions are governed by the laws of Indonesia. Any disputes will be subject to the exclusive jurisdiction of the courts in Bali, Indonesia.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">13.3 Arbitration</h3>
              <p className="text-muted-foreground">
                For disputes exceeding IDR 10,000,000, we prefer to resolve through binding arbitration in accordance with Indonesian arbitration law.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Privacy and Data Protection</h2>
              <p className="text-muted-foreground">
                Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to our Privacy Policy.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
              <p className="text-muted-foreground">
                We will notify you of material changes via email (if you have provided an email address) or by posting a notice on our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
              <p className="text-muted-foreground">
                These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and Home Massage Ubud regarding your use of our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="font-semibold mb-2">Home Massage Ubud</p>
                <p className="text-muted-foreground">Email: hello@homemassageubud.com</p>
                <p className="text-muted-foreground">Phone/WhatsApp: +62 811-2656-869</p>
                <p className="text-muted-foreground">Website: https://homemassageubud.com</p>
                <p className="text-muted-foreground">Location: Ubud, Bali, Indonesia</p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">19. Acknowledgment</h2>
              <p className="text-muted-foreground">
                By using our website or booking our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
