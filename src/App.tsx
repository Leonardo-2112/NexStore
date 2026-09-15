import type { Product } from "./types/product"
import { CatalogPage } from "./pages/CatalogPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartItem } from "./pages/CartItem"
import { MainLayout } from "./layouts/MainLayout"


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>

          <Route index element={<CatalogPage />} />
          <Route path="/cart" element={<CartItem />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App