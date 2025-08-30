import { Link } from "react-router-dom";
import facebook from "../../images/landing/redes-sociales/facebook.png";
import instagram from "../../images/landing/redes-sociales/instagram.png";
import twitter from "../../images/landing/redes-sociales/twitter.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-fuchsia-900 text-white  font-medium text-base w-full flex flex-col items-center text-center gap-2 p-1 md:flex-row md:justify-around md:text-lg md:p-8">

            {/* Nuestra empresa */}
            <section className="border-b-2 border-white w-full md:w-auto md:border-b-0 md:px-4 pb-5 md:pb-0">
                <h3 className="mb-3 text-xl">Nuestra empresa</h3>
                <ul className="list-none p-0 m-0">
                    <li className="my-2 hover:bg-fuchsia-200 rounded-md transition-colors">
                        <Link to="/sobre-nosotros" className="text-white no-underline block py-1 px-2">
                            Sobre nosotros
                        </Link>
                    </li>
                    <li className="my-2 hover:bg-[#d3b1dc] rounded-md transition-colors">
                        <Link to="/ayuda" className="text-white no-underline block py-1 px-2">
                            Ayuda
                        </Link>
                    </li>
                    <li className="my-2 hover:bg-[#d3b1dc] rounded-md transition-colors">
                        <Link to="/privacidad" className="text-white no-underline block py-1 px-2">
                            Políticas de privacidad
                        </Link>
                    </li>
                </ul>
            </section>

            {/* Recursos */}
            <section className="border-b-1 border-white w-full md:w-auto md:border-b-0 md:px-4 pb-5 md:pb-0">
                <h3 className="mb-3 text-xl">Recursos</h3>
                <ul className="list-none p-0 m-0">
                    <li className="my-2 hover:bg-[#d3b1dc] rounded-md transition-colors">
                        <Link to="/dar-clases" className="text-white no-underline block py-1 px-2">
                            Dar clases online
                        </Link>
                    </li>
                    <li className="my-2 hover:bg-[#d3b1dc] rounded-md transition-colors">
                        <Link to="/teacher-list" className="text-white no-underline block py-1 px-2">
                            Recibir clases online
                        </Link>
                    </li>
                    <li className="my-2 hover:bg-[#d3b1dc] rounded-md transition-colors">
                        <Link to="/blog" className="text-white no-underline block py-1 px-2">
                            Blog
                        </Link>
                    </li>
                </ul>
            </section>

            {/* Redes sociales */}
            <section className="mt-4 mb-10 flex gap-14 md:mt-0 md:mb-0">
                <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="icono de twitter" className="w-10 hover:brightness-125 transition" />
                </a>
                <a href="https://www.facebook.com/login/?locale=es_ES" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="icono de Facebook" className="w-10 hover:brightness-125 transition" />
                </a>
                <a href="https://www.instagram.com/mila_musikclass/?igsh=MTdoMDQ2bXE5MHp4eg%3D%3D#" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="icono de Instagram" className="w-10 hover:brightness-125 transition" />
                </a>
            </section>

        </footer>
    );
};

export default Footer;
