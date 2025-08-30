import { useState, useEffect, type JSX } from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../images/logo/logo_final.png";

interface NavItem {
    id: string;
    name: string;
    route?: string; // opcional si es link externo
}

const Header = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const smoothScroll = (id: string) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const handleBodyClick = () => setMenuOpen(false);
        document.body.addEventListener("click", handleBodyClick);
        return () => document.body.removeEventListener("click", handleBodyClick);
    }, []);

    const navItems: NavItem[] = [
        { id: "hero", name: "Inicio" },
        { id: "how_it_works", name: "¿Cómo funciona?" },
        { id: "teacher-list", name: "Encuentra tu profe", route: "/teacher-list" },
        { id: "registro", name: "Regístrate gratis" },
        { id: "iniciar-sesion", name: "Inicia sesión" },
    ];

    return (
        <header className="fixed top-0 w-full flex items-center bg-white px-4 py-0.5 md:px-8 md:py-0 z-[100] shadow-md">
            {/* Logo */}
            <div
                onClick={() => smoothScroll("hero")}
                className="flex-shrink-0 cursor-pointer"
            >
                <img src={Logo} alt="Logo de Mila Music" className="h-18 md:h-20 xl:h-22" />
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                {navItems.map((item) =>
                    item.route ? (
                        <RouterLink
                            key={item.name}
                            to={item.route}
                            className="text-fuchsia-900 text-lg p-2 rounded hover:bg-purple-200 transition-colors"
                        >
                            {item.name}
                        </RouterLink>
                    ) : (
                        <button
                            key={item.name}
                            onClick={() => smoothScroll(item.id)}
                            className="text-fuchsia-900 text-lg p-2 rounded hover:bg-purple-200 transition-colors"
                        >
                            {item.name}
                        </button>
                    )
                )}
            </div>

            {/* Botón hamburguesa Mobile */}
            <button
                className="text-xl cursor-pointer text-fuchsia-900 p-2 md:hidden ml-auto"
                onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(!menuOpen);
                }}
            >
                &#9776;
            </button>

            {/* Menú Mobile */}
            {menuOpen && (
                <div className="absolute top-full right-0 left-0 md:hidden bg-white border-t border-gray-200 z-[1000] shadow-lg flex flex-col gap-1.5 p-4">
                    {navItems.map((item) =>
                        item.route ? (
                            <RouterLink
                                key={item.name}
                                to={item.route}
                                className="text-fuchsia-800  px-4 py-2 hover:bg-purple-100 rounded text-center"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </RouterLink>
                        ) : (
                            <button
                                key={item.name}
                                onClick={() => smoothScroll(item.id)}
                                className="text-fuchsia-900  px-4 py-2 hover:bg-purple-100 rounded text-center"
                            >
                                {item.name}
                            </button>
                        )
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
