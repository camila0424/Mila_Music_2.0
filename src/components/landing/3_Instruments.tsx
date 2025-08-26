import { Link } from "react-router-dom";
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
        <section className="flex flex-col items-center justify-center w-full px-2">
            {/* Título */}
            <h3 className="text-fuchsia-800 font-arsenal font-extrabold text-2xl md:text-3xl text-center my-5 md:my-8 max-w-xs md:max-w-md">
                Encuentra tu instrumento
            </h3>

            {/* Lista de instrumentos */}
            <ul className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-6 w-full max-w-4xl px-12">
                {instruments.map((inst) => (
                    <li key={inst.name} className="flex items-start gap-4 p-2">
                        <span className="flex-shrink-0 w-10 h-10">
                            <img src={inst.icon} alt={`icono ${inst.name}`} className="w-full h-auto" />
                        </span>
                        <div>
                            <h4 className="text-[#521B58] font-arsenal font-semibold text-lg">{inst.name}</h4>
                            <p className="text-[#bd83c4] font-arsenal font-normal text-base">
                                {inst.teachers} profesores
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Botón ver más */}
            <Link
                to="/teacher-list"
                className="mt-12 mb-12 w-90 text-center bg-fuchsia-800 text-white font-arsenal font-bold text-xl py-4 px-4 rounded-2xl"
            >
                Ver más instrumentos
            </Link>
        </section>
    );
};

export default Instruments;
