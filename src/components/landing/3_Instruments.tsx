import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // <-- importar framer-motion
import pianoIcon from "../../images/landing/instrumentos/piano.png";
import guitarraIcon from "../../images/landing/instrumentos/guitarra.png";
import cantoIcon from "../../images/landing/instrumentos/canto.png";
import saxofonIcon from "../../images/landing/instrumentos/saxofón.png";

interface Instrument {
    name: string;
    teachers: number;
    icon: string;
}

const instruments: Instrument[] = [
    { name: "Clases de piano", teachers: 700, icon: pianoIcon },
    { name: "Clases de saxofón", teachers: 200, icon: saxofonIcon },
    { name: "Clases de canto", teachers: 1000, icon: cantoIcon },
    { name: "Clases de guitarra", teachers: 800, icon: guitarraIcon },
];

const Instruments: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full px-2 md:h-screen">
            {/* Título */}
            <h3 className="text-fuchsia-800  font-extrabold text-3xl md:text-3xl text-center my-3 md:mb-10 max-w-xs md:max-w-md">
                Encuentra tu instrumento
            </h3>

            {/* Lista de instrumentos */}
            <ul className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-15 w-full max-w-2xl px-10 ">
                {instruments.map((inst) => (
                    <li key={inst.name} className="flex items-start gap-4 p-2">
                        <span className="flex-shrink-0 w-10 h-10">
                            <img
                                src={inst.icon}
                                alt={`icono ${inst.name}`}
                                className="w-full h-auto"
                            />
                        </span>
                        <div>
                            <h4 className="text-fuchsia-800  font-semibold text-xl">
                                {inst.name}
                            </h4>
                            <p className="text-fuchsia-800 opacity-40  font-normal text-lg">
                                {inst.teachers} profesores
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Botón ver más con animación de crecer y encoger */}
            <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="mt-10 mb-10 w-90 text-center"
            >
                <Link
                    to="/teacher-list"
                    className="bg-fuchsia-800 text-white  font-bold text-xl py-4 px-4 rounded-2xl block"
                >
                    Ver más instrumentos
                </Link>
            </motion.div>
        </section>
    );
};

export default Instruments;
