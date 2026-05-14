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
                <FadeIn key={index} delay={index * 100}>
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
    price: "",
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
    name: "Client",
    location: "Newport, Wales",
    quote:
      "Lucy was super welcoming, knowledgable and confident in what she does and very easy to talk to. Can't wait for my next session!",
  },
]

