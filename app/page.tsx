import { Button } from "@/components/ui/button"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FadeIn } from "@/components/fade-in"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Derma Lounge | Laser Hair Removal & Facials Newport, Wales",
  description:
    "Premium laser hair removal and personalised facial treatments in Newport, Wales. Visit The Derma Lounge at 242 Stow Hill or book your appointment online today.",
  keywords: [
    "laser hair removal Newport",
    "facials Newport Wales",
    "skin clinic Newport",
    "beauty treatments Wales",
    "laser clinic Wales",
    "The Derma Lounge",
    "laser hair removal Wales",
    "facial treatments Newport",
  ],
  alternates: {
    canonical: "https://www.thedermalounge.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "The Derma Lounge | Laser Hair Removal & Facials Newport, Wales",
    description:
      "Premium laser hair removal and personalised facial treatments in Newport, Wales. Visit The Derma Lounge at 242 Stow Hill or book your appointment online today.",
    url: "https://www.thedermalounge.co.uk",
    siteName: "The Derma Lounge",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://www.thedermalounge.co.uk/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Derma Lounge — Laser Hair Removal & Facials Newport, Wales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Derma Lounge | Laser Hair Removal & Facials Newport, Wales",
    description:
      "Premium laser hair removal and personalised facial treatments in Newport, Wales. Book your appointment online today.",
    images: ["https://www.thedermalounge.co.uk/hero.jpg"],
  },
  verification: {
    google: "z6EZmBwzMtrt5MlYWQGPksfJ1qK0CMSwimTnABOl8V4",
  },
  other: {
    "geo.region": "GB-WLS",
    "geo.placename": "Newport, Wales",
    "geo.position": "51.5842;-3.0067",
    "ICBM": "51.5842, -3.0067",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "BeautySalon"],
  name: "The Derma Lounge",
  url: "https://www.thedermalounge.co.uk",
  email: "thedermaloungeuk@gmail.com",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "242 Stow Hill",
    addressLocality: "Newport",
    addressRegion: "Wales",
    postalCode: "NP20 4HA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5842,
    longitude: -3.0067,
  },
  sameAs: ["https://www.instagram.com/thedermalounge_uk/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Laser Hair Removal" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Laser Hair Removal Packages" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Laser Hair Removal Bundle" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Customised Facials" },
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-primary">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="flex flex-col items-center hero-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-2 tracking-widest uppercase logo-text">
                THE
              </h2>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-2 tracking-widest uppercase logo-text">
                DERMA
              </h2>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-widest uppercase logo-text">
                LOUNGE
              </h2>
            </div>
            <div className="flex flex-col items-center hero-fade-in" style={{ animationDelay: "0.45s" }}>
              <div className="w-24 h-px bg-white mb-4"></div>
              <p className="text-white uppercase tracking-widest subtitle-text mb-12">SKIN AND LASER CLINIC</p>
            </div>
            <div className="hero-fade-in" style={{ animationDelay: "0.8s" }}>
              <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider btn-booking">
                  Book Your Appointment
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">About Us</h2>
                  <p className="text-muted-foreground mb-4">
                    THE DERMA LOUNGE is a premier skincare destination in Newport, Wales offering advanced laser hair
                    removal services and personalised facial treatments, including both relaxation facials and more
                    results-driven facials. Our clinic combines cutting-edge technology with expert care to deliver
                    exceptional results for all skin types.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We believe in a holistic approach to skincare, addressing both surface concerns and underlying factors
                    to achieve lasting radiance and health. Our team of qualified professionals is dedicated to providing
                    safe, effective treatments in a relaxing environment.
                  </p>
                  <Link href="/price-list">
                    <Button
                      variant="outline"
                      className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider"
                    >
                      View Price List
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <img
                    src="/thedermalounge-photo.jpg"
                    alt="The Derma Lounge clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <FadeIn key={index} delay={index * 100} className="h-full">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    price={service.price}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Laser Hair Removal Pricing Tiers — MOCKUP ── */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] text-primary/50 uppercase mb-3">Course Packages</p>
              <h2 className="text-3xl font-serif tracking-widest text-primary mb-5 uppercase logo-text">
                Laser Hair Removal Pricing
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Prices shown for Full Leg. Packages apply across every treatment area — your tailored quote is confirmed at consultation.
              </p>
            </div>

            {/* gap-px + bg on the grid creates a hairline divider between cards */}
            <div className="grid md:grid-cols-3 max-w-4xl mx-auto gap-px bg-primary/20 overflow-hidden">

              {/* Left — Single Session */}
              <div className="relative bg-white p-8 md:p-10 flex flex-col overflow-hidden">
                <h3 className="text-xl font-serif tracking-widest text-primary uppercase mb-1">
                  Single Session
                </h3>
                <p className="text-xs tracking-widest text-muted-foreground/60 uppercase mb-6">No commitment</p>

                <div className="border-t border-primary/10 pt-6 mb-4">
                  <p className="text-5xl font-serif text-primary leading-none mb-1">£129</p>
                  <p className="text-sm text-muted-foreground">per session</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The standard single-session rate. Book when it suits you with no upfront commitment required.
                </p>

                <ul className="space-y-2.5 text-sm text-muted-foreground mb-8 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Standard full-price rate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    All treatment areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Flexible scheduling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    No upfront commitment
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

              {/* Middle — Course of 6 (Most Popular) */}
              <div className="relative bg-stone-800 p-8 md:p-10 flex flex-col overflow-hidden">
                {/* Diagonal corner ribbon */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                  <div className="absolute top-[18px] right-[-32px] w-[120px] rotate-45 py-1 bg-primary text-white text-[9px] tracking-[0.2em] uppercase text-center font-medium">
                    Most Popular
                  </div>
                </div>

                <h3 className="text-xl font-serif tracking-widest text-white uppercase mb-1">
                  Course of 6
                </h3>
                <p className="text-xs tracking-widest text-white/50 uppercase mb-6">Recommended for full results</p>

                <div className="border-t border-white/10 pt-6 mb-4">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <p className="text-5xl font-serif text-white leading-none">£103</p>
                    <span className="text-white/60 text-sm">/ session</span>
                  </div>
                  <p className="text-sm text-white/60 mb-3">Total: £619</p>
                  <span className="inline-block text-xs tracking-widest uppercase bg-primary/40 text-white px-3 py-1">
                    Save £155
                  </span>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Our most popular course. Commit to six sessions, save 20% on every visit, and split the cost over three instalments.
                </p>

                <ul className="space-y-2.5 text-sm text-white/70 mb-8 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    20% off single-session price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    All treatment areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Split over 3 instalments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Ideal number for full results
                  </li>
                </ul>

                <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-none bg-primary hover:bg-primary/90 text-white uppercase tracking-wider">
                    Book Course
                  </Button>
                </a>
              </div>

              {/* Right — Course of 8 (Best Value) */}
              <div className="relative bg-white p-8 md:p-10 flex flex-col overflow-hidden">
                {/* Diagonal corner ribbon */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                  <div className="absolute top-[18px] right-[-32px] w-[120px] rotate-45 py-1 bg-stone-800 text-white text-[9px] tracking-[0.2em] uppercase text-center font-medium">
                    Best Value
                  </div>
                </div>

                <h3 className="text-xl font-serif tracking-widest text-primary uppercase mb-1">
                  Course of 8
                </h3>
                <p className="text-xs tracking-widest text-muted-foreground/60 uppercase mb-6">Maximum saving</p>

                <div className="border-t border-primary/10 pt-6 mb-4">
                  <p className="text-5xl font-serif text-primary leading-none mb-1">£752</p>
                  <p className="text-sm text-muted-foreground mb-3">total · £94 per session</p>
                  <span className="inline-block text-xs tracking-widest uppercase bg-primary/10 text-primary px-3 py-1">
                    Save £280
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The best-value course for lasting results. Eight sessions at our lowest per-visit rate, with flexible payment available.
                </p>

                <ul className="space-y-2.5 text-sm text-muted-foreground mb-8 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Lowest per-session price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    All treatment areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Flexible payment available
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">—</span>
                    Optimal long-term results
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
              Prices illustrated using Full Leg · All treatment areas available · Tailored quote at consultation
            </p>
          </div>
        </section>
        {/* ── END PRICING TIERS MOCKUP ── */}

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-12 text-center uppercase logo-text">
              Client Testimonials
            </h2>
            <FadeIn>
              <TestimonialsCarousel testimonials={testimonials} />
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-primary/10">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 uppercase logo-text">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Book an appointment or inquire about our services.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary h-5 w-5" />
                    <span className="text-muted-foreground">242 Stow Hill, Newport, Wales, NP20 4HA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary h-5 w-5" />
                    <span className="text-muted-foreground">Contact us via Instagram or email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary h-5 w-5" />
                    <span className="text-muted-foreground">thedermaloungeuk@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="text-primary h-5 w-5" />
                    <a
                      href="https://www.instagram.com/thedermalounge_uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @thedermalounge_uk
                    </a>
                  </div>
                </div>
              </div>

              <form
                action="https://formspree.io/f/mdkelpqp"
                method="POST"
                className="space-y-4 bg-white p-6 border border-primary/20"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border border-primary/20 focus:border-primary outline-none min-h-[120px]"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
        {/* Booking Section */}
        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-serif tracking-widest text-white mb-6 uppercase logo-text">
              Book Your Treatment
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to experience our premium laser hair removal and facial treatments? Book your appointment online
              today.
            </p>
            <a href="https://the-derma-lounge.book.app/book-now" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-white/90 text-primary rounded-none px-8 py-6 uppercase tracking-wider btn-booking">
                Book Now
              </Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

const services = [
  {
    title: "Laser Hair Removal",
    description: "Advanced laser technology for permanent hair reduction. Safe and effective for various skin types.",
    price: "From £49",
  },
  {
    title: "Laser Hair Removal Packages",
    description:
      "Save when purchasing a laser hair removal package. Packages include discounts and can be paid upfront or a payment plan can be arranged. These can be tailored for each individual.",
    price: "From £70",
  },
  {
    title: "Facials",
    description:
      "Customised facial treatments to address your specific skin concerns, including cleansing, exfoliation, and hydration.",
    price: "From £30",
  },
  {
    title: "Laser Hair Removal Bundle",
    description: "Buy 6 sessions and get 2 free. Our most popular option for achieving optimal results.",
    price: "Buy 6 Get 2 Free",
  },
]

const testimonials = [
  {
    name: "Emily F.",
    location: "Newport, Wales",
    quote: "Amazing 😍😍😍 Lucy is fab, 100% recommend!!",
  },
  {
    name: "Myah",
    location: "Newport, Wales",
    quote:
      "Lucy was super welcoming, knowledgable and confident in what she does and very easy to talk to. Can't wait for my next session!",
  },
]

