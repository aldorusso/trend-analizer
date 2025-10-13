"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Carlos Canelón uses cookies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our website</li>
                <li>To improve website performance and functionality</li>
                <li>To provide relevant content and advertising</li>
                <li>To analyze traffic and usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.2 Performance Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve how our website works.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.3 Functional Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies allow the website to remember choices you make (such as your language preference or the region you are in) and provide enhanced, more personal features.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.4 Targeting/Advertising Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that also set cookies on your device. These include:
              </p>

              <h3 className="text-xl font-semibold mb-3">4.1 Google Analytics</h3>
              <p className="text-muted-foreground mb-4">
                We use Google Analytics to analyze website traffic and usage. Google Analytics uses cookies to collect information about how visitors use our site. This information is used to compile reports and help us improve the website. The cookies collect information in an anonymous form.
              </p>
              <p className="text-muted-foreground mb-4">
                Learn more: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a>
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Social Media Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Our website may include social media features (such as Facebook, Twitter, LinkedIn buttons). These features may set cookies to enable them to function properly. These cookies are governed by the privacy policies of the respective social media platforms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookie Duration</h2>

              <h3 className="text-xl font-semibold mb-3">5.1 Session Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are temporary and expire when you close your browser.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.2 Persistent Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies remain on your device for a set period of time or until you delete them. They help us recognize you when you return to our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. How to Control Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>

              <h3 className="text-xl font-semibold mb-3">6.1 Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Allow you to accept or reject cookies on a case-by-case basis</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To learn how to manage cookies in your specific browser:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Third-Party Opt-Out Tools</h3>
              <p className="text-muted-foreground mb-4">
                You can also opt out of certain third-party cookies through:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance (DAA)</a></li>
                <li><a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">European Interactive Digital Advertising Alliance (EDAA)</a></li>
                <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground mb-4">
                If you choose to disable cookies, some features of our website may not function properly. For example:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>You may not be able to access certain areas of the website</li>
                <li>Your preferences and settings may not be saved</li>
                <li>Some interactive features may not work correctly</li>
                <li>We may not be able to provide personalized content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookies Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The updated policy will be posted on this page with a revised "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. More Information</h2>
              <p className="text-muted-foreground mb-4">
                For more information about how we use your data, please see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email: contact@carloscanelon.com</li>
                <li>Phone: +33 06 24 45 54 28</li>
                <li>Address: Marnaz, France</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
