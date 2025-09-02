import { Link, useParams } from "react-router-dom";
import type { Teacher } from "../../types/teacher";

interface TeacherDetailProps {
    allTeachers: Teacher[];
}

const TeacherDetail: React.FC<TeacherDetailProps> = ({ allTeachers }) => {
    const { id } = useParams<{ id: string }>();
    const teacherToShow = allTeachers.find((t) => t.id === id);

    if (!teacherToShow) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h3 className="text-xl font-semibold text-red-600">No existe esa profesora/profesor con el id {id}</h3>
                <Link to="/" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                    Volver
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <img src={teacherToShow.photo} alt={teacherToShow.name} className="w-40 h-40 object-cover rounded-full shadow-md" />
                <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-indigo-600">{teacherToShow.name}</h3>
                    <p className="text-gray-600">Clases impartidas: {teacherToShow.number_of_classes}</p>
                    <p className="text-lg font-medium text-gray-800">{teacherToShow.instrument}</p>
                    <p className="text-gray-700">Habla: {teacherToShow.language}</p>
                    <p className="text-indigo-700 font-semibold">Valor de la clase: {teacherToShow.cost_per_hour}</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-indigo-600">Título del anuncio</h3>
                <p className="text-gray-700">{teacherToShow.ad_title}</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-indigo-600">Acerca del profe</h3>
                <p className="text-gray-700">{teacherToShow.ad_desc}</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-indigo-600">Acerca de la clase</h3>
                <p className="text-gray-700">{teacherToShow.class_desc}</p>
            </div>

            <div className="flex justify-between pt-4">
                <Link to="/teacher-list" className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition">Volver</Link>
                <Link to={`/contact-teacher/${teacherToShow.id}/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`} className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">Contactar</Link>
            </div>
        </div>
    );
};

export default TeacherDetail;
