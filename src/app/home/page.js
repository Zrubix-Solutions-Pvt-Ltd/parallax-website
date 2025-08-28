'use client';

import Header from '../header/page';
import Footer from '../footer/page';

// If you don't use the "@/..." alias, change imports to relative paths like "../components/..."
import HeroSection from '../home/Components/HeroSection';
import IntroSection from '../home/Components/IntroSection';
import CategoriesSection from '../home/Components/CategoriesSection';
import ProcessParallax from '../home/Components/ProcessParallax';
import JournalSection from '../home/Components/JournalSection';
import CtaParallax from '../home/Components/CtaParallax';

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />
      <IntroSection />
      <CategoriesSection />
      <ProcessParallax />
      <JournalSection />
      <CtaParallax />

      <Footer />
    </>
  );
}