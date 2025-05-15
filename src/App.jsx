import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/index";
import RekamJejak from "./pages/about/rekamJejak/index";
import Publikasi from "./pages/about/rekamJejak/publikasi/index";
import Pemateri from "./pages/about/rekamJejak/pemateri/index";
import Ketpen from "./pages/about/rekamJejak/ketpen/index";
import Dashboard from "./pages/dashboard";
import PagesHome from "./pages/dashboard/pagesHome";
import PagesWork from "./pages/dashboard/pagesWork";
import Pendidikan from "./pages/about/pendidikan";
import VisiMisi from "./pages/about/visiMisi";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute utama */}
        <Route path="/" element={<Test />} />
        
        {/* Rute Rekam Jejak */}
        <Route path="/Tentang Saya/Rekam Jejak" element={<RekamJejak />} />
        <Route path="/Tentang Saya/Rekam Jejak/Publikasi" element={<Publikasi />} />
        <Route path="/Tentang Saya/Rekam Jejak/Pemateri" element={<Pemateri />} />
        <Route path="/Tentang Saya/Rekam Jejak/Ketpen" element={<Ketpen />} />

        {/* Rute Dashboard dengan rute anak */}
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
