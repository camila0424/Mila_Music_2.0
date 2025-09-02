import { useEffect } from "react";
import TeacherItem from "./TeacherItem";
import type { Teacher } from "../../types/teacher";

interface ListingTeachersProps {
    allTeachers: Teacher[];
}

const ListingTeachers: React.FC<ListingTeachersProps> = ({ allTeachers }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!Array.isArray(allTeachers)) {
        return <p className="text-center text-gray-500">Cargando profesores...</p>;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-6">
            {allTeachers.map((teacher) => (
                <li key={teacher.id} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                    <TeacherItem teacherToShow={teacher} />
                </li>
            ))}
        </ul>
    );
};

export default ListingTeachers;
