import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo__final.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // evita que el body cierre inmediatamente
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleBodyClick = () => setMenuOpen(false);
        document.body.addEventListener("click", handleBodyClick);
        return () => document.body.removeEventListener("click", handleBodyClick);
    }, []);

    return (
        <header className="flex justify-start items-center bg-white relative z-[100] p-2 md:grid md:grid-cols-5 xl:flex xl:justify-around ">
            {/* Botón hamburguesa */}
            <button
                className="text-[1.8rem] cursor-pointer text-[#570e6a] p-2.5 ml-4 w-fit border-none bg-white relative z-[1001] md:hidden"
                onClick={handleClick}
            >
                &#9776;
            </button>

            {/* Menú hamburguesa */}
            <section
                className={`absolute top-full left-0 border-b  border-b-neutral-200 border-r border-r-neutral-200 flex flex-col text-[1rem] text-[#570e6a] gap-1.5 min-w-[400px] z-[1000] bg-white md:hidden transition-all ${menuOpen ? "flex" : "hidden"
                    }`}
            >

                <Link
                    className="bg-[#F7E7FF] font-arsenal font-bold text-[#4b0055] text-center px-20 py-3.5"
                    to="#"
                >
                    Inicia sesión
                </Link>
                <Link
                    className="bg-[#4b0055] text-white font-arsenal font-medium text-center px-20 py-3.5"
                    to="#"
                >
                    Regístrate Gratis
                </Link>
                <Link className="font-arsenal font-bold text-black ml-7" to="#">
                    Busca clases
                </Link>
                <div className="flex flex-col ml-7 mt-4 mb-4">
                    <Link className="font-arsenal text-black" to="/teacher-list">
                        Piano
                    </Link>
                    <Link className="font-arsenal text-black" to="/teacher-list">
                        Canto
                    </Link>
                    <Link className="font-arsenal text-black" to="/teacher-list">
                        Guitarra
                    </Link>
                </div>
                <Link className="font-arsenal font-bold text-black ml-7" to="#">
                    Inscribete como profe de Mila Music
                </Link>
                <Link className="font-arsenal font-bold text-black ml-7" to="#how_it_works">
                    ¿Cómo funciona?
                </Link>
                <Link className="font-arsenal font-bold text-black ml-7" to="#">
                    Comunidad
                </Link>
                <Link className="font-arsenal font-bold text-black ml-7" to="#">
                    Contáctanos
                </Link>
                <Link className="font-arsenal font-bold text-black ml-7 mb-12" to="#">
                    Beneficios
                </Link>
            </section>

            {/* Logo */}
            <div className="logo ml-2.5 mt-2.5 text-center md:flex md:items-start md:max-w-[120px] xl:max-w-[150px] xl:mr-24">
                <Link to="/">
                    <img src={Logo} alt="Logo de Mila Music" className="h-20" />
                </Link>
            </div>

            {/* Menú general */}
            <div className="menu_general hidden md:flex xl:flex justify-between col-span-4">
                <nav className="menu_cent flex justify-end gap-4">
                    <Link
                        to="#como-funciona"
                        className="text-[#570e6a] text-[1rem] font-arsenal p-2 rounded hover:bg-[#D3B1DC] transition-colors whitespace-nowrap mt-18"
                    >
                        ¿Cómo funciona?
                    </Link>
                    <Link
                        to="/teacher-list"
                        className="text-[#570e6a] text-[1rem] font-arsenal p-2 rounded hover:bg-[#D3B1DC] transition-colors whitespace-nowrap mt-18"
                    >
                        Encuentra tu profe
                    </Link>
                </nav>
                <nav className="menu_der flex justify-end gap-4">
                    <Link
                        to="#iniciar-sesion"
                        className="text-[#570e6a] text-[1rem] font-arsenal p-2 rounded hover:bg-[#D3B1DC] transition-colors whitespace-nowrap mt-18"
                    >
                        Inicia sesión
                    </Link>
                    <Link
                        to="#registro"
                        className="text-[#570e6a] text-[1rem] font-arsenal p-2 rounded hover:bg-[#D3B1DC] transition-colors whitespace-nowrap mt-18"
                    >
                        Regístrate gratis
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
