import { Product } from './entities/product';
import data from "../data.json" // data é variável. Não utiliza a chave porque aqui é um dado bruto
import { Cart } from "./entities/cart";


const product1 = new Product('banana', 'fruta', 10, "www.example.com")
const cart = new Cart()
cart.addToCart(product1)
console.log(cart)


for (let i = 0; i < data.length; i++){
    const produto = new Product(
        data[i].name, 
        data[i].category, 
        data[i].price, 
        data[i].image.desktop
    );
    produto.renderProducts()
}