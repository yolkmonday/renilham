const STORIES = [
  {
    num: '01',
    date: 'Agustus 2025',
    title: 'Awal Pertemuan',
    body: 'Tidak ada pertemuan yang benar-benar kebetulan. Kami dipertemukan melalui kedua orang tua kami yang telah saling mengenal. Dari sebuah niat baik dan doa keluarga, Allah mempertemukan dua hati. Pada akhir Agustus 2025, kami bertemu untuk pertama kalinya saat ia datang bersilaturahmi ke rumah.',
  },
  {
    num: '02',
    date: 'April 2026',
    title: 'Lamaran',
    body: 'Cinta bukanlah tentang menemukan seseorang yang sempurna, melainkan tentang dua insan yang memilih untuk saling menerima dan bertumbuh bersama. Dengan restu dari kedua keluarga, pada April 2026 kami melangsungkan pertunangan sebagai langkah awal menuju masa depan bersama.',
  },
  {
    num: '03',
    date: '19 Juli 2026',
    title: 'Menuju Hari Bahagia',
    body: 'Kini, dengan penuh rasa syukur kepada Allah SWT, kami memantapkan hati untuk mengikat janji suci pernikahan pada 19 Juli 2026. Semoga senantiasa dipenuhi cinta, keberkahan, dan kebahagiaan.',
  },
]

export default function StorySection() {
  return (
    <section id="story" className="section-pad bg-surface-container-low">
      <div className="container-md px-6" data-aos="fade-up">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="label-caps">Perjalanan Kami</span>
          <h2 className="section-title">Kisah Kami</h2>
          <div className="divider-gold" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div
            className="absolute left-[17px] top-5 bottom-5 w-px opacity-40"
            style={{ backgroundColor: 'var(--color-gold)' }}
          />

          {STORIES.map((s, i) => (
            <div key={s.num} className={`flex gap-5 items-start ${i < STORIES.length - 1 ? 'mb-10' : ''}`}>
              {/* Circle */}
              <div className="relative z-10 shrink-0 w-9 h-9 rounded-full border-2 border-gold bg-surface-container-low flex items-center justify-center">
                <span className="font-carla text-[11px] font-bold text-secondary">{s.num}</span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <span
                  className="inline-block px-3 py-0.5 rounded-full mb-2 label-caps"
                  style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-primary)', fontSize: '10px' }}
                >
                  {s.date}
                </span>
                <h3 className="font-carla text-[26px] text-primary mb-1">{s.title}</h3>
                <p className="font-sans-wd text-[15px] text-on-surface-variant leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
