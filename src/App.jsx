import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Home from "./Components/Home/Home";
import ItemLisContainer from "./Components/ItemContenedor/ItemLisContainer";
import ItemDetailContainer from "./Components/ItemContenedor/ItemDetailContainer";
import Navbar from "./Components/Navbar/Navbar";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import Carrito from "./Components/Carrito/Carrito";
import Checkout  from "./Components/ItemContenedor/Checkout";

function App() {
  return (
    <div>
    <CartProvider>
      <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos" element={<ItemLisContainer />} />
        <Route path="/productos/:categoria" element={<ItemLisContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

        <Footer />

      </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App