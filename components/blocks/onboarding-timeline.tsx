import { siteConfig } from "@/app/config/site-config";
import Stepper from "@/components/ui/stepper";

export default function OnboardingTimeline() {
  return (
    <div>
      <h2 className="text-2xl font-heading mb-6 text-on-bg">Onboarding Process</h2>
      <Stepper items={siteConfig.pages.ownerServices.onboarding} />
    </div>
  );
}
