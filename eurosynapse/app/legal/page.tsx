"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Legal Notice</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <p className="text-muted-foreground mb-4">
                This website is managed by:
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-2">
                  <strong>CARLOS CANELON</strong>
                </p>
                <p className="text-muted-foreground mb-2">
                  IMPASSE DE LA VIGNE<br />
                  74460 MARNAZ, FRANCE
                </p>
                <p className="text-muted-foreground">
                  Tel: +33 06 24 45 54 28
                </p>
              </div>
              <p className="text-muted-foreground">
                <strong>Publication Director:</strong> Carlos CANELON – Company Manager
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Company Identification</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li><strong>Phone:</strong> +33 06 24 45 54 28</li>
                  <li><strong>SIRET:</strong> 91087077300017</li>
                  <li><strong>APE Code:</strong> Computer Programming (6201Z)</li>
                  <li><strong>VAT Number:</strong> FR14910870773</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Website Creation</h2>
              <p className="text-muted-foreground mb-4">
                This website was created by <strong>CARLOS CANELON</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                <a href="https://www.carlosraulcanelon.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.carlosraulcanelon.com
                </a>
              </p>
              <p className="text-muted-foreground mb-4">
                It is hosted by <strong>Name Hero, LLC.</strong><br />
                680 S Cache Street, Suite 100-12679<br />
                Jackson, Wyoming 83002, USA
              </p>
              <p className="text-muted-foreground mb-4">
                <a href="https://www.namehero.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.namehero.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Website Images:</strong> Account crcc23@gmail.com –{" "}
                <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.freepik.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                This website does not store any data related to its visitors. Information collected through the contact form is only transmitted to us by email.
              </p>
              <p className="text-muted-foreground mb-4">
                In accordance with Law No. 787-17 of June 16, 1978 (CNIL), you may notify us by mail or email of any errors or changes regarding the information you provide, or request to be removed from our database.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
              <p className="text-muted-foreground mb-4">
                All content on this website is protected by copyright. Any reproduction of any element of this website is prohibited, whether graphic, text, or photo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding this legal notice, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email: contact@carloscanelon.com</li>
                <li>Phone: +33 06 24 45 54 28</li>
                <li>Address: Impasse de la Vigne, 74460 Marnaz, France</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
