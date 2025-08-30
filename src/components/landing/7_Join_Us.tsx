import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const JoinUs: React.FC = () => {
    return (
        <section className="bg-fuchsia-200 flex flex-col items-center text-center gap-8 py-10 px-5 md:px-20">
            <h3 className="text-2xl font-extrabold text-fuchsia-900 mt-8">
                Únete a la familia musical más grande
            </h3>

            <p className="text-fuchsia-800 text-lg">
                Nuestros profes son unos expertos en su materia y te <br />
                ayudarán a alcanzar tu objetivo musical.
            </p>

            <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="mt-10 mb-10 w-90 text-center"
            >
                <Link
                    to="/teacher-list"
                    className="bg-fuchsia-800 text-white  font-bold text-xl py-4 px-4 rounded-2xl block"
                >
                    Encuentra a tu profesor ideal
                </Link>
            </motion.div>
        </section>
    );
};

export default JoinUs;
