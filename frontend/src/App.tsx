import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cooperativa from "./pages/Cooperativa";
import AdicionarCooperativa from "./pages/AdicionarCooperativa";
import Favoritos from "./pages/Favoritos";
import AdicionarFavorito from "./pages/AdicionarFavorito";
import Cooperados from "./pages/Cooperados";
import AdicionarCooperado from "./pages/AdicionarCooperado";
import Header from "./components/Header";
function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cooperativa />} />
          <Route path="/adicionar-cooperativa" element={<AdicionarCooperativa />} />
          <Route path="/contatos-favoritos" element={<Favoritos />} />
          <Route path="/adicionar-favoritos" element={<AdicionarFavorito />} />
          <Route path="/adicionar-cooperado" element={<AdicionarCooperado />} />
          <Route path="/cooperados" element={<Cooperados />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App