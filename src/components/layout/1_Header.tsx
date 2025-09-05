import { useState, useEffect, type JSX } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "../../images/logo/logo_final.png";

interface NavItem {
    id?: string;
    name: string;
    route?: string;
}

const Header = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    const smoothScroll = (id: string) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const scrollToId = (location.state as { scrollTo?: string })?.scrollTo;
        if (scrollToId) {
            smoothScroll(scrollToId);
        }
    }, [location]);

    useEffect(() => {
        const handleBodyClick = () => setMenuOpen(false);
        document.body.addEventListener("click", handleBodyClick);
        return () => document.body.removeEventListener("click", handleBodyClick);
    }, []);

    const navItems: NavItem[] = [
        { id: "hero", name: "Inicio", route: "/" },
        { id: "how_it_works", name: "¿Cómo funciona?", route: "#how_it_works" },
        { name: "Encuentra tu profe", route: "/teacher-list" },
        { name: "Regístrate gratis", route: "/register" },
        { name: "Inicia sesión", route: "/login" },
    ];


    const renderNavItem = (item: NavItem, isMobile = false) => {
        // Rutas con scroll a secciones en la misma página (home)
        if (item.id && (item.id === "hero" || (item.route && item.route.startsWith("#")))) {
            return location.pathname === "/" ? (
                <button
                    key={item.name}
                    onClick={() => smoothScroll(item.id!)}
                    className={`text-fuchsia-900 text-lg p-0.5 rounded hover:bg-purple-200 transition-colors ${isMobile ? "px-4 py-0.5 hover:bg-purple-100 text-center" : ""
                        }`}
                >
                    {item.name}
                </button>
            ) : (
                <RouterLink
                    key={item.name}
                    to="/"
                    state={{ scrollTo: item.id }}
                    className={`text-fuchsia-900 text-lg p-0.5 rounded hover:bg-purple-200 transition-colors ${isMobile ? "px-4 py-0.5 hover:bg-purple-100 text-center" : ""
                        }`}
                    onClick={() => setMenuOpen(false)}
                >
                    {item.name}
                </RouterLink>
            );
        }

        // Rutas absolutas normales (otras páginas)
        if (item.route && item.route.startsWith("/")) {
            return (
                <RouterLink
                    key={item.name}
                    to={item.route}
                    className={`text-fuchsia-900 text-lg p-0.5 rounded hover:bg-purple-200 transition-colors ${isMobile ? "text-fuchsia-800 px-4 py-0.5 hover:bg-purple-100 text-center" : ""
                        }`}
                    onClick={() => setMenuOpen(false)}
                >
                    {item.name}
                </RouterLink>
            );
        }

        // Sin route → scroll por id
        return (
            <button
                key={item.name}
                onClick={() => smoothScroll(item.id!)}
                className={`text-fuchsia-900 text-lg p-0.5 rounded hover:bg-purple-200 transition-colors ${isMobile ? "px-4 py-0.5 hover:bg-purple-100 text-center" : ""
                    }`}
            >
                {item.name}
            </button>
        );
    };

    return (
        <header className="fixed top-0 w-full flex items-center bg-white px-4 py-0.5 md:px-8 md:py-0 z-[100] shadow-md">
            {/* Logo */}
            <div onClick={() => smoothScroll("hero")} className="flex-shrink-0 cursor-pointer">
                <RouterLink to="/">
                    <img src={Logo} alt="Logo de Mila Music" className="h-18 md:h-16 xl:h-20" />
                </RouterLink>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                {navItems.map((item) => renderNavItem(item))}
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
                    {navItems.map((item) => renderNavItem(item, true))}
                </div>
            )}
        </header>
    );
};

export default Header;
