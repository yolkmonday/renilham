import { useState } from 'react'
import { Icon } from '@iconify/react'

interface Account {
  logoUrl: string
  logoAlt: string
  name: string
  number: string
}

const ACCOUNTS: Account[] = [
  {
    logoUrl: 'https://undanganpyk.com/wp-content/uploads/2026/04/logo-bcapng-32694-1-2-e1714457191342.png',
    logoAlt: 'BCA',
    name: 'A.N Ilham Sordiman',
    number: '0343278362',
  },
  {
    logoUrl: 'https://undanganpyk.com/wp-content/uploads/2026/04/logo-bcapng-32694-1-2-e1714457191342.png',
    logoAlt: 'Bank',
    name: 'A.N Reniva Gusti',
    number: '6241470030',
  },
]

function AccountCard({ account }: { account: Account }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(account.number)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card flex flex-col items-center gap-3 text-center">
      <img alt={account.logoAlt} className="h-10 object-contain" src={account.logoUrl} />
      <div>
        <p className="font-carla text-[26px] text-on-surface leading-tight">{account.name}</p>
        <p className="font-sans-wd text-[20px] text-on-surface-variant mt-1 tracking-wide">{account.number}</p>
      </div>
      <button onClick={handleCopy} className="btn-dark mt-1">
        <Icon icon={copied ? 'mdi:check' : 'mdi:content-copy'} width={14} />
        {copied ? 'Tersalin!' : 'Salin Rekening'}
      </button>
    </div>
  )
}

export default function GiftSection() {
  return (
    <section id="gift" className="section-pad bg-surface-container-low">
      <div className="max-w-lg mx-auto px-6" data-aos="fade-up">
        <div className="text-center mb-10">
          <span className="label-caps">Tanda Kasih</span>
          <h2 className="section-title">Wedding Gift</h2>
          <div className="divider-gold mb-6" />
          <p className="font-sans-wd text-[14px] text-on-surface-variant leading-relaxed">
            Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih dapat melalui rekening berikut.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {ACCOUNTS.map((acc) => (
            <AccountCard key={acc.number} account={acc} />
          ))}
        </div>
      </div>
    </section>
  )
}
