import { useState } from "react";
import type { Product } from "../types/product";
import { ProductList } from "../components/ProductList";
import type { CartItem } from "../types/cartItem";
import { useProducts } from "../hooks/useProducts";

export function CatalogPage() {

    const [cartItem, setCartItem] = useState<CartItem[]>([])

    const[query, setQuery]=useState('')

    const [category, setCategory] = useState("all")

    //hook personalizado
    const { products, loading } = useProducts()

    
    const categories = ['all', ...new Set(products.map(product => product.category))]


    //Faz o filtro de acordo com o que for digitado no campo input e select
    const filtered = products.filter((product) => {
        return (category === 'all' || product.category === category && product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    })


    function handleAddCartItem(product: Product): void {

        const list = [...cartItem]

        const exists = list.find((value) => value.product.id === product.id)

        if (exists) {
            const item: CartItem = {
                product: exists.product,
                quantity: exists.quantity + 1
            }
            list.push(item)
            setCartItem(list)
            return
        }

        const item: CartItem = {
            product: product,
            quantity: 1
        }
        list.push(item)
        setCartItem(list)
    }


    return (
        <section>
            <input 
            type="text" 
            placeholder="Buscar produto..." 
            value={query} 
            onChange={(event) => setQuery(event.target.value)}
        />
        <select 
        name="category-list"
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        >

            {
                categories.map((item) =>{
                    return <option value={item}>{item}</option>
                })
            }

        </select>

            {
                loading ? 
                <p>Carregando itens...</p> :
                <ProductList
                    products={filtered}
                    onAddToCart={handleAddCartItem} 
                />

            }
        </section>
    )

}