"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

type GalleryImage = {
  src: string
  alt: string
  title?: string
  subtitle?: string
}

type GallerySection = {
  id: string
  title: string
  description?: string
  images: GalleryImage[]
  aspect?: "square" | "video"
  /** Two equal columns: each image spans half the row (full width like sections with 3 columns above). */
  layout?: "default" | "twoWide"
}

function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)
  const img = images[index]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 pb-3 text-white">
          <div className="min-w-0">
            <p className="truncate font-serif tracking-widest uppercase">{img.title ?? "Gallery"}</p>
            {img.subtitle ? <p className="truncate text-white/80 text-sm">{img.subtitle}</p> : null}
          </div>
          <button
            type="button"
            className="shrink-0 rounded-sm border border-white/30 px-3 py-1 uppercase tracking-wider text-sm hover:bg-white/10"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-sm bg-black">
          <Image src={img.src} alt={img.alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 70vw" />
        </div>

        <div className="pt-3 flex items-center justify-between text-white/90 text-sm">
          <button
            type="button"
            className="rounded-sm border border-white/30 px-3 py-2 uppercase tracking-wider hover:bg-white/10"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          >
            Prev
          </button>
          <p className="uppercase tracking-wider">
            {index + 1} / {images.length}
          </p>
          <button
            type="button"
            className="rounded-sm border border-white/30 px-3 py-2 uppercase tracking-wider hover:bg-white/10"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

function GalleryGrid({
  images,
  aspect = "square",
  layout = "default",
  onImageClick,
}: {
  images: GalleryImage[]
  aspect?: "square" | "video"
  layout?: "default" | "twoWide"
  onImageClick: (idx: number) => void
}) {
  const aspectClass = aspect === "video" ? "aspect-video" : "aspect-square"
  const gridClass =
    layout === "twoWide" ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  const imageSizes =
    layout === "twoWide"
      ? "(max-width: 768px) 100vw, 50vw"
      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

  return (
    <div className={gridClass}>
      {images.map((img, idx) => (
        <button
          key={`${img.src}-${idx}`}
          type="button"
          className="border border-primary/20 p-4 bg-white text-left hover:border-primary transition-colors w-full min-w-0"
          onClick={() => onImageClick(idx)}
        >
          <div className={`relative ${aspectClass} mb-4 overflow-hidden bg-primary/5`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes={imageSizes}
            />
          </div>
          {img.title ? (
            <h3 className="text-lg font-serif tracking-widest text-primary mb-2 uppercase">{img.title}</h3>
          ) : null}
          {img.subtitle ? <p className="text-muted-foreground text-sm">{img.subtitle}</p> : null}
        </button>
      ))}
    </div>
  )
}

export function GalleryClient() {
  const sections: GallerySection[] = useMemo(
    () => [
      {
        id: "laser",
        title: "Laser Hair Removal Results",
        description: "A selection of laser hair removal results and progress photos.",
        images: [
          {
            src: "/187be629-38ea-480c-9356-63e245ff2cb5.jpg",
            alt: "Underarm after laser hair removal treatment",
            title: "Underarm Results",
            subtitle: "Post-treatment photo",
          },
          {
            src: "/1b94bd45-5dd7-4a37-8114-9427934be64b.jpg",
            alt: "Underarm area after laser hair removal",
            title: "Underarm Results",
            subtitle: "Post-treatment photo",
          },
          {
            src: "/49ca6141-9b63-4d35-96d9-f1c5e372ac16.jpg",
            alt: "Underarm after laser hair removal treatment showing reduced hair growth",
            title: "Underarm Results",
            subtitle: "Post-treatment photo",
          },
          {
            src: "/80d3d704-3346-4531-a2af-289ec644a5d4.jpg",
            alt: "Close-up of underarm skin after laser hair removal treatments",
            title: "Smooth Skin",
            subtitle: "Close-up post-treatment",
          },
          {
            src: "/f2dd207e-cc92-453d-8a1c-71279424ceeb.jpg",
            alt: "Underarm close-up after laser hair removal treatments",
            title: "Hair Reduction",
            subtitle: "Close-up post-treatment",
          },
        ],
        aspect: "square",
      },
      {
        id: "post-facial",
        title: "Post Facial Glow",
        description: "Fresh, radiant skin following our tailored facial treatments.",
        images: [
          {
            src: "/0b7815e9-872c-40cb-8b11-cf452ca6bb4c.jpg",
            alt: "Client skin after facial treatment",
            title: "Post-Facial Glow",
            subtitle: "Healthy, hydrated finish",
          },
          {
            src: "/3bb762dc-2252-4bd1-845b-db65018af285.jpg",
            alt: "Client skin after facial treatment showing a glowing complexion",
            title: "Post-Facial Glow",
            subtitle: "Radiant, smooth complexion",
          },
          {
            src: "/b98d7973-8e53-4484-94d3-aebfa8a47f97.jpg",
            alt: "Client skin after facial treatment with visible glow",
            title: "Post-Facial Glow",
            subtitle: "Fresh and luminous",
          },
          {
            src: "/7bfceea3-de57-483e-aec8-c5247fc9d4d7.jpg",
            alt: "Client smiling after facial treatment",
            title: "Post-Facial Glow",
            subtitle: "Relaxed and refreshed",
          },
          {
            src: "/99c72bbc-963b-42a9-82aa-daf68deab69a.jpg",
            alt: "Client after facial treatment",
            title: "Post-Facial Glow",
            subtitle: "Glowing, even-looking skin",
          },
          {
            src: "/90f666be-3244-4dfd-91df-a568bf26457f.jpg",
            alt: "Client after facial treatment",
            title: "Post-Facial Glow",
            subtitle: "Immediately post-treatment",
          },
        ],
        aspect: "square",
      },
      {
        id: "led",
        title: "LED Light Therapy",
        description: "LED light therapy used alongside our results-driven facial treatments.",
        images: [
          {
            src: "/844ead1b-1bfe-4684-bfea-dec231ef40cf.jpg",
            alt: "Red LED light therapy facial treatment",
            title: "Red LED",
            subtitle: "Light therapy session",
          },
          {
            src: "/c9821879-fc39-48cb-ac49-69e28595a99c.jpg",
            alt: "LED light therapy device during treatment",
            title: "LED Therapy",
            subtitle: "In-treatment setup",
          },
        ],
        aspect: "video",
        layout: "twoWide",
      },
      {
        id: "clinic",
        title: "Our Clinic",
        description: "A look inside our calm, modern treatment space.",
        images: [
          {
            src: "/thedermalounge-photo.jpg",
            alt: "Treatment room at The Derma Lounge",
            title: "Treatment Room",
            subtitle: "Prepared for your appointment",
          },
          {
            src: "/4636d567-584d-4331-ada7-2967705d5190.jpg",
            alt: "Treatment bed and equipment at The Derma Lounge",
            title: "Treatment Space",
            subtitle: "Comfortable and relaxing setup",
          },
        ],
        aspect: "video",
        layout: "twoWide",
      },
    ],
    [],
  )

  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[]
    index: number
  } | null>(null)

  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} className={section.id === "clinic" ? "py-16 bg-secondary/30" : "py-16"}>
          <div className="container">
            <h2 className="text-3xl font-serif tracking-widest text-primary mb-6 text-center uppercase logo-text">
              {section.title}
            </h2>
            {section.description ? (
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{section.description}</p>
            ) : (
              <div className="mb-12" />
            )}

            <GalleryGrid
              images={section.images}
              aspect={section.aspect}
              layout={section.layout}
              onImageClick={(idx) => setLightbox({ images: section.images, index: idx })}
            />
          </div>
        </section>
      ))}

      {lightbox ? (
        <Lightbox images={lightbox.images} initialIndex={lightbox.index} onClose={() => setLightbox(null)} />
      ) : null}
    </div>
  )
}

