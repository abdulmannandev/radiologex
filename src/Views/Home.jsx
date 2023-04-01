import HeroAreaHome from "./../Components/HeroAreaHome";
import GetRDeeComponent from "./../Components/GetRDeeComponent";
import CardsComponent from "./../Components/CardsComponent";
import ModulesLunchComponent from "./../Components/ModulesLunchComponent";
import AboutServices from "../Components/AboutServices";
import Web3Section from "../Components/Web3Section";
import YourData from "../Components/YourData";
import DEEPricingComponent from "./../Components/DEEPricingComponent";
import Testimonial from "./../Components/Testimonial";
import PressNewsComponent from "./../Components/PressNewsComponent";
import Pricing from "./../Components/Pricing";

function HomePage() {
  // const [title, setTitle] = ["title"];

  return (
    <>
      <HeroAreaHome />
      <GetRDeeComponent />
      <CardsComponent />
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
