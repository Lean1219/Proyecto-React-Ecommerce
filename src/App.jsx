import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ItemLisContainer from "./Components/ItemListContainer/ItemLisContainer";
import ItemDetailContainer from "./Components/ItemListContainer/ItemDetailContainer";
import Navbar from "./Components/Navbar/Navbar";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemLisContainer />} />
          <Route path="/productos/:categoria" element={<ItemLisContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


