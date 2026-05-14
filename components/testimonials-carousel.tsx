"use client"

import { useState, useEffect } from "react"

interface Testimonial {
  name: string
  location: string
  quote: string
}

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  // Append a clone of the first item so the loop snaps back seamlessly
  const slides = [...testimonials, testimonials[0]]
  const [index, setIndex] = useState(0)
  const [animated, setAnimated] = useState(true)

  // Active dot tracks real testimonials, not the clone
  const activeDot = index % testimonials.length

  useEffect(() => {
    const id = setInterval(() => {
      setAnimated(true)
      setIndex(i => i + 1)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // When the slide to the clone finishes, snap instantly back to the real first
  const handleTransitionEnd = () => {
    if (index === testimonials.length) {
      setAnimated(false)
      setIndex(0)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(index / slides.length) * 100}%)`,
            transition: animated ? "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((t, i) => (
            <div
              key={i}
              className="px-2"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="p-8 md:p-10 border border-primary/20 text-center">
                <p className="text-muted-foreground italic mb-8 leading-relaxed text-base md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-px bg-primary" />
                  <div>
                    <p className="font-medium uppercase tracking-wider text-sm">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="w-10 h-px bg-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeDot ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
