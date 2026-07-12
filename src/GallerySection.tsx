import { useState, useEffect, useCallback } from 'react'
import { Icon } from '@iconify/react'

const PHOTOS = [
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1790-ok.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1839.jpg-1-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1825.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1660-ok.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1561.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-22.09.05.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1547.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1569-ok-20rs.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1582.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1660.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1615-20rs-OKE.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1704.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1586-20rs-OKE.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1839.JPG-768x1152.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1790.JPG-683x1024.jpeg',
]

interface LightboxProps {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Tutup"
      >
        <Icon icon="mdi:close" width={32} />
      </button>

      {/* Counter */}
      <span
        className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 z-10"
        style={{ fontFamily: 'Carla Sans, sans-serif', fontSize: '13px' }}
      >
        {index + 1} / {PHOTOS.length}
      </span>

      {/* Prev */}
      <button
        className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors z-10 p-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Sebelumnya"
      >
        <Icon icon="mdi:chevron-left" width={40} />
      </button>

      {/* Image */}
      <img
        src={PHOTOS[index]}
        alt={`Ilham & Reni ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors z-10 p-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Berikutnya"
      >
        <Icon icon="mdi:chevron-right" width={40} />
      </button>
    </div>
  )
}

export default function GallerySection() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => setActive(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null), [])
  const next = useCallback(() => setActive(i => i !== null ? (i + 1) % PHOTOS.length : null), [])

  return (
    <section id="gallery" className="section-pad bg-surface-container">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="label-caps">Momen Bersama</span>
          <h2 className="section-title">Galeri</h2>
          <div className="divider-gold" />
        </div>

        {/* Masonry grid */}
        <div
          className="columns-2 md:columns-3"
          style={{ columnGap: '12px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-gold/20 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setActive(i)}
            >
              <img
                src={src}
                alt={`Ilham & Reni ${i + 1}`}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <Lightbox index={active} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}
