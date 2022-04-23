import { HeaderBar } from '../../ui/molecules';
import { HeroSection } from '../../ui/organisms'
import { StepSection } from '../../ui/organisms';
import { QuoteSection } from '../../ui/organisms/QuoteSection/QuoteSection';
import { TeamSection } from '../../ui/organisms/TeamSection/TeamSection';
import { CtaSection } from '../../ui/organisms/CtaSection/CtaSection';
import { Footer } from '../../ui/organisms/Footer/Footer';

export const LandingPage = (props) => {
  return (
    <div>
      <HeaderBar />
      <main>
        <HeroSection />
        <StepSection />
				<QuoteSection />
        <TeamSection />
				<CtaSection />
        <Footer />

      </main>
    </div>
  );
};
