import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import MapComponent from "./Components/Map/MapComponent";
import Footer from "./Components/Footer/Footer";
import p from "./page.module.css";
import ExcelUpload from "./Components/ExcelUpload/Excel";

export default function Home() {
  return (
    <div className={p.page}>
      <div className={p.content}>
        <Header />
        <Filter />
        <MapComponent />
        <ExcelUpload />
      </div>

      <Footer />
    </div>
  );
}
