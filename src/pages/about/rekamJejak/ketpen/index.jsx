import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import publikasi from "../../../../assets/publikasiIMG.png";
import ceklist from "../../../../assets/icons/checklist.png";
import Navbar from "../../../../component/landing/navbar";
import Footer from "../../../../component/landing/footer";
import Breadcumb from "../../../../component/landing/breadcumb";

const Ketpen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen text-gray-800 bg-white pt-20">
      {/* Navbar fixed di atas */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      <Breadcumb />

      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="fixed z-30 hidden transition-transform duration-200 top-50 left-9 ms-5 hover:scale-110 lg:block"
        aria-label="Kembali"
      >
        <ArrowLeftCircle className="w-10 h-10 text-gray-800" />
      </button>

      {/* Konten Utama */}
      <main className="flex-grow w-full max-w-4xl px-4 pb-10 mx-auto">
        {/* Judul */}
        <h1 className="max-w-3xl mx-auto mb-8 text-2xl font-bold leading-snug text-center md:text-3xl">
          Mohammad Iqbal aktif dalam penelitian dan publikasi ilmiah yang
          berkontribusi pada pengembangan ilmu administrasi.
        </h1>

        {/* Gambar */}
        <div className="mb-8">
          <img
            src={publikasi}
            alt="Rak buku"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Konten Paragraf dan Daftar */}
        <section className="space-y-6 text-base leading-relaxed text-justify">
          <p>
            <strong>Malang</strong> – Sebagai akademisi yang berdedikasi,
            Mohammad Iqbal, dosen Fakultas Ilmu Administrasi Universitas
            Brawijaya (FIA UB), terus berkontribusi dalam pengembangan ilmu
            administrasi melalui berbagai penelitian dan publikasi ilmiah.
            Dengan fokus pada kebijakan publik, digitalisasi administrasi, dan
            inovasi tata kelola pemerintahan, ia telah menghasilkan berbagai
            karya yang menjadi referensi bagi dunia akademik maupun praktisi.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Komitmen terhadap Riset dan Inovasi
            </h2>
            <p>
              Sejak awal karier akademiknya, Mohammad Iqbal telah aktif
              melakukan penelitian yang berorientasi pada solusi nyata bagi
              masyarakat dan pemerintahan. Salah satu penelitian terbarunya
              membahas transformasi digital dalam administrasi publik, yang
              memberikan wawasan mendalam tentang bagaimana teknologi dapat
              meningkatkan efisiensi birokrasi di Indonesia. "Penelitian yang
              saya lakukan tidak hanya bertujuan untuk menambah wawasan
              akademik, tetapi juga untuk memberikan dampak langsung terhadap
              kebijakan publik dan sistem administrasi yang lebih modern," ujar
              Mohammad Iqbal dalam salah satu kesempatan wawancara.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Publikasi yang Mendunia
            </h2>
            <p>
              Sebagai seorang akademisi produktif, Mohammad Iqbal telah
              menerbitkan banyak jurnal ilmiah, baik di tingkat nasional maupun
              internasional. Beberapa publikasi unggulannya meliputi:
            </p>
            <ul className="pl-0 mt-2 space-y-3 text-sm text-black">
              <li>
                <a
                  href="https://journal.uny.ac.id/index.php/economia/article/view/23192"
                  className="flex items-start space-x-2 text-black no-underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ceklist}
                    alt="check"
                    className="flex-shrink-0 w-4 h-4 mt-1"
                  />
                  <span>
                    Sanistasya, PA, Raharjo, K., & Iqbal, M. (2019). The Effect
                    of Financial Literacy and Financial Inclusion on Small
                    Enterprises Performance in East Kalimantan. Economic
                    Journal, 15(1), 48-59.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.emerald.com/insight/content/doi/10.1108/RJTA-02-2019-0003/full/html"
                  className="flex items-start space-x-2 text-black no-underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ceklist}
                    alt="check"
                    className="flex-shrink-0 w-4 h-4 mt-1"
                  />
                  <span>
                    Kartajaya, H., Iqbal, M., Alfisyahr, R., Deasyana Rahma
                    Devita, L., & Ismail, T. (2019). Segmenting Islamic fashion
                    lifestyle on Indonesian women. Research Journal of Textile
                    and Apparel, 23(4), 306-322.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.scinapse.io/papers/3015486450"
                  className="flex items-start space-x-2 text-black no-underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ceklist}
                    alt="check"
                    className="flex-shrink-0 w-4 h-4 mt-1"
                  />
                  <span>
                    Astuti, ES, Sanawiri, B., & Iqbal, M. (2020). Attributes of
                    innovation, digital technology and their impact on SME
                    performance in Indonesia. International Journal of
                    Entrepreneurship,24(1), 1-14.
                  </span>
                </a>
              </li>
            </ul>
            <p className="mt-5">
              Publikasi-publikasi ini menjadi rujukan bagi akademisi, peneliti,
              dan pengambil kebijakan dalam memahami tantangan serta peluang
              dalam tata kelola pemerintahan berbasis teknologi.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Kolaborasi Internasional
            </h2>
            <p>
              Publikasi-publikasi ini menjadi rujukan bagi akademisi, peneliti,
              dan pengambil kebijakan dalam memahami tantangan serta peluang
              dalam tata kelola pemerintahan berbasis teknologi.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold">Dedikasi Masa Depan</h2>
            <p>
              Dengan semangat inovasi dan dedikasi tinggi, Mohammad Iqbal
              berkomitmen untuk terus mengembangkan ilmu administrasi melalui
              penelitian yang aplikatif dan bermanfaat. Ke depan, ia berencana
              untuk menggali lebih dalam mengenai Artificial Intelligence (AI)
              dalam Administrasi Publik, yang diyakini akan menjadi tren besar
              dalam tata kelola pemerintahan modern. "Ilmu administrasi harus
              terus berkembang sesuai dengan perkembangan zaman. Dengan riset
              yang kuat, kita bisa menciptakan sistem administrasi yang lebih
              efektif, efisien, dan berpihak pada kepentingan masyarakat,"
              pungkasnya.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ketpen;
