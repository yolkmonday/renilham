import { useEffect, useState } from 'react'

const TARGET = new Date('2026-07-20T10:00:00+07:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function getTimeLeft(): TimeLeft {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    done: false,
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center bg-background rounded-2xl border border-outline-variant/30 px-6 py-4 min-w-[72px] shadow-sm">
      <span className="font-carla text-[36px] font-bold text-primary leading-none">{value}</span>
      <span className="label-caps text-on-surface-variant mt-2">{label}</span>
    </div>
  )
}

export default function CountdownSection() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft)

  useEffect(() => {
    if (time.done) return
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [time.done])

  return (
    <section id="countdown" className="bg-primary text-on-primary text-center flex items-center justify-center" style={{ minHeight: "50vh" }}>
      <div className="container-md px-6" data-aos="fade-up">
        <span className="label-caps text-gold">Resepsi Pihak Laki-Laki</span>

        <h2
          className="text-gold leading-tight"
          style={{ fontFamily: '"Carla Sans", sans-serif', fontSize: 'clamp(40px, 10vw, 52px)', marginTop: '4px', marginBottom: '4px' }}
        >
          Menuju Hari Bahagia
        </h2>

        <div className="w-14 h-px bg-gold mx-auto mb-5" />

        <p className="font-sans-wd text-[15px] text-on-primary/75 mb-1">
          Senin, 20 Juli 2026 · Pukul 10:00 WIB
        </p>
        <p className="font-sans-wd text-[15px] font-bold text-secondary-container mb-10">
          Kediaman Mempelai Pria · Lantak Mingkudu
        </p>

        {time.done ? (
          <p className="font-sans-wd text-[16px] text-on-primary/80 italic">
            Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. 🤲
          </p>
        ) : (
          <div className="flex justify-center gap-3 md:gap-5">
            <CountdownBox value={pad(time.days)} label="Hari" />
            <CountdownBox value={pad(time.hours)} label="Jam" />
            <CountdownBox value={pad(time.minutes)} label="Menit" />
            <CountdownBox value={pad(time.seconds)} label="Detik" />
          </div>
        )}
      </div>
    </section>
  )
}
