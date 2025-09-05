import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface Teacher {
    id: string;
    name: string;
    instrument: string;
    photo: string;
}

interface ContactTeacherProps {
    allTeachers: Teacher[];
}

const ContactTeacher: React.FC<ContactTeacherProps> = ({ allTeachers }) => {
    const { id } = useParams<{ id: string }>();
    const teacherToShow = allTeachers.find((t) => t.id === id);

    const [message, setMessage] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

    useEffect(() => {
        if (teacherToShow) {
            setMessage(
                `Hola, ${teacherToShow.name}. Me llamo Maricarmen y busco un profe de ${teacherToShow.instrument}. Me gustaría tener clases en línea. Quisiera poder empezar lo antes posible. ¿Qué te parece? ¿Podrías contactarme para que nos pongamos de acuerdo? ¡Que tengas un buen día! Hasta pronto, Maricarmen.`
            );
        }
    }, [teacherToShow]);

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newErrors: { phone?: string; email?: string } = {};

        // Validación teléfono: solo números
        if (!/^\d+$/.test(phone)) {
            newErrors.phone = "El teléfono solo puede contener números.";
        }

        // Validación email estricta (RFC 5322 simplificado)
        const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!strictEmailRegex.test(email)) {
            newErrors.email = "Introduce un email válido (ej: ejemplo@dominio.com)";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log({ message, phone, email });
            alert("Formulario enviado correctamente");
        }
    };

    if (!teacherToShow) return <p className="text-center text-gray-500">Cargando datos...</p>;

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white shadow-md rounded-2xl px-6 py-9 space-y-7"
        >
            <h2 className="text-2xl font-bold text-fuchsia-800">Planifica</h2>
            <p className="text-gray-700">Tu primera clase con {teacherToShow.name}</p>

            <img
                className="w-32 h-32 object-cover rounded-full mx-auto"
                src={teacherToShow.photo}
                alt={`Foto de ${teacherToShow.name}`}
            />

            <label htmlFor="message" className="block text-lg font-semibold text-fuchsia-800">
                Vuestro mensaje
            </label>
            <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                rows={8}
                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
            />

            <h3 className="text-xl font-semibold text-fuchsia-800">Tus datos de contacto</h3>
            <p className="text-gray-600 text-sm">
                Esta información será compartida únicamente con los/as profes que tú escojas.
            </p>

            {/* Input Email */}
            <h3 className="text-xl font-semibold text-fuchsia-800">Email</h3>
            <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.email ? "border-red-500" : ""
                    }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            {/* Input Teléfono */}
            <h3 className="text-xl font-semibold text-fuchsia-800">Número de teléfono</h3>
            <input
                type="tel"
                placeholder="Móvil"
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${errors.phone ? "border-red-500" : ""
                    }`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <div className="flex justify-between items-center">
                <button
                    type="submit"
                    className="bg-fuchsia-800 text-white px-6 py-2 rounded-lg shadow hover:bg-fuchsia-700 transition"
                >
                    Enviar
                </button>

                <Link to="/teacher-list" className="text-fuchsia-800 hover:underline font-medium">
                    Volver
                </Link>
            </div>
        </form>
    );
};

export default ContactTeacher;
