import { useState } from 'react'
import { Icon } from '@iconify/react'

const API = 'https://renilham-api.9pf4d9nk6n.workers.dev'

export default function RSVPSection() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | ''>('')
  const [guestCount, setGuestCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !attendance) return
    setLoading(true)
    await fetch(`${API}/rsvp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attendance, guest_count: guestCount }),
    })
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <section id="rsvp" className="section-pad bg-background">
        <div className="container-lg max-w-lg text-center" data-aos="fade-up">
          <Icon icon="mdi:check-circle" width={56} className="text-secondary mx-auto mb-4" />
          <h2 className="font-carla text-[32px] text-primary mb-2">Terima Kasih!</h2>
          <p className="font-sans-wd text-[15px] text-on-surface-variant">
            {attendance === 'hadir'
              ? `Kami tunggu kehadiran ${name} di hari bahagia kami 🎉`
              : `Terima kasih atas doa dan perhatian ${name} 🙏`}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="section-pad bg-background">
      <div className="container-lg max-w-lg">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="label-caps">Konfirmasi Kehadiran</span>
          <h2 className="section-title">RSVP</h2>
          <div className="divider-gold" />
          <p className="font-sans-wd text-[14px] text-on-surface-variant mt-4">
            Mohon konfirmasi kehadiran sebelum <strong>15 Juli 2026</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card flex flex-col gap-5" data-aos="fade-up">
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

          {/* Attendance */}
          <div className="flex flex-col gap-1.5">
            <label className="label-caps text-on-surface-variant">Kehadiran</label>
            <div className="grid grid-cols-2 gap-3">
              {(['hadir', 'tidak_hadir'] as const).map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAttendance(val)}
                  className={`py-3 rounded-lg border text-[13px] font-bold uppercase tracking-widest transition-all ${
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

          <button type="submit" disabled={loading || !attendance} className="btn-gold mt-2 self-stretch justify-center">
            <Icon icon="mdi:send" width={14} />
            {loading ? 'Mengirim...' : 'Konfirmasi Kehadiran'}
          </button>
        </form>
      </div>
    </section>
  )
}
