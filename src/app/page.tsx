import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import MapComponent from "./Components/Map/MapComponent";

import p from "./page.module.css";
import ExcelUpload from "./Components/ExcelUpload/ExcelUpload";

export default function Home() {
  return (
    <div className={p.page}>
      <Filter />
      <MapComponent />
      <ExcelUpload />
    </div>
  );
}
