interface Props {
  /** flip vertically — use on bottom of dark section */
  flip?: boolean
  /** color of the ribbon fill */
  fill?: string
  /** color of the decorative pattern stroke */
  stroke?: string
}

/**
 * Minang-inspired ribbon divider using pucuk rebung (bamboo shoot) zigzag motif.
 * Place between sections to create a visual band transition.
 */
export default function SectionDivider({
  flip = false,
  fill = 'var(--color-primary)',
  stroke = 'var(--color-gold)',
}: Props) {
  return (
    <div
      aria-hidden="true"
      style={{
        transform: flip ? 'scaleY(-1)' : undefined,
        lineHeight: 0,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '72px' }}
      >
        {/* Ribbon band */}
        <path
          d="M0,20 L1440,20 L1440,52 L0,52 Z"
          fill={fill}
        />

        {/* Pucuk rebung (bamboo shoot) zigzag pattern — top edge */}
        <polyline
          points="0,20 30,8 60,20 90,8 120,20 150,8 180,20 210,8 240,20 270,8 300,20 330,8 360,20 390,8 420,20 450,8 480,20 510,8 540,20 570,8 600,20 630,8 660,20 690,8 720,20 750,8 780,20 810,8 840,20 870,8 900,20 930,8 960,20 990,8 1020,20 1050,8 1080,20 1110,8 1140,20 1170,8 1200,20 1230,8 1260,20 1290,8 1320,20 1350,8 1380,20 1410,8 1440,20"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="miter"
        />

        {/* Pucuk rebung zigzag pattern — bottom edge */}
        <polyline
          points="0,52 30,64 60,52 90,64 120,52 150,64 180,52 210,64 240,52 270,64 300,52 330,64 360,52 390,64 420,52 450,64 480,52 510,64 540,52 570,64 600,52 630,64 660,52 690,64 720,52 750,64 780,52 810,64 840,52 870,64 900,52 930,64 960,52 990,64 1020,52 1050,64 1080,52 1110,64 1140,52 1170,64 1200,52 1230,64 1260,52 1290,64 1320,52 1350,64 1380,52 1410,64 1440,52"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="miter"
        />

        {/* Inner decorative line — top */}
        <line x1="0" y1="26" x2="1440" y2="26" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Inner decorative line — bottom */}
        <line x1="0" y1="46" x2="1440" y2="46" stroke={stroke} strokeWidth="0.5" strokeOpacity="0.4" />

        {/* Diamond accents every 120px */}
        {Array.from({ length: 12 }, (_, i) => {
          const cx = 60 + i * 120
          return (
            <polygon
              key={i}
              points={`${cx},33 ${cx + 4},36 ${cx},39 ${cx - 4},36`}
              fill={stroke}
              fillOpacity="0.7"
            />
          )
        })}
      </svg>
    </div>
  )
}
