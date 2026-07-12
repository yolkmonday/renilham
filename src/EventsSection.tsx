import { Icon } from '@iconify/react'

interface EventItem {
  icon: string
  title: string
  day: string
  time: string
  location: string[]
  highlight?: boolean
  mapsUrl: string
}

const EVENTS: EventItem[] = [
  {
    icon: 'mdi:heart-outline',
    title: 'Akad Nikah',
    day: 'Minggu, 19 Juli 2026',
    time: '08:00 WIB · Selesai',
    location: ['Kediaman Mempelai Wanita', 'Korong Parit, Pauh Kambar'],
    mapsUrl: 'https://maps.app.goo.gl/UQ7nhB7YVz2F5hMC9',
  },
  {
    icon: 'mdi:party-popper',
    title: 'Resepsi 1',
    day: 'Minggu, 19 Juli 2026',
    time: '11:00 – 15:00 WIB',
    location: ['Kediaman Mempelai Wanita', 'Korong Parit, Pauh Kambar'],
    mapsUrl: 'https://maps.app.goo.gl/UQ7nhB7YVz2F5hMC9',
  },
  {
    icon: 'mdi:silverware-fork-knife',
    title: 'Resepsi 2',
    day: 'Senin, 20 Juli 2026',
    time: '10:00 WIB · Selesai',
    location: ['Kediaman Mempelai Pria', 'Lantak Mingkudu'],
    highlight: true,
    mapsUrl: 'https://maps.app.goo.gl/9mtdj6aG8d7NZ1QCA',
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="section-pad bg-background">
      <div className="container-lg">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="label-caps">Rangkaian Acara</span>
          <h2 className="section-title">Jadwal Acara</h2>
          <div className="divider-gold" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EVENTS.map((ev, i) => (
            <div
              key={ev.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`rounded-2xl p-7 flex flex-col items-center text-center gap-2 transition-shadow hover:shadow-lg ${
                ev.highlight ? 'card-dark' : 'card'
              }`}
            >
              <Icon
                icon={ev.icon}
                width={34}
                className={ev.highlight ? 'text-gold mb-2' : 'text-secondary mb-2'}
              />
              <h3
                className={`font-carla text-[32px] leading-tight ${
                  ev.highlight ? 'text-gold' : 'text-primary'
                }`}
              >
                {ev.title}
              </h3>
              <span
                className={`label-caps ${ev.highlight ? 'text-secondary-fixed-dim' : ''}`}
              >
                {ev.day}
              </span>
              <p className={`font-sans-wd text-[14px] mt-1 ${ev.highlight ? 'text-primary-fixed/80' : 'text-on-surface-variant'}`}>
                {ev.time}
              </p>
              <p className={`font-sans-wd text-[14px] font-semibold leading-snug mt-1 ${ev.highlight ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                {ev.location.map((l, i) => (
                  <span key={i}>{l}{i < ev.location.length - 1 && <br />}</span>
                ))}
              </p>
              <a
                href={ev.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 ${ev.highlight ? 'btn-gold' : 'btn-primary'}`}
              >
                <Icon icon="mdi:map-marker" width={14} />
                Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
