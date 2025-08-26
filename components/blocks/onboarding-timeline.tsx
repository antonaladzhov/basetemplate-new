import { siteConfig } from "@/app/config/site-config";
import Stepper from "@/components/ui/stepper";

export default function OnboardingTimeline() {
  return (
    <div>
      <h2 className="text-2xl font-heading mb-6 text-on-bg">{siteConfig.pages.ownerServices.onboardingProcess.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.pages.ownerServices.onboarding.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full surface-primary text-on-primary flex items-center justify-center text-xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-on-bg">{item.step}</h3>
            <p className="text-sm text-on-bg/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
