// importar data.json
// importar entities/product.ts
// Criar os objetos de produto utilizando os
// dados de data.json

import { Product } from "./entities/product";
import data from "../data.json";
import { Cart } from "./entities/cart";

for (const product of data) {
    new Product(
        product.name,
        product.category,
        product.price,
        product.image.desktop,
    ).toHTML();
}