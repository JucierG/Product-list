import { v4 as uuidv4 } from "uuid";
import { Cart } from "./cart";

export class Product {
  private _id: string = uuidv4();
  private _name: string;
  private _category: string;
  private _price: number;
  private _imageUrl: string;
  private _quantity: number = 0;
  private _total: number = 0;

  constructor(name: string, category: string, price: number, imageUrl: string) {
    this._name = name;
    this._category = category;
    this._price = price;
    this._imageUrl = imageUrl;
  }

  toHTML(){
    const productListHTML = document.getElementById("product-list");
    const productHTML = document.createElement("li");
    productHTML.id = this._id

    productHTML.innerHTML = `
            <div class="rounded-xl overflow-hidden flex flex-col border border-black h-[270px] w-[250px]">
          <div class="mb-10 relative h-full bg-red-500">
            <div class="">img</div>
            <button type="button" class="button rounded-lg text-white font-medium text-xs bg-red-400">Add to Cart</button>
          </div>

           <div class="flex flex-col">
            <span class="product-category">${this._category}</span>
            <span class="product-name text-xl font-medium">${this._name}</span>
            <span class="product-price">${this._price}</span>
          </div>
        </div>
    `
    const buttonAddToCartHTML
    productListHTML.appendChild(productHTML);
  }

  get id(){
    return this._id;
  }

  get quantity() {
    return this._quantity;
  }

  get total() {
    return this._total;
  }

  calculateTotal() {
    this._total = this._quantity * this._price;
  }

  incrementQuantity() {
    this._quantity++;
    this.calculateTotal();

    Cart.addToCart(this);
  }

  decrementQuantity() {
    this._quantity--;
    this.calculateTotal();
  }

  get price() {
    return this._price;
  }
}