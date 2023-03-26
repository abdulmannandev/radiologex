import { AboutServices } from "./Components/AboutServices";
import { AdvantageViaWeb3 } from "./Components/AdvantageViaWeb3";
import { CardsComponent } from "./Components/CardsComponent";
import { DEEPricingComponent } from "./Components/DEEPricingComponent";
import { FooterComponent } from "./Components/FooterComponent";
import { GetRDeeComponent } from "./Components/GetRDeeComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
import { HealthcareHappensHere } from "./Components/HealthcareHappensHere";
import { ModulesLunchComponent } from "./Components/ModulesLunchComponent";
import { PressNewsComponent } from "./Components/PressNewsComponent";
import { PricePlan } from "./Components/PricePlan";
import { TechnologyID } from "./Components/TechnologyID";
import { TestimonialsComponent } from "./Components/TestimonialsComponent";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
