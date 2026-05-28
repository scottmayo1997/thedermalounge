import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "Laser Hair Removal | THE DERMA LOUNGE",
  description:
    "Professional laser hair removal treatments at THE DERMA LOUNGE in Newport, Wales. Safe, effective, and long-lasting results for all skin types.",
}

export default function LaserHairRemovalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          title="Laser Hair Removal"
          description="Safe, effective, and long-lasting hair reduction treatments for all skin types."
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">
                  About Laser Hair Removal
                </h2>
                <p className="text-muted-foreground mb-4">
                  Laser hair removal is a non-invasive treatment that uses concentrated light to target hair follicles.
                  The pigment in the follicles absorbs the light, which damages the follicle and inhibits future hair
                  growth.
                </p>
                <p className="text-muted-foreground mb-4">
                  At THE DERMA LOUNGE, we use advanced laser technology that is safe and effective for all skin types.
                  Our treatments provide long-lasting results, reducing the need for regular shaving, waxing, or
                  plucking.
                </p>
                <p className="text-muted-foreground mb-6">
                  Most clients require 6-8 sessions for optimal results, with maintenance sessions as needed. The number
                  of sessions may vary depending on the treatment area, hair type, and individual factors.
                </p>
                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider">
                    Book Your Treatment
                  </Button>
                </a>
              </div>
              <div className="relative h-[400px] bg-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-primary/40 text-2xl font-serif tracking-widest uppercase">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Treatment Areas
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Face</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>Upper Lip</li>
                  <li>Chin</li>
                  <li>Sideburns</li>
                  <li>Full Face</li>
                  <li>Neck</li>
                </ul>
                <p className="text-primary font-medium">From £30</p>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Body</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>Underarms</li>
                  <li>Arms</li>
                  <li>Chest</li>
                  <li>Back</li>
                  <li>Stomach</li>
                </ul>
                <p className="text-primary font-medium">From £50</p>
              </div>

              <div className="border border-primary/20 p-6 bg-white">
                <h3 className="text-xl font-serif tracking-widest text-primary mb-4 uppercase">Legs</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>Bikini Line</li>
                  <li>Brazilian</li>
                  <li>Hollywood</li>
                  <li>Half Legs</li>
                  <li>Full Legs</li>
                </ul>
                <p className="text-primary font-medium">From £60</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                We offer package deals and discounts for multiple areas. Contact us for more information or to book a
                consultation.
              </p>
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider">
                  View All Treatments
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              The Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Consultation</h3>
                <p className="text-muted-foreground">
                  We'll discuss your goals, assess your skin and hair type, and create a personalized treatment plan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Preparation</h3>
                <p className="text-muted-foreground">
                  Shave the treatment area 24 hours before your appointment. Avoid sun exposure and tanning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Treatment</h3>
                <p className="text-muted-foreground">
                  The laser targets hair follicles while our cooling technology keeps you comfortable.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-serif mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">Aftercare</h3>
                <p className="text-muted-foreground">
                  Follow our aftercare instructions for optimal results and schedule your next session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING TIERS MOCKUP ── */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] text-primary/50 uppercase mb-3">Treatment Packages</p>
              <h2 className="text-3xl font-serif tracking-widest text-primary mb-5 uppercase logo-text">
                Choose Your Course
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Save more the longer you commit. Prices illustrated using Full Leg — all courses are available
                across every treatment area.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Tier 1 — Single Session */}
              <div className="border border-primary/20 bg-white p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-serif tracking-widest text-primary uppercase mb-1">
                    Single Session
                  </h3>
                  <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">Pay as you go</p>
                </div>

                <div className="border-t border-primary/10 pt-6 mb-6">
                  <p className="text-5xl font-serif text-primary leading-none mb-1">£129</p>
                  <p className="text-sm text-muted-foreground">per session</p>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground mb-10 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>Standard full-price rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>No commitment required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>Book whenever suits you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>All treatment areas available</span>
                  </li>
                </ul>

                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                  >
                    Book Now
                  </Button>
                </a>
              </div>

              {/* Tier 2 — Course of 6 (Most Popular) */}
              <div className="bg-primary relative flex flex-col p-8 md:py-12">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-white text-primary text-xs tracking-[0.2em] uppercase px-5 py-1.5 font-medium">
                    Most Popular
                  </span>
                </div>

                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-serif tracking-widest text-white uppercase mb-1">
                    Course of 6
                  </h3>
                  <p className="text-xs tracking-widest text-white/60 uppercase">Recommended for full results</p>
                </div>

                <div className="border-t border-white/20 pt-6 mb-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <p className="text-5xl font-serif text-white leading-none">£103</p>
                    <p className="text-white/70 text-sm">/ session</p>
                  </div>
                  <p className="text-sm text-white/70 mb-3">Total: £619</p>
                  <p className="inline-block text-xs tracking-widest uppercase bg-white/20 text-white px-3 py-1">
                    You save £155
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-white/80 mb-10 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0 mt-px">—</span>
                    <span>20% off the single-session price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0 mt-px">—</span>
                    <span>Split over 3 instalments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0 mt-px">—</span>
                    <span>Ideal number for most clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white shrink-0 mt-px">—</span>
                    <span>All treatment areas available</span>
                  </li>
                </ul>

                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-none bg-white text-primary hover:bg-white/90 uppercase tracking-wider">
                    Book Course
                  </Button>
                </a>
              </div>

              {/* Tier 3 — Course of 8 (Best Value) */}
              <div className="border border-primary/20 bg-white p-8 flex flex-col">
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-serif tracking-widest text-primary uppercase leading-tight">
                      Course of 8
                    </h3>
                    <span className="shrink-0 text-xs tracking-widest uppercase bg-primary/10 text-primary px-2 py-1 mt-0.5">
                      Best Value
                    </span>
                  </div>
                  <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">Maximum saving</p>
                </div>

                <div className="border-t border-primary/10 pt-6 mb-6">
                  <p className="text-5xl font-serif text-primary leading-none mb-1">£752</p>
                  <p className="text-sm text-muted-foreground mb-3">total course · £94 per session</p>
                  <p className="text-sm font-medium text-primary">You save £280</p>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground mb-10 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>Lowest per-session price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>Flexible payment available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>Complete course for optimal results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-px">—</span>
                    <span>All treatment areas available</span>
                  </li>
                </ul>

                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                  >
                    Book Course
                  </Button>
                </a>
              </div>

            </div>

            <p className="text-center text-xs tracking-widest text-muted-foreground/50 uppercase mt-10">
              Prices shown are illustrative using Full Leg · Your personalised quote discussed at consultation
            </p>
          </div>
        </section>
        {/* ── END PRICING TIERS MOCKUP ── */}

        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Book your laser hair removal consultation or treatment today. Take the first step towards smooth,
              hair-free skin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto btn-booking">
                  Book Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

