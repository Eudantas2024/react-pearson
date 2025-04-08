//npm install react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contato } from "./pages/Contato";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

// Router por fora
// Header e Footer fixo
// No meio de Header e do Footer vão ter rotas
