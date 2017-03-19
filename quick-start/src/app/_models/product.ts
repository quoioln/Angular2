export class Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    photo: string;

    constructor() {
        this.id = "1";
        this.name = "coat";
        this.price = 200000;
        this.quantity = 2;
        this.photo = "couple_chibi.jpg";
    }
}