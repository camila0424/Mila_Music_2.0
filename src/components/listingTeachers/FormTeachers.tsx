import type { ChangeEvent } from "react";

interface FormTeachersListProps {
    handleInputFilterInstrument: (ev: ChangeEvent<HTMLInputElement>) => void;
    handleChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
    filterInstrument: string;
    selectedLanguage: string;
}

const FormTeachersList: React.FC<FormTeachersListProps> = ({
    handleInputFilterInstrument,
    handleChange,
    filterInstrument,
    selectedLanguage,
}) => (
    <form className="flex flex-row md:flex-row gap-4 items-center bg-white text-fuchsia-800 shadow-md p-2 rounded-2xl mt-16 sticky top-21 z-50">

        <input
            type="text"
            placeholder="Escribe un instrumento"
            value={filterInstrument}
            onInput={handleInputFilterInstrument}
            className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <select
            value={selectedLanguage}
            onChange={handleChange}
            className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none"
        >
            <option value="" disabled hidden>
                Idioma de la clase
            </option>
            <option value="Español">Español</option>
            <option value="English">Inglés</option>
            <option value="Francés">Francés</option>
        </select>
    </form>
);

export default FormTeachersList;
