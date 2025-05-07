'use client';

import HeroSpotlight from './HeroSpotlight';
import PersonalizedSlider from './PersonalizedSlider';
import GenreBrowseSection from './GenreBrowseSection';
import TrendingSection from './TrendingSection';
import RecentUpdatesList from './RecentUpdatesList';
import CreatorSpotlight from './CreatorSpotlight';
import CommunityPulse from './CommunityPulse';
import CTAAppDownload from './CTAAppDownload';
import Footer from './Footer';
import Navbar from '../components/DashboardNavbar'; // alias DashboardNavbar
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Main Sections with Alternating Backgrounds */}
      <SectionWrapper index={0}>
        <HeroSpotlight />
      </SectionWrapper>

      <SectionWrapper index={1}>
        <PersonalizedSlider />
      </SectionWrapper>

      <SectionWrapper index={2}>
        <GenreBrowseSection />
      </SectionWrapper>

      <SectionWrapper index={3}>
        <TrendingSection />
      </SectionWrapper>

      <SectionWrapper index={4}>
        <RecentUpdatesList />
      </SectionWrapper>

      <SectionWrapper index={5}>
        <CreatorSpotlight />
      </SectionWrapper>

      <SectionWrapper index={6}>
        <CommunityPulse />
      </SectionWrapper>

      <SectionWrapper index={7}>
        <CTAAppDownload />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
