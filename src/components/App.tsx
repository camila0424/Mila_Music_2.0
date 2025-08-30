
import "../styles/tailwind.css";
import Header from "./layout/1_Header";
import Hero from "./landing/2_Hero";
import Instruments from "./landing/3_Instruments";
import Benefits from "./landing/4_Benefits";
import HowItWorks from "./landing/5_How_it_works";
import Testimonies from "./landing/6_Testimonies";
import JoinUs from "./landing/7_Join_Us";
import Footer from "./layout/8_Footer";

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Instruments />
      <Benefits />
      <HowItWorks />
      <Testimonies />
      <JoinUs />
      <Footer />
    </>
  )
}

export default App
