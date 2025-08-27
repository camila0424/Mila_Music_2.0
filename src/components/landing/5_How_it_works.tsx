import okay from "../../images/_tools/okay.png";

const steps = [
    {
        number: "1",
        title: "Encuentra a tu profe",
        description:
            "En nuestro equipo, encontrarás a tu profesor ideal. Se adaptará a tus necesidades y te ayudará a alcanzar tus objetivos.",
    },
    {
        number: "2",
        title: "Organiza tus clases en tu agenda",
        description:
            "Escoge un profesor online según tu disponibilidad horaria y disfruta de la flexibilidad de las clases en línea.",
    },
    {
        number: "3",
        title: "Aprende con metodologías únicas",
        description:
            "Nuestras clases son diseñadas de acuerdo a tus necesidades, tus conocimientos y en pro de ayudarte a lograr tus objetivos.",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section
            id="how_it_works"
            // 👇 Ajuste: cada sección ocupa al menos 100vh y tiene padding-top para compensar el header fijo
            className="flex flex-col items-center px-4 bg-fuchsia-200 min-h-screen 
                       pt-20 md:pt-20 "
        >
            {/* Cajón morado */}
            <div className="bg-fuchsia-900 rounded-2xl w-full max-w-2xl px-2 py-4 text-center mb-8">
                <h3 className="text-white font-bold text-xl">
                    ¿Cómo funciona Mila Music?
                </h3>
                <p className="mt-2 text-fuchsia-400 font-normal text-lg">
                    ¡Sencillo! son clases online, en directo, con un profesor particular para ti.
                </p>
            </div>

            {/* Pasos */}
            <ul className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8 w-full max-w-6xl px-4">
                {steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-5">
                        <span className="bg-yellow-400 text-white font-bold text-2xl px-6 py-4 rounded-full flex-shrink-0">
                            {step.number}
                        </span>
                        <div>
                            <h3 className="text-fuchsia-900 font-bold text-xl mb-2.5">
                                {step.title}
                            </h3>
                            <p className="text-fuchsia-800 text-lg">
                                {step.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Imagen final */}
            <div className="flex flex-col items-center mt-10 text-center">
                <img src={okay} alt="imagen de okay" className="w-22 h-auto mt-8 " />
                <h3 className="text-fuchsia-900 font-bold text-2xl mt-5 mb-4">
                    Nos preocupamos por ti.
                </h3>
                <p className="text-fuchsia-800 text-base font-medium max-w-2xl">
                    Por eso, si después de tu primera clase no te convence tu profesor/a,
                    te ayudamos a encontrar otro.
                </p>
            </div>
        </section>
    );
};

export default HowItWorks;
