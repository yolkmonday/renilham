import { Icon } from '@iconify/react'

export default function CoupleSection() {
  return (
    <section className="section-pad bg-background">
      <div className="max-w-[860px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full">

        {/* Groom */}
        <div className="flex flex-col items-center text-center gap-4 flex-1" data-aos="fade-right">
          <div className="w-44 h-60 rounded-t-full overflow-hidden border-2 border-gold">
            <img
              alt="Ilham"
              className="w-full h-full object-cover"
              style={{ filter: 'sepia(0.08)' }}
              src="https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1825.JPG-scaled.jpeg"
            />
          </div>
          <div>
            <h3 className="font-carla text-[32px] text-primary mb-2">M. Ilham Sordiman, S.T.</h3>
            <p className="font-sans-wd text-[14px] text-on-surface-variant leading-snug">
              Putra Pertama dari<br />
              <strong className="text-primary">Sutan Sordiman &amp; Mardiyati</strong>
            </p>
            <a
              href="https://instagram.com/ilhamsordiman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              <Icon icon="mdi:instagram" width={16} />
              @ilhamsordiman
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex md:flex-col items-center gap-3">
          <div className="hidden md:block w-px h-20 bg-gold" />
          <span className="font-carla text-[44px] text-gold leading-none">&amp;</span>
          <div className="hidden md:block w-px h-20 bg-gold" />
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center text-center gap-4 flex-1" data-aos="fade-left">
          <div className="w-44 h-60 rounded-t-full overflow-hidden border-2 border-gold">
            <img
              alt="Reni"
              className="w-full h-full object-cover"
              style={{ filter: 'sepia(0.08)' }}
              src="https://undanganpyk.com/wp-content/uploads/2026/07/IMG_1839.JPG-scaled.jpeg"
            />
          </div>
          <div>
            <h3 className="font-carla text-[32px] text-primary mb-2">Reniva Gusti, S.Ag.</h3>
            <p className="font-sans-wd text-[14px] text-on-surface-variant leading-snug">
              Putri ke-4 dari<br />
              <strong className="text-primary">H. Bagindo Sapril Dasman &amp; Hj. Yetty Yuliani</strong>
            </p>
            <a
              href="https://instagram.com/rere.gusti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              <Icon icon="mdi:instagram" width={16} />
              @rere.gusti
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
