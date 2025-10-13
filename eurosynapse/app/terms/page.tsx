"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the services provided by Carlos Canelón ("we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">
                We provide professional web development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Website design and development</li>
                <li>Custom software development</li>
                <li>E-commerce platforms and solutions</li>
                <li>Web and mobile application development</li>
                <li>AI-powered solutions and automation</li>
                <li>Ongoing support and maintenance</li>
                <li>IT strategy and consulting</li>
                <li>Digital advertising and campaigns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Project Terms</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Proposals and Quotes</h3>
              <p className="text-muted-foreground mb-4">
                All project proposals and quotes are valid for 30 days from the date of issue. Prices are subject to change after this period.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.2 Payment Terms</h3>
              <p className="text-muted-foreground mb-4">
                Unless otherwise agreed, payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>50% deposit required to begin work</li>
                <li>Remaining 50% due upon project completion</li>
                <li>Monthly retainers billed at the beginning of each month</li>
                <li>Late payments may incur a 5% monthly interest charge</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3 Project Timeline</h3>
              <p className="text-muted-foreground mb-4">
                We strive to meet all agreed-upon deadlines. However, timelines may be affected by client delays in providing materials, feedback, or approvals. We will communicate any necessary timeline adjustments promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-3">4.1 Client Ownership</h3>
              <p className="text-muted-foreground mb-4">
                Upon full payment, clients own all custom code, designs, and content created specifically for their project. This excludes third-party libraries, frameworks, and pre-existing code.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Portfolio Rights</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to display completed projects in our portfolio and marketing materials unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Warranties and Liability</h2>
              <h3 className="text-xl font-semibold mb-3">5.1 Warranty Period</h3>
              <p className="text-muted-foreground mb-4">
                We provide a 30-day warranty on all delivered work to fix any bugs or issues that arise from our code. This does not cover issues caused by client modifications or third-party services.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.2 Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                Our liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                We treat all client information as confidential and will not disclose it to third parties without permission, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate a project with 14 days written notice. In the event of termination, clients are responsible for payment for all work completed up to the termination date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms are governed by the laws of France. Any disputes will be resolved in the courts of France.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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
