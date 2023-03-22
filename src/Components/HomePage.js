import React from "react";
import { AboutServices } from "./AboutServices";
import { AdvantageViaWeb3 } from "./AdvantageViaWeb3";
import { CardsComponent } from "./CardsComponent";
import { DEEPricingComponent } from "./DEEPricingComponent";
import { FooterComponent } from "./FooterComponent";
import { GetRDeeComponent } from "./GetRDeeComponent";
import { HeaderComponent } from "./HeaderComponent";
import { HealthcareHappensHere } from "./HealthcareHappensHere";
import { ModulesLunchComponent } from "./ModulesLunchComponent";
import { PressNewsComponent } from "./PressNewsComponent";
import { PricePlan } from "./PricePlan";
import { TechnologyID } from "./TechnologyID";
import { TestimonialsComponent } from "./TestimonialsComponent";

export const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <HealthcareHappensHere />
      <GetRDeeComponent />
      <CardsComponent />
      <ModulesLunchComponent />
      <AboutServices />
      <AdvantageViaWeb3 />
      <TechnologyID />
      <DEEPricingComponent />
      <TestimonialsComponent />
      <PressNewsComponent />
      <PricePlan />
      <FooterComponent />
    </div>
  );
};
