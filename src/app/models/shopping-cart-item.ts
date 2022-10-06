
export class ShoppingCartItem {
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    category:string;
    quantity:number;
    constructor(init?:Partial <ShoppingCartItem> ) {
        Object.assign(this, init);


}
    get totalPrice() {
        return this.price * this.quantity; 
    }
} 
