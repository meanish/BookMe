import "./App.scss";
import Home from "./Home";
import { Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Explore from "./Explore/Explore";
import HotelCard from "./Reducer/HotelCard"

function App() {
  return (
    <>
      <Routes>
        <Route path="BookMe" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/explore/hotelCard" element={<HotelCard />}></Route>
      </Routes>

    </>
  );
}

export default App;
