import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./pages/home";
import CivilEngineerPage from "./pages/civilEngineer";
import SoftwareEngineerPage from "./pages/softwareEngineer";
import AboutPage from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Civil-Engineer" element={<CivilEngineerPage />} />
          <Route path="/Software-Engineer" element={<SoftwareEngineerPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
