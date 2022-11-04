import './App.css';
import Group from "./imgs/Group.png"
import Group1 from "./imgs/Group1.png"
import Group2 from "./imgs/Group2.png"
import img from "./imgs/img.png"
import img1 from "./imgs/img1.png"
import img2 from "./imgs/img2.png"
import Vector from "./imgs/Vector.png"
import Vector1 from "./imgs/Vector1.png"
import zoom from "./imgs/zoom.png"
import MapProyect from './MapProyect';
import MapProyect1 from './MapProyect1';
import MapProyect2 from './MapProyect2';
function App() {
  let data = [{ titleLeft: "FEATURED", titleRight: "FOR SALE", src: img, title: "New Apartment Nice Wiew", text: "Quincy St, Brooklyn, NY, USA", src1: Group, src2: Group1, src3: Vector, src4: Group2, commit: "4 Beds", commit2: "5 Baths", commit3: "1 Garage", commit4: "1200 Sq Ft", price: "$2,800/mo", newPrice: "$7,500/mo", zoomImg: zoom, love: Vector1 }]

  let data1 = [{ titleLeft: "FEATURED", titleRight: "FOR SALE", src: img1, title: "New Apartment Nice Wiew", text: "Quincy St, Brooklyn, NY, USA", src1: Group, src2: Group1, src3: Vector, src4: Group2, commit: "4 Beds", commit2: "5 Baths", commit3: "1 Garage", commit4: "1200 Sq Ft", price: "$2,800/mo", newPrice: "$7,500/mo", zoomImg: zoom, love: Vector1 }]

  let data2 = [{ titleLeft: "FEATURED", titleRight: "FOR SALE", src: img2, title: "New Apartment Nice Wiew", text: "Quincy St, Brooklyn, NY, USA", src1: Group, src2: Group1, src3: Vector, src4: Group2, commit: "4 Beds", commit2: "5 Baths", commit3: "1 Garage", commit4: "1200 Sq Ft", price: "$2,800/mo", newPrice: "$7,500/mo", zoomImg: zoom, love: Vector1 }]

  return (
    <div className="App">
      <MapProyect xabar={data} />
      <MapProyect1 xabar={data1} />
      <MapProyect2 xabar={data2} />
    </div>
  );
}

export default App;
