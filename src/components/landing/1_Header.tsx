import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo_final.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleBodyClick = () => setMenuOpen(false);
        document.body.addEventListener("click", handleBodyClick);
        return () => document.body.removeEventListener("click", handleBodyClick);
    }, []);

    return (
        <header className="fixed top-0 w-full flex items-center bg-white px-4 py-0.5 md:px-8 md:py-0 z-[100] shadow-md">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to="/">
                    <img src={Logo} alt="Logo de Mila Music" className="h-18 md:h-22 xl:h-26" />
                </Link>
            </div>

            {/* Menú general - desktop */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                <Link
                    to="#como-funciona"
                    className="text-fuchsia-900 text-lg p-2 rounded hover:bg-purple-200 transition-colors whitespace-nowrap"
                >
                    ¿Cómo funciona?
                </Link>
                <Link
                    to="/teacher-list"
                    className="text-fuchsia-900 text-lg p-2 rounded hover:bg-purple-200 transition-colors whitespace-nowrap"
                >
                    Encuentra tu profe
                </Link>
                <Link
                    to="#iniciar-sesion"
                    className="text-fuchsia-900 text-lg p-2 rounded hover:bg-purple-200 transition-colors whitespace-nowrap"
                >
                    Inicia sesión
                </Link>
                <Link
                    to="#registro"
                    className="text-fuchsia-900 text-lg p-2 rounded hover:bg-purple-200 transition-colors whitespace-nowrap"
                >
                    Regístrate gratis
                </Link>
            </div>

            {/* Botón hamburguesa - mobile */}
            <button
                className="text-[1.8rem] cursor-pointer text-fuchsia-900 p-2 md:hidden ml-auto"
                onClick={handleClick}
            >
                &#9776;
            </button>

            {/* Menú hamburguesa - mobile */}
            <section
                className={`absolute top-full right-0 text-base border flex flex-col text-fuchsia-900 gap-1.5 min-w-[250px] z-[1000] bg-white md:hidden transition-all ${menuOpen ? "flex" : "hidden"
                    }`}
            >
                <Link className="bg-fuchsia-100 font-bold text-fuchsia-900 text-center px-20 py-2" to="#">
                    Inicia sesión
                </Link>
                <Link className="bg-fuchsia-900 text-white font-medium text-center px-20 py-2" to="#">
                    Regístrate Gratis
                </Link>
                <Link className="font-bold text-black mx-3" to="#">
                    Busca clases
                </Link>
                <div className="flex flex-col mx-3 mt-4 mb-4">
                    <Link className="text-black" to="/teacher-list">
                        Piano
                    </Link>
                    <Link className="text-black" to="/teacher-list">
                        Canto
                    </Link>
                    <Link className="text-black" to="/teacher-list">
                        Guitarra
                    </Link>
                </div>
                <Link className="font-bold text-black mx-3" to="#">
                    Inscribete como profe de Mila Music
                </Link>
                <Link className="font-bold text-black mx-3" to="#how_it_works">
                    ¿Cómo funciona?
                </Link>
                <Link className="font-bold text-black mx-3" to="#">
                    Comunidad
                </Link>
                <Link className="font-bold text-black mx-3" to="#">
                    Contáctanos
                </Link>
                <Link className="font-bold text-black mx-3 mb-12" to="#">
                    Beneficios
                </Link>
            </section>
        </header>
    );
};

export default Header;
