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
import PagesRekamJejak from "./pages/dashboard/pagesRekamJejak";
import Digitalisasi from "./pages/programkerja/digitalisasi";
import Internasionalisasi from "./pages/programkerja/internasionalisasi";
import Penguatan from "./pages/programkerja/penguatan";
import Pendidikan from "./pages/about/pendidikan";
import VisiMisi from "./pages/about/visiMisi";
import PagesSetting from "./pages/dashboard/pagesSetting";
import Add from "./pages/dashboard/pagesWork/add";
import Page_1 from "./pages/dashboard/pagesWork/add/page_1";
import Page_2 from "./pages/dashboard/pagesWork/add/page_2";
import Page_3 from "./pages/dashboard/pagesWork/add/page_3";
import Page_4 from "./pages/dashboard/pagesWork/add/page_4";
import Edit from "./pages/dashboard/pagesWork/edit";
import Edit_1 from "./pages/dashboard/pagesWork/edit/edit_1";
import Edit_2 from "./pages/dashboard/pagesWork/edit/edit_2";
import Edit_3 from "./pages/dashboard/pagesWork/edit/edit_3";
import Edit_4 from "./pages/dashboard/pagesWork/edit/edit_4";
import PagesDukungan from "./pages/dashboard/pagesDukungan";
import AddRekamJejak from "./pages/dashboard/pagesRekamJejak/add";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute utama */}
        <Route path="/" element={<Test />} />

        {/* Rute Rekam Jejak */}
        <Route path="/Tentang Saya/Rekam Jejak" element={<RekamJejak />} />
        <Route
          path="/Tentang Saya/Rekam Jejak/Publikasi"
          element={<Publikasi />}
        />
        <Route
          path="/Tentang Saya/Rekam Jejak/Pemateri"
          element={<Pemateri />}
        />
        <Route path="/Tentang Saya/Rekam Jejak/Ketpen" element={<Ketpen />} />

        {/* Rute Dashboard dengan rute anak */}
        <Route path="/Tentang Saya/Pendidikan" element={<Pendidikan />} />
        <Route path="/Tentang Saya/Visi Misi" element={<VisiMisi />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<PagesHome />} />
          <Route path="programkerja" element={<PagesWork />} />
          <Route path="dukungan" element={<PagesDukungan />} />
          <Route path="tentangsaya" element={<PagesRekamJejak />} />
          <Route path="pengaturan" element={<PagesSetting />} />
          <Route path="Add Program Kerja" element={<Add />}>
            <Route index element={<Page_1 />} />
            <Route path="Page 2" element={<Page_2 />} />
            <Route path="Page 3" element={<Page_3 />} />
            <Route path="Page 4" element={<Page_4 />} />
          </Route>
          <Route path="Add Rekam Jejak" element={<AddRekamJejak />} />
          <Route path="Edit Program Kerja" element={<Edit />}>
            <Route index element={<Edit_1 />} />
            <Route path="Edit 2" element={<Edit_2 />} />
            <Route path="Edit 3" element={<Edit_3 />} />
            <Route path="Edit 4" element={<Edit_4 />} />
          </Route>
        </Route>
        <Route path="/digitalisasi" element={<Digitalisasi />} />
        <Route path="/internasionalisasi" element={<Internasionalisasi />} />
        <Route path="/penguatan" element={<Penguatan />} />
      </Routes>
    </Router>
  );
}

export default App;
