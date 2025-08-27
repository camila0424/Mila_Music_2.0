import { Link } from "react-router-dom";

function Hero() {
    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden">
            {/* 🎥 Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/videos/hero_video.mp4" type="video/mp4" />
                <img
                    src="/images/hero_image.jpg"
                    alt="Fondo hero alternativo"
                    className="w-full h-full object-cover"
                />
                Tu navegador no soporta video en HTML5.
            </video>


            {/* Cajón flotante purpura */}
            <div className="absolute heigth bottom-20 md:bottom-10 w-full flex justify-center px-0.5 md:px-20">
                <div className="bg-fuchsia-800/60 rounded-2xl px-1 py-4 md:p-4 w-4/5 flex flex-col items-center text-center gap-2">
                    {/* Título */}
                    <h1 className="text-white my-2 mx-2 text-3xl md:text-4xl font-bold leading-snug">
                        Aprende música <br />
                        con clases personalizadas online

                    </h1>

                    {/* Formulario / botón */}
                    <form className="w-full flex flex-col md:flex-row justify-center mx-4 items-center gap-4">
                        <Link
                            className="toolBtn my-4  buscar-instrumentos bg-white text-fuchsia-900  font-bold rounded-[20px] px-7 py-3 text-2xl flex items-center justify-center md:text-xl"
                            to="/teacher-list"
                        >
                            Prueba 20 minutos gratis
                        </Link>
                    </form>

                    {/* Instrumentos */}
                    <h2 className="text-white text-xl md:text-2xl ">
                        Elige entre más de 30 instrumentos
                    </h2>


                </div>
            </div>
        </section>
    );
}

export default Hero;
