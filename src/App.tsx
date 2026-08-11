
import { Button } from './Button'
import { Product } from './Products'

function App() {
const textoBotoes = ['Botão 1', "Botão 2", 'Botão 3']
  return (
    <div>
      <h1>Hello world</h1>
      {textoBotoes.map((texto) => {
        return <Button text = {texto}/>
      })}

      <Product/>
    </div>
  )
}

export default App
