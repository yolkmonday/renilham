export default function IntroSection() {
  return (
    <section className="section-pad-sm bg-surface-container-low">
      <div className="container-md flex flex-col items-center gap-5 text-center" data-aos="fade-up">
        <div className="divider-gold" />
        <p
          dir="rtl"
          className="font-carla text-primary leading-loose"
          style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>
        <p className="font-sans-wd text-[15px] text-on-surface-variant italic leading-relaxed max-w-xl">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <span className="label-caps text-primary">QS. Ar-Rum: 21</span>
        <div className="divider-gold" />
      </div>
    </section>
  )
}
