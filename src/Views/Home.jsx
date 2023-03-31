import HealthcareHappensHere from "./../Components/HealthcareHappensHere";
import GetRDeeComponent from "./../Components/GetRDeeComponent";
import CardsComponent from "./../Components/CardsComponent";
import ModulesLunchComponent from "./../Components/ModulesLunchComponent";
import AboutServices from "../Components/AboutServices";
import AdvantageViaWeb3 from "../Components/AdvantageViaWeb3";
import DEEPricingComponent from "./../Components/DEEPricingComponent";
import TechnologyID from "../Components/TechnologyID";
import TestimonialsComponent from "./../Components/TestimonialsComponent";
import PressNewsComponent from "./../Components/PressNewsComponent";
import PricePlan from "./../Components/PricePlan";

function HomePage() {
  // const [title, setTitle] = ["title"];

  return (
    <>
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
    </>
  );
}

export default HomePage;
