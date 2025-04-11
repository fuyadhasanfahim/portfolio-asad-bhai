import FAQ from '@/components/root/FAQ';
import HeroSection from '@/components/root/HeroSection';
import Services from '@/components/root/Services';
import Stats from '@/components/root/Stats';
import CallToAction from '@/components/shared/CallToAction';
import Footer from '@/components/shared/Footer';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Stats />
            <Services />
            <FAQ />
            <CallToAction />
            <Footer />
        </>
    );
}
