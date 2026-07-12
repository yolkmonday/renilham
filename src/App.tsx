import { useState } from 'react'
import './index.css'
import OpeningScreen from './OpeningScreen'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import CoupleSection from './CoupleSection'
import StorySection from './StorySection'
import EventsSection from './EventsSection'
import CountdownSection from './CountdownSection'
import GallerySection from './GallerySection'
import GiftSection from './GiftSection'
import RSVPSection from './RSVPSection'
import WishesSection from './WishesSection'
import BottomNav from './BottomNav'
import Footer from './Footer'
import SectionDivider from './SectionDivider'

function getGuestName(): string | null {
  const params = new URLSearchParams(window.location.search)
  const to = params.get('to')
  return to ? decodeURIComponent(to) : null
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const guestName = getGuestName()

  return (
    <>
      {!opened && (
        <OpeningScreen guestName={guestName} onOpen={() => setOpened(true)} />
      )}
      {opened && (
        <>
          <main className="pb-24 md:pb-0">
            <HeroSection />
            <SectionDivider />
            <IntroSection />
            <SectionDivider flip />
            <CoupleSection />
            <SectionDivider />
            <StorySection />
            <SectionDivider flip />
            <EventsSection />
            <SectionDivider />
            <CountdownSection />
            <SectionDivider flip />
            <GallerySection />
            <SectionDivider />
            <GiftSection />
            <SectionDivider flip />
            <RSVPSection />
            <SectionDivider />
            <WishesSection />
          </main>
          <Footer />
          <BottomNav />
        </>
      )}
    </>
  )
}
