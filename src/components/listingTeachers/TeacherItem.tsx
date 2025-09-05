import { Link } from "react-router-dom";
import type { Teacher } from "../../types/teacher";

interface TeacherItemProps {
    teacherToShow: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacherToShow }) => (
    <div className="flex flex-col h-full py-8">
        <div className="flex justify-center">
            <img
                src={teacherToShow.photo}
                alt={`Foto de ${teacherToShow.name}`}
                className="w-32 h-32 object-cover rounded-full shadow-md"
            />
        </div>
        <div className="mt-4 flex-1 space-y-2 text-center">
            <h3 className="text-lg font-semibold text-fuchsia-900">{teacherToShow.name}</h3>
            <p className="text-gray-600 text-sm">{teacherToShow.number_of_classes} clases</p>
            <h4 className="text-fuchsia-700 font-medium">{teacherToShow.instrument}</h4>
            <p className="text-gray-600 text-sm">Habla {teacherToShow.language}</p>
            <p className="text-fuchsia-900 font-semibold line-clamp-2">{teacherToShow.ad_title}</p>

            {/* Descripción con máximo 2 líneas y puntos suspensivos */}
            <p className="text-gray-700 text-sm line-clamp-2">{teacherToShow.ad_desc}</p>
        </div>

        <div className="mt-4 flex justify-around gap-2">
            {/* Ver más */}
            <Link
                to={`/teacher-detail/${teacherToShow.id}/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`}
                className="px-3 py-2 text-sm bg-white text-fuchsia-800 rounded-lg shadow border-1 hover:bg-fuchsia-200 transition"
            >
                Ver más
            </Link>
            <Link
                to={`/contact-teacher/${teacherToShow.id}/${teacherToShow.name.replaceAll(/[\W_]+/g, "-")}`}
                className="px-3 py-2 text-sm bg-fuchsia-800  text-white   rounded-lg shadow hover:bg-fuchsia-700 transition"
            >
                Contactar
            </Link>
        </div>
    </div>
);

export default TeacherItem;
