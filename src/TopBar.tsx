import { Icon } from '@iconify/react'

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 w-full flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-background">
      <div className="flex items-center gap-3">
        <Icon icon="mdi:menu" width={24} className="text-primary cursor-pointer" />
        <span className="text-[32px] text-primary leading-none" style={{ fontFamily: '"Carla Sans", sans-serif', fontWeight: 700 }}>
          Ilham &amp; Reni
        </span>
      </div>
    </header>
  )
}
