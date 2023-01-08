import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Shared from "./pages/shared/shared";
import Products from "./pages/products/products";
import Favorites from "./pages/favorites/favorites";
import Search from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Products />} />
            <Route path="products/favorites" element={<Favorites />} />
            <Route path="products/search" element={<Search />} />
          </Route>

          {/* <Route path="create-product" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
