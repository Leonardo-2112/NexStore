import type { Product } from "./types/product"
import { CatalogPage } from "./pages/CatalogPage"

interface AppProps {
  products: Product[]
}

function App() {
  return (
    <main>
      <h1>Nexstore</h1>
      <CatalogPage/>
    </main>
  )
}

export default App