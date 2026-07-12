import { useEffect, useState } from 'react'

const BG_PHOTOS = [
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1586-20rs-OKE.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1704.JPG-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1615-20rs-OKE.jpg-scaled.jpeg',
  'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1660.JPG-scaled.jpeg',
]

const INTERVAL = 4000

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current)
      setAnimating(true)
      setCurrent(c => (c + 1) % BG_PHOTOS.length)
      setTimeout(() => {
        setPrev(null)
        setAnimating(false)
      }, 1200)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [current])

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Prev image (fading out) */}
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_PHOTOS[prev]})`,
            opacity: animating ? 0 : 1,
            transition: 'opacity 1.2s ease-in-out',
          }}
        />
      )}

      {/* Current image (zooming in) */}
      <div
        key={`curr-${current}`}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG_PHOTOS[current]})`,
          animation: 'heroZoom 5s ease-out forwards',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3" data-aos="fade-up">
        <span
          className="uppercase tracking-[0.25em] text-white/80"
          style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '11px', fontWeight: 700 }}
        >
          The Wedding Of
        </span>

        <h1
          className="text-white leading-none"
          style={{ fontFamily: '"Carla Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(48px, 10vw, 72px)', margin: 0 }}
        >
          Ilham &<br />Reni
        </h1>

        <div className="flex flex-col items-center gap-2 mt-6">
          <span
            style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '22px', fontWeight: 600, color: '#fed65b' }}
          >
            20 Juli 2026
          </span>
          <div className="w-20 h-px bg-gold" />
          <span
            className="uppercase tracking-widest text-white/70"
            style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em' }}
          >
            Lantak Mingkudu · Sumatera Barat
          </span>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {BG_PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === current ? '#fed65b' : 'rgba(255,255,255,0.4)',
            }}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
