import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Apple from "../../images/social/apple.svg";
import Facebook from "../../images/social/facebook.svg";
import Google from "../../images/social/google.svg";
const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
        // TODO: conectar con backend o proveedor de auth
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-fuchsia-100 px-4 pt-22 pb-7">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-fuchsia-800 text-center">
                    Iniciar sesión
                </h2>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
                />

                <button
                    type="submit"
                    className="w-full bg-fuchsia-800 text-white py-2 rounded-lg shadow hover:bg-fuchsia-700 transition font-semibold"
                >
                    Entrar
                </button>

                {/* Separador */}
                <div className="flex items-center my-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">o continúa con</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Botones sociales */}
                <div className="flex flex-col gap-3">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition"
                    >
                        <img src={Google} alt="Google" className="w-5 h-5" />
                        <span className="text-gray-700 font-medium">Google</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition"
                    >
                        <img src={Facebook} className="w-5 h-5" />
                        <span className="text-gray-700 font-medium">Facebook</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition"
                    >
                        <img src={Apple} alt="Apple" className="w-5 h-5" />
                        <span className="text-gray-700 font-medium">Apple</span>
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <Link to="/register" className="text-fuchsia-800 font-semibold">
                        Regístrate
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Login;
