import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* 🎥 Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/videos/hero_video.mp4" type="video/mp4" />
                Tu navegador no soporta video en HTML5.
            </video>

            {/* Cajón flotante inferior */}
            <div className="absolute bottom-20 md:bottom-10 w-full flex justify-center px-3 md:px-20">
                <div className="bg-fuchsia-900/60 rounded-2xl px-1 py-4 md:p-4 w-4/5 flex flex-col items-center text-center gap-2">
                    {/* Título */}
                    <h1 className="text-white mb-2 text-2xl md:text-3xl font-bold leading-snug">
                        Aprende música <br />
                        en clases personalizadas online

                    </h1>

                    {/* Formulario / botón */}
                    <form className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
                        <Link
                            className="toolBtn my-2 buscar-instrumentos bg-white text-[#521B58] font-arsenal font-bold rounded-[20px] px-7 py-3 text-lg flex items-center justify-center md:text-xl"
                            to="/teacher-list"
                        >
                            ¿Qué quieres aprender? <i className="fa-solid fa-magnifying-glass ml-3"></i>
                        </Link>
                    </form>

                    {/* Instrumentos */}
                    <h2 className="text-white text-xl md:text-2xl font-arsenal">
                        Canto - Piano - Guitarra - Saxofón - Ukulele
                    </h2>

                    {/* Beneficios */}
                    <ul className="text-white text-lg md:text-base font-arsenal space-y-1">
                        <li>Conoce al profesor</li>
                        <li>Prueba 20 minutos gratis</li>
                        <li>Aula virtual para tus clases</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Hero;
