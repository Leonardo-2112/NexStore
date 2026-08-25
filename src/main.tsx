import { createRoot } from 'react-dom/client'
import App from './App'
import { getProducts } from './services/products'

const root = createRoot(document.getElementById('root')!)

getProducts().then((products) => {
  root.render(<App products={products}/>)
})