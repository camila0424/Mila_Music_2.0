import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import lina from "../../images/landing/testimonios/lina.jpg";
import juan from "../../images/landing/testimonios/juan.jpg";
import maria from "../../images/landing/testimonios/maria.jpg";

interface Testimony {
    name: string;
    img: string;
    text: string;
}

const testimonies: Testimony[] = [
    {
        name: "Lina",
        img: lina,
        text: "Llevo dos años tomando clases de canto con la profesora Camila y ha sido una experiencia increíble. Camila es muy motivadora y cada clase me inspira a mejorar. Hace poco empecé también a aprender ukulele con ella, ¡y ha sido genial! Las clases son muy divertidas y complementan perfectamente mi aprendizaje musical. La recomiendo totalmente.",
    },
    {
        name: "Juan",
        img: juan,
        text: "Gracias a las clases de guitarra ahora puedo tocar mis canciones favoritas. Me encanta la paciencia de Hector y la forma en que adapta cada lección a mi ritmo.",
    },
    {
        name: "María",
        img: maria,
        text: "Nunca pensé que podría tocar el clarinete, pero después de unos meses con Victoria me siento segura y motivada. ¡Es una profesora excelente!",
    },
];

// Variantes para efecto de “pasar página”
interface VariantProps {
    direction: number;
}

const variants: Variants = {
    enter: ({ direction }: VariantProps) => ({
        rotateY: direction > 0 ? -90 : 90,
        opacity: 0,
    }),
    center: {
        rotateY: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: ({ direction }: VariantProps) => ({
        rotateY: direction > 0 ? 90 : -90,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    }),
};

const TestimoniesCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonies.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
    };

    return (
        <section
            className="relative min-h-[500px] px-5 py-10 flex items-center justify-center
                 bg-gradient-to-br from-purple-900 via-purple-600 to-fuchsia-700"
        >
            {/* Botón Flechita Izquierdo */}
            <motion.button
                onClick={prev}
                className="absolute left-5 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronLeft size={28} />
            </motion.button>

            {/* Contenido animado */}
            <div className="max-w-3xl w-full flex flex-col items-center text-center px-6 perspective-[1000px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={{ direction }}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="flex flex-col items-center"
                        style={{ transformOrigin: "center left" }}
                    >
                        <h4 className="font-arsenal text-2xl font-bold text-white mb-4">
                            {testimonies[index].name}
                        </h4>
                        <img
                            src={testimonies[index].img}
                            alt={`Foto de ${testimonies[index].name}`}
                            className="w-36 h-36 rounded-full object-cover mb-5 border-4 border-white"
                        />
                        <p className="bg-white px-6 py-6 rounded-[50px] max-w-xl mx-auto text-center text-fuchsia-800 font-arsenal text-lg md:text-xl shadow-lg">
                            {testimonies[index].text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Botón Flechita Derecho */}
            <motion.button
                onClick={next}
                className="absolute right-5 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronRight size={28} />
            </motion.button>
        </section>
    );
};

export default TestimoniesCarousel;

