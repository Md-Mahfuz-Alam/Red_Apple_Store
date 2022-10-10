import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Red Apple Ecommerce",
  };

  return (
    <>
    <h1 style={{color:"brown"}}>---Abot  Page is not fully developed yet--- </h1>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;