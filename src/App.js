import { Footer, Header, ProductList } from "./components";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
