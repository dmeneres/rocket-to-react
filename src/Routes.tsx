import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import { NonHomeLayout } from "./layouts/NonHomeLayout";
import { AboutMePage } from "./pages/AboutMe";
import { ContactPage } from "./pages/Contact";
import { EducationPage } from "./pages/Education";
import { HomePage } from "./pages/Home";
import { ProjectsPage } from "./pages/Projects";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/" element={<NonHomeLayout />}>
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
