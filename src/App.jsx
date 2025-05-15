import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/index";
import Dashboard from "./pages/dashboard";
import PagesHome from "./pages/dashboard/pagesHome";
import PagesWork from "./pages/dashboard/pagesWork";
import Pendidikan from "./pages/about/pendidikan";
import VisiMisi from "./pages/about/visiMisi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Tentang Saya/Pendidikan" element={<Pendidikan />} />
        <Route path="/Tentang Saya/Visi Misi" element={<VisiMisi />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<PagesHome />} />
          <Route path="programkerja" element={<PagesWork />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
