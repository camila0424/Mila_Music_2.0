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
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {benefitsData.map((benefit, index) => (
                    <article key={index} className="text-left">
                        <img src={benefit.img} alt={benefit.alt} className="w-12 h-auto" />
                        <h3 className="mt-2 mb-2 text-fuchsia-800 font-semibold text-xl">
                            {benefit.title}
                        </h3>
                        <p className="mb-2 text-fuchsia-800 opacity-40 font-normal text-base line-clamp-5 overflow-hidden">
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
                    className=" bg-fuchsia-800 text-white font-arsenal font-bold text-xl mt-6 py-3 px-4 rounded-2xl block"
                >
                    Reserva tu prueba Gratuita
                </Link>
            </motion.div>
        </div>
    );
};

export default Benefits;
