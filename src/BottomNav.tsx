import { Icon } from '@iconify/react'

const NAV_ITEMS = [
  { icon: 'mdi:home-outline', label: 'Home', href: '#home' },
  { icon: 'mdi:heart-outline', label: 'Pasangan', href: '#story' },
  { icon: 'mdi:calendar-outline', label: 'Acara', href: '#events' },
  { icon: 'mdi:timer-sand', label: 'Hitung', href: '#countdown' },
  { icon: 'mdi:gift-outline', label: 'Gift', href: '#gift' },
]

export default function BottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full z-50 border-t border-outline-variant/40 bg-surface-container"
      style={{ boxShadow: '0 -2px 16px rgba(87,0,0,0.1)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex justify-around items-center px-1 !py-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 flex-1 py-1 text-on-surface-variant active:text-primary transition-colors"
          >
            <Icon icon={item.icon} width={24} />
            <span
              className="uppercase tracking-wider text-center leading-none"
              style={{ fontFamily: 'Carla Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em' }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
