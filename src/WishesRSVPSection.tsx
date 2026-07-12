import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const API = 'https://renilham-api.9pf4d9nk6n.workers.dev'

interface Wish {
  id: number
  name: string
  message: string
  created_at: string
}

export default function WishesRSVPSection() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | ''>('')
  const [guestCount, setGuestCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const fetchWishes = async () => {
    const res = await fetch(`${API}/wishes`)
    const data = await res.json() as Wish[]
    setWishes(data)
  }

  useEffect(() => { fetchWishes() }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || !attendance) return
    setLoading(true)

    // Submit wish
    await fetch(`${API}/wishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    })

    // Submit RSVP
    await fetch(`${API}/rsvp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attendance, guest_count: guestCount }),
    })

    setSubmitted(true)
    setName('')
    setMessage('')
    setAttendance('')
    setGuestCount(1)
    setLoading(false)
    fetchWishes()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="wishes-rsvp" className="section-pad bg-surface-container-low">
      <div className="container-lg max-w-2xl">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="label-caps">Ucapan &amp; Kehadiran</span>
          <h2 className="section-title">RSVP &amp; Doa</h2>
          <div className="divider-gold" />
          <p className="font-sans-wd text-[14px] text-on-surface-variant mt-4">
            Konfirmasi kehadiran dan kirim doa untuk Ilham &amp; Reni
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card flex flex-col gap-4 mb-8" data-aos="fade-up">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="label-caps text-on-surface-variant">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={100}
              required
              className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface text-on-surface text-[14px] font-sans focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="label-caps text-on-surface-variant">Ucapan &amp; Doa</label>
            <textarea
              placeholder="Tulis doa &amp; ucapan untuk Ilham &amp; Reni..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              maxLength={500}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface text-on-surface text-[14px] font-sans focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>

          {/* Attendance */}
          <div className="flex flex-col gap-1.5">
            <label className="label-caps text-on-surface-variant">Kehadiran</label>
            <div className="grid grid-cols-2 gap-3">
              {(['hadir', 'tidak_hadir'] as const).map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAttendance(val)}
                  className={`py-2.5 rounded-lg border text-[13px] font-bold uppercase tracking-widest transition-all ${
                    attendance === val
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface border-outline-variant text-on-surface-variant hover:border-primary'
                  }`}
                >
                  {val === 'hadir' ? '✓ Hadir' : '✗ Tidak Hadir'}
                </button>
              ))}
            </div>
          </div>

          {/* Guest count — only if hadir */}
          {attendance === 'hadir' && (
            <div className="flex flex-col gap-1.5">
              <label className="label-caps text-on-surface-variant">Jumlah Tamu</label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setGuestCount(c => Math.max(1, c - 1))}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                >
                  <Icon icon="mdi:minus" width={18} />
                </button>
                <span className="font-carla text-[28px] text-primary w-8 text-center">{guestCount}</span>
                <button
                  type="button"
                  onClick={() => setGuestCount(c => Math.min(20, c + 1))}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                >
                  <Icon icon="mdi:plus" width={18} />
                </button>
                <span className="font-sans-wd text-[13px] text-on-surface-variant">orang</span>
              </div>
            </div>
          )}

          <button type="submit" disabled={loading || !attendance} className="btn-gold self-stretch justify-center mt-2">
            <Icon icon={submitted ? 'mdi:check' : 'mdi:send'} width={14} />
            {submitted ? 'Terkirim!' : loading ? 'Mengirim...' : 'Kirim'}
          </button>
        </form>

        {/* Wishes list */}
        <div className="flex flex-col gap-4">
          <h3 className="font-carla text-[24px] text-primary text-center mb-2" data-aos="fade-up">
            Ucapan dari Tamu
          </h3>
          {wishes.map((w, i) => (
            <div key={w.id} className="card flex gap-4" data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon icon="mdi:account" width={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-carla text-[18px] text-primary leading-tight">{w.name}</p>
                <p className="font-sans-wd text-[14px] text-on-surface-variant mt-1 leading-relaxed">{w.message}</p>
                <p className="font-sans-wd text-[11px] text-outline mt-2">
                  {new Date(w.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>
          ))}
          {wishes.length === 0 && (
            <p className="text-center font-sans-wd text-[14px] text-outline py-8">
              Jadilah yang pertama memberikan ucapan 🌸
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
