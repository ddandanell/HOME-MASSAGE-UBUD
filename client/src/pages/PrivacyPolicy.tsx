import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LEGAL_PAGES_CONFIG } from "@/lib/legalConfig";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for Home Massage Ubud. Learn how we collect, use, and protect your personal information when you book our massage services."
        canonical="https://homemassageubud.com/privacy-policy"
        noindex={false}
      />
      
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-center mb-8">
              Last Updated: {LEGAL_PAGES_CONFIG.privacyPolicy.lastUpdated}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Home Massage Ubud ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website homemassageubud.com or use our massage services.
              </p>
              <p className="text-muted-foreground">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Book a massage service</li>
                <li>Contact us via phone, WhatsApp, or email</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a form on our website</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Villa/hotel name and address</li>
                <li>Booking preferences (treatment type, date, time)</li>
                <li>Special requests or health information relevant to the massage service</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent on pages</li>
                <li>Date and time of visit</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Process and fulfill your massage booking</li>
                <li>Communicate with you about your booking, including confirmation and reminders</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you promotional information about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                We may share your information with third-party service providers who help us operate our business, such as:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Payment processors</li>
                <li>Email service providers</li>
                <li>Website hosting services</li>
                <li>Analytics providers</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Massage Therapists</h3>
              <p className="text-muted-foreground mb-4">
                We share necessary booking information with our licensed massage therapists to fulfill your service request.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
              <p className="text-muted-foreground">
                We may disclose your information if required by law or in response to valid requests by public authorities.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our site</li>
                <li>Improve site functionality</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
              </ul>
              <p className="text-muted-foreground">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking information is typically retained for 2 years for business and legal purposes.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at hello@homemassageubud.com or +62 811-2656-869.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites, including WhatsApp for booking. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than Indonesia. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              <h2 className="text-2xl font-semibold mb-4">14. Consent</h2>
              <p className="text-muted-foreground">
                By using our website or services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
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
