import { Product } from './entities/product';
import data from "../data.json"

for (let i = 0; i < data.length; i++){
    const produtos = new Product(data[i].name, data[i].category, data[i].price, data[i].image.desktop)

}
