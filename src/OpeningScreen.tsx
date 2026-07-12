import { useRef, useState } from 'react'
import { Icon } from '@iconify/react'

const AUDIO_URL = 'https://undanganpyk.com/wp-content/uploads/2026/03/y2mate.com-Nyoman-Paul-Andi-Rianto-The-Way-You-Look-At-Me-Official-Lyric-Video.mp3'

const BG = 'https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1615-20rs-OKE.jpg-scaled.jpeg'

interface Props {
  guestName: string | null
  onOpen: () => void
}

export default function OpeningScreen({ guestName, onOpen }: Props) {
  const [fading, setFading] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleOpen = () => {
    // Play audio on user gesture (required by browsers)
    const audio = new Audio(AUDIO_URL)
    audio.loop = true
    audio.volume = 0.7
    audio.play().catch(() => {/* autoplay blocked, silently ignore */})
    audioRef.current = audio

    setFading(true)
    setTimeout(onOpen, 700)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-center px-6 overflow-hidden transition-opacity duration-700"
      style={{ opacity: fading ? 0 : 1 }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <span
          className="uppercase tracking-[0.25em] text-white/70"
          style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '11px', fontWeight: 700 }}
        >
          Undangan Pernikahan
        </span>

        <h1
          className="text-white leading-none"
          style={{ fontFamily: '"Carla Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(44px, 10vw, 64px)', margin: 0 }}
        >
          Ilham &<br />Reni
        </h1>

        <div className="w-20 h-px my-2" style={{ backgroundColor: '#fed65b' }} />

        <p style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '18px', fontWeight: 600, color: '#fed65b' }}>
          20 Juli 2026 · Lantak Mingkudu
        </p>

        {guestName && (
          <div className="mt-5 flex flex-col items-center gap-1">
            <span
              className="uppercase tracking-widest text-white/50"
              style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '10px', fontWeight: 700 }}
            >
              Kepada Yth.
            </span>
            <span style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '28px', color: '#fed65b' }}>
              {guestName}
            </span>
          </div>
        )}

        <button
          onClick={handleOpen}
          className="mt-10 flex items-center gap-3 px-4 py-2 rounded-full bg-white text-primary hover:bg-white/90 active:scale-95 transition-all"
          style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.12em' }}
        >
          <Icon icon="mdi:email-open-outline" width={22} style={{ color: 'var(--color-primary)' }} />
          Buka Undangan
        </button>
      </div>
    </div>
  )
}
