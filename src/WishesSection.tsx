import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const API = 'https://renilham-api.9pf4d9nk6n.workers.dev'

interface Wish {
  id: number
  name: string
  message: string
  created_at: string
}

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
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
    if (!name.trim() || !message.trim()) return
    setLoading(true)
    await fetch(`${API}/wishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    })
    setSubmitted(true)
    setName('')
    setMessage('')
    setLoading(false)
    fetchWishes()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="wishes" className="section-pad bg-surface-container-low">
      <div className="container-lg max-w-2xl">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="label-caps">Doa &amp; Harapan</span>
          <h2 className="section-title">Ucapan &amp; Doa</h2>
          <div className="divider-gold" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card flex flex-col gap-4 mb-8" data-aos="fade-up">
          <input
            type="text"
            placeholder="Nama kamu"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={100}
            required
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-on-surface text-[14px] font-sans focus:outline-none focus:border-secondary transition-colors"
          />
          <textarea
            placeholder="Tulis doa &amp; ucapan untuk Ilham &amp; Reni..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            maxLength={500}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface text-on-surface text-[14px] font-sans focus:outline-none focus:border-secondary transition-colors resize-none"
          />
          <button type="submit" disabled={loading} className="btn-gold self-end">
            <Icon icon={submitted ? 'mdi:check' : 'mdi:send'} width={14} />
            {submitted ? 'Terkirim!' : loading ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>

        {/* Wishes list */}
        <div className="flex flex-col gap-4">
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
