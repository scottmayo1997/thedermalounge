import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GalleryClient } from "@/components/gallery/gallery-client"

export const metadata: Metadata = {
  title: "Treatment Gallery | The Derma Lounge Newport",
  description:
    "Browse our gallery of results from laser hair removal and facial treatments at The Derma Lounge, Newport, Wales.",
  alternates: { canonical: "https://www.thedermalounge.co.uk/gallery" },
  openGraph: {
    title: "Treatment Gallery | The Derma Lounge Newport",
    description:
      "Browse our gallery of results from laser hair removal and facial treatments at The Derma Lounge, Newport, Wales.",
    url: "https://www.thedermalounge.co.uk/gallery",
    siteName: "The Derma Lounge",
    locale: "en_GB",
    type: "website",
  },
}


export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader title="Gallery" description="View our treatment results and clinic photos." />
        <GalleryClient />

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Experience The Results Yourself
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to see your own transformation? Book your appointment today and take the first step towards
              beautiful, radiant skin.
            </p>
            <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider btn-booking">
                Book Your Appointment
              </Button>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

