"use client"

import { useState } from "react"
import Link from "next/link"

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is laser hair removal?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">
          A beam of light energy is used to break down and destroy the hair follicle. The laser targets the pigment
          (melanin) in the hair follicle, heating it up and damaging it to prevent future hair growth.
        </p>
        <p className="text-muted-foreground mb-3">Once the hair follicle is destroyed, a hair cannot regrow.</p>
        <p className="text-muted-foreground">
          However, hormonal changes and other factors could trigger another follicle to grow a hair in the future.
        </p>
      </>
    ),
  },
  {
    question: "How many treatments will I need?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">
          We recommend a minimum of 6 treatments, with some hair types requiring more.
        </p>
        <p className="text-muted-foreground mb-3">The average for a successful program is 8–10 treatments.</p>
        <p className="text-muted-foreground">
          It is very important to complete all treatments for optimum results.
        </p>
      </>
    ),
  },
  {
    question: "How long does the treatment take?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">
          The treatment is relatively quick and easy. The length of time depends on the area being treated.
        </p>
        <p className="text-muted-foreground">
          The treatment consists of the applicator sweeping back and forth across the desired area in a quick motion.
        </p>
      </>
    ),
  },
  {
    question: "Is laser hair removal painful?",
    answer: (
      <p className="text-muted-foreground">
        Most clients describe the sensation as a mild pinching or warm feeling. The level of discomfort varies depending
        on the individual's pain tolerance and the area being treated. Our advanced laser technology includes cooling
        features to minimise discomfort during treatment.
      </p>
    ),
  },
  {
    question: "Is laser hair removal permanent?",
    answer: (
      <p className="text-muted-foreground">
        Laser hair removal provides long-lasting hair reduction. While the treatment destroys the hair follicles, new
        follicles can develop due to hormonal changes or other factors over time. Most clients experience significant and
        permanent hair reduction, but maintenance treatments may be needed periodically.
      </p>
    ),
  },
  {
    question: "How should I prepare for my treatment?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">
          Proper preparation is essential for effective laser hair removal. Key preparation steps include:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-3">
          <li>— Avoid sun exposure for at least 3 days before treatment</li>
          <li>— Shave the area 24–48 hours before your appointment</li>
          <li>— No fake tan or spray tan for at least 2 weeks before treatment</li>
          <li>— Avoid waxing, bleaching or plucking for 4 weeks before treatment</li>
          <li>— Ensure the treatment area is clean and free from products</li>
          <li>— Avoid essential oils for 48 hours before treatment</li>
        </ul>
        <p className="text-muted-foreground">
          <Link href="/preparation" className="text-primary hover:underline">
            Visit our Preparation page
          </Link>{" "}
          for more detailed information.
        </p>
      </>
    ),
  },
  {
    question: "What aftercare is required?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">
          After your laser hair removal treatment, follow these key aftercare guidelines:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-3">
          <li>— Avoid sun exposure for at least 4 days after treatment and use SPF 30+</li>
          <li>— No shaving or applying perfume/deodorant to the area for 24–48 hours</li>
          <li>— Apply aloe vera or use cool packs if the area is red, warm or swollen</li>
          <li>— Avoid hot baths, showers, saunas and intense exercise for 2–3 days</li>
          <li>— Avoid retinols, AHAs and glycolic acids for 5–7 days</li>
        </ul>
        <p className="text-muted-foreground">
          <Link href="/aftercare" className="text-primary hover:underline">
            Visit our Aftercare page
          </Link>{" "}
          for more detailed information.
        </p>
      </>
    ),
  },
  {
    question: "How long should I wait between treatments?",
    answer: (
      <p className="text-muted-foreground">
        Typically, treatments are scheduled 4–6 weeks apart for facial areas and 6–8 weeks apart for body areas. Your
        practitioner will create a personalised treatment schedule based on your specific needs.
      </p>
    ),
  },
  {
    question: "What are your booking and cancellation policies?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">
          <strong className="text-primary/80 font-medium">Booking Policy:</strong> A 25% non-refundable deposit will be
          taken during your initial consultation to secure your first treatment session. This is redeemable against your
          treatment.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-primary/80 font-medium">Cancellation Policy:</strong> Cancellations must be made no
          later than 48 hours before your appointment for a full refund.
        </p>
      </>
    ),
  },
  {
    question: "How much does laser hair removal cost?",
    answer: (
      <>
        <p className="text-muted-foreground mb-3">Our prices vary depending on the treatment area:</p>
        <ul className="space-y-2 text-muted-foreground mb-3">
          <li>— Large areas (Full Leg, Full Back, etc.): £129 per session</li>
          <li>— Medium areas (Half Leg, Brazilian, etc.): £89 per session</li>
          <li>— Small areas (Underarm, Bikini, etc.): £49 per session</li>
          <li>— Micro areas (Upper Lip, Chin, etc.): £29 per session</li>
        </ul>
        <p className="text-muted-foreground">
          We offer significant discounts on packages of multiple treatments.{" "}
          <Link href="/price-list" className="text-primary hover:underline">
            View our complete Price List
          </Link>{" "}
          for detailed information.
        </p>
      </>
    ),
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="border-t border-primary/20">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-primary/20">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            aria-expanded={openIndex === i}
          >
            <h3 className="text-lg font-serif tracking-widest text-primary uppercase group-hover:text-primary/70 transition-colors duration-200">
              {faq.question}
            </h3>
            <span
              className="shrink-0 text-2xl font-light text-primary leading-none transition-transform duration-300"
              aria-hidden="true"
            >
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pb-6">{faq.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
