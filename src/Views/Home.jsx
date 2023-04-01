import MetaTags from "react-meta-tags";

import HeroAreaHome from "./../Components/HeroAreaHome";
import GetRDeeComponent from "./../Components/GetRDeeComponent";
import ModulesLunchComponent from "./../Components/ModulesLunchComponent";
import AboutServices from "../Components/AboutServices";
import Web3Section from "../Components/Web3Section";
import YourData from "../Components/YourData";
import DEEPricingComponent from "./../Components/DEEPricingComponent";
import Testimonial from "./../Components/Testimonial";
import PressNewsComponent from "./../Components/PressNewsComponent";
import Pricing from "./../Components/Pricing";

function HomePage() {
  const [title] = ["Home | Radiologex "];

  return (
    <>
      <MetaTags>
        <title>{title}</title>
        <meta name="description" content="Some description." />
      </MetaTags>

      <HeroAreaHome />
      <GetRDeeComponent />
      <ModulesLunchComponent />
      <AboutServices />
      <Web3Section />
      <YourData />
      <DEEPricingComponent />
      <Testimonial />
      <PressNewsComponent />
      <Pricing />
    </>
  );
}

export default HomePage;
