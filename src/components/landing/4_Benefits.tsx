import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import calendario from "../../images/landing/beneficios/calendario.png";
import bolsaDinero from "../../images/landing/beneficios/bolsa-dinero.png";
import meet from "../../images/landing/beneficios/meet.png";
import videoCall from "../../images/landing/beneficios/video-call.png";


interface Benefit {
    img: string;
    alt: string;
    title: string;
    description: string;
}

const benefitsData: Benefit[] = [
    {
        img: calendario,
        alt: "imagen calendario",
        title: "Clases 100% flexibles",
        description: "Clases cuando quieras, desde el sofá de casa, despacho, oficina...",
    },
    {
        img: meet,
        alt: "imagen de un meet",
        title: "Satisfacción garantizada",
        description: "Nos encargamos de todo. Así tu puedes centrarte en tus clases.",
    },
    {
        img: videoCall,
        alt: "imagen video-call",
        title: "Profesores Certificados",
        description: "Da un salto en tu carrera musical, domina un instrumento o recibe refuerzo escolar.",
    },
    {
        img: bolsaDinero,
        alt: "imagen bolsa de dinero",
        title: "Accesible para todos",
        description: "Clases económicas: sin matrícula, mínimo de horas, desplazamientos.",
    },
];

const Benefits: React.FC = () => {
    return (
        <div className="flex flex-col  items-center justify-center w-full my-5 px-10 md:h-screen">
            <section className="flex flex-col items-center m-8 md:grid md:grid-cols-2 md:gap-5 md:ml-40">
                {benefitsData.map((benefit, index) => (
                    <article key={index} className="mb-8">
                        <img src={benefit.img} alt={benefit.alt} className="w-12 h-auto" />
                        <h3 className="mt-2 mb-2  text-fuchsia-800  font-semibold text-xl text-left">
                            {benefit.title}
                        </h3>
                        <p className="mb-2   text-fuchsia-800 opacity-40  font-normal text-base line-clamp-5 overflow-hidden">
                            {benefit.description}
                        </p>
                    </article>
                ))}
            </section>
            <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="mt-0 mb-4 w-90 text-center"
            >
                <Link
                    to="/teacher-list"
                    className=" bg-fuchsia-800 text-white font-arsenal font-bold text-xl py-4 px-4 rounded-2xl block"
                >
                    Reserva tu prueba Gratuita
                </Link>
            </motion.div>
        </div>
    );
};

export default Benefits;
