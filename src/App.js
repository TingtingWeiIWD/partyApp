import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";
import Arrived from "./pages/Arrived/Arrived";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Arrived" element={<Arrived />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
