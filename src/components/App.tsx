
import "../styles/tailwind.css";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Route, Routes } from "react-router-dom";

import ListingTeachers from "./listingTeachers/ListingTeachers";
import FormTeachersList from "./listingTeachers/FormTeachers";
import TeacherDetail from "./pages/TeacherDetail";
import ContactTeacher from "./pages/ContactTeacher";
import LandingPage from "./pages/Landing";
import Header from "./layout/1_Header";
import Footer from "./layout/8_Footer";

import type { Teacher } from "../types/teacher";


const App: React.FC = () => {
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);
  const [filterInstrument, setFilterInstrument] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleInputFilterInstrument = (ev: ChangeEvent<HTMLInputElement>) => {
    setFilterInstrument(ev.target.value);
  };

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(ev.target.value);
  };

  const filteredTeachers = allTeachers.filter(
    (teacher) =>
      teacher.language.toLowerCase().includes(selectedLanguage.toLowerCase()) &&
      teacher.instrument.toLowerCase().includes(filterInstrument.toLowerCase())
  );

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data: Teacher[]) => setAllTeachers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/teacher-list"
            element={
              <div className="px-4 md:px-8 lg:px-16">
                <FormTeachersList
                  handleInputFilterInstrument={handleInputFilterInstrument}
                  selectedLanguage={selectedLanguage}
                  filterInstrument={filterInstrument}
                  handleChange={handleChange}
                />
                <ListingTeachers allTeachers={filteredTeachers} />
              </div>
            }
          />
          <Route
            path="/teacher-detail/:id/:name"
            element={<TeacherDetail allTeachers={allTeachers} />}
          />
          <Route
            path="/contact-teacher/:id/:name"
            element={<ContactTeacher allTeachers={allTeachers} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;