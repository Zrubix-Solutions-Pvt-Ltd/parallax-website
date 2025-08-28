'use client';

import Header from '../header/page';
import Footer from '../footer/page';

// If you don't use the "@/..." alias, change imports to relative paths like "../components/..."
import HeroSection from './Components/HeroSection';
import IntroSection from './Components/IntroSection';
import CategoriesSection from './Components/CategoriesSection';
import ProcessParallax from './Components/ProcessParallax';
import JournalSection from './Components/JournalSection';
import CtaParallax from './Components/CtaParallax';

export default function about() {
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