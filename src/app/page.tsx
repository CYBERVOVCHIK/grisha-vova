import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import MapComponent from "./Components/Map/MapComponent";
import Footer from "./Components/Footer/Footer";
import p from "./page.module.css";

export default function Home() {
  return (
    <div className={p.page}>
      <div className={p.content}>
        <Header />
        <Filter />
        <MapComponent />
      </div>

      <Footer />
    </div>
  );
}
