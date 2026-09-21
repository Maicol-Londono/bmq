import { HeroCinematic } from '../sections/HeroCinematic';
import { RiskSection } from '../sections/RiskSection';
import { SystemSection } from '../sections/SystemSection';
import { PreventionSection } from '../sections/PreventionSection';
import { LegalProtectionSection } from '../sections/LegalProtectionSection';
import { FinancialBackingSection } from '../sections/FinancialBackingSection';
import { ProtectionLevelsSection } from '../sections/ProtectionLevelsSection';
import { AuthoritySection } from '../sections/AuthoritySection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { BmqNetworkCarousel } from '../components/BmqNetworkCarousel';

export function Home() {
  return (
    <>
      <HeroCinematic />
      <RiskSection />
      <SystemSection />
      <PreventionSection />
      <LegalProtectionSection />
      <FinancialBackingSection />
      <ProtectionLevelsSection />
      <AuthoritySection />
      <HowItWorksSection />
      <BmqNetworkCarousel />
      <FinalCTASection />
    </>
  );
}
