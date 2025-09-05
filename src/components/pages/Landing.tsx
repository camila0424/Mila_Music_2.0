import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../landing/2_Hero";
import Instruments from "../landing/3_Instruments";
import Benefits from "../landing/4_Benefits";
import HowItWorks from "../landing/5_How_it_works";
import Testimonies from "../landing/6_Testimonies";
import JoinUs from "../landing/7_Join_Us";

function LandingPage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
            const scrollTo = (location.state as { scrollTo: string }).scrollTo;
            const el = document.getElementById(scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Instruments />
            <Benefits />
            {/* 👇 asegúrate de que este componente tenga <section id="how_it_works"> */}
            <HowItWorks />
            <Testimonies />
            <JoinUs />
        </>
    );
}

export default LandingPage;
