export default function Footer() {
  return (
    <footer className="w-full py-14 pb-28 md:pb-14 flex flex-col items-center gap-4 px-6 text-center border-t border-secondary/15 bg-surface-container-highest">
      <div className="divider-gold" />
      <h2 className="text-[44px] text-primary leading-none" style={{ fontFamily: '"Carla Sans", sans-serif', fontWeight: 700 }}>Ilham &amp; Reni</h2>
      <div className="flex gap-6 mt-1">
        {['Facebook', 'Instagram', 'WhatsApp'].map((s) => (
          <span
            key={s}
            className="font-sans-wd text-[13px] text-on-surface-variant cursor-pointer hover:text-secondary transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="font-sans-wd text-[12px] text-outline mt-2">
        © 2026 Ilham &amp; Reni · All Rights Reserved
      </p>
    </footer>
  )
}
