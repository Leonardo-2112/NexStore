import type { Product } from "../types/product";

//const API = 'https://fakestoreapi.com/products'
const API = "http://192.168.15.109:3000"

export function getProducts():Promise<Product[]>{
    const response = fetch(`${API}/products`)
    .then((data) => {
        return data.json()
    })
    return response

}

export function getProductById(id:number):Promise<Product>{
    const response = fetch(`${API}/products/${id}`)
        .then((data) => {
            return data.json()
        })
    return response
}