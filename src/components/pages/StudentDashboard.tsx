import { Link } from "react-router-dom";

// Mock de datos del estudiante
const mockStudent = {
    name: "Camila Bedoya",
    email: "camila@example.com",
    instrument: "Piano",
    classes: [
        {
            id: 1,
            teacher: "Juan Pérez",
            instrument: "Piano",
            date: "2025-09-15",
            time: "18:00",
            status: "Confirmada",
        },
        {
            id: 2,
            teacher: "Laura Gómez",
            instrument: "Canto",
            date: "2025-09-20",
            time: "17:00",
            status: "Pendiente",
        },
    ],
};

const StudentDashboard: React.FC = () => {
    return (
        <section className="min-h-screen bg-fuchsia-50 py-22 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
                {/* Perfil */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold text-fuchsia-800 mb-4">
                        Bienvenida, {mockStudent.name}
                    </h2>
                    <p className="text-gray-600">
                        <span className="font-semibold">Email:</span> {mockStudent.email}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Instrumento favorito:</span>{" "}
                        {mockStudent.instrument}
                    </p>
                    <Link
                        to="/edit-profile"
                        className="inline-block mt-4 bg-fuchsia-800 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition"
                    >
                        Editar perfil
                    </Link>
                </div>

                {/* Clases reservadas */}
                <div>
                    <h3 className="text-xl font-semibold text-fuchsia-800 mb-4 ">
                        Mis clases reservadas
                    </h3>

                    {mockStudent.classes.length > 0 ? (
                        <ul className="space-y-4">
                            {mockStudent.classes.map((c) => (
                                <li
                                    key={c.id}
                                    className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2"
                                >
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {c.instrument} con {c.teacher}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {c.date} a las {c.time}
                                        </p>
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${c.status === "Confirmada"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {c.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">
                            Aún no tienes clases reservadas.{" "}
                            <Link
                                to="/teacher-list"
                                className="text-fuchsia-800 font-semibold hover:underline"
                            >
                                Encuentra un profesor
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StudentDashboard;
