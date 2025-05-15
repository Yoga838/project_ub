import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/index";
import Dashboard from "./pages/dashboard";
import PagesHome from "./pages/dashboard/pagesHome";
import PagesWork from "./pages/dashboard/pagesWork";
import Digitalisasi from "./pages/programkerja/digitalisasi";
import Internasionalisasi from "./pages/programkerja/internasionalisasi";
import Penguatan from "./pages/programkerja/penguatan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<PagesHome />} />
          <Route path="programkerja" element={<PagesWork />} />
        </Route>
        <Route path="/digitalisasi" element={<Digitalisasi />} />
        <Route path="/internasionalisasi" element={<Internasionalisasi />} />
        <Route path="/penguatan" element={<Penguatan />} />
      </Routes>
    </Router>
  );
}

export default App;
