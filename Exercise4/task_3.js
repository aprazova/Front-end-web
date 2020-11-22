class Item {
    constructor(name, discount) {
        this.price = this.getPrice();
        this.name = name;
        this.discount = discount;
    }

    calculate() {
        return this.price - (this.price * this.discount) / 100;
    }
}

Item.prototype.getPrice = function() {
    return 1000;
}

let shoes = new Item("shoes", 10);
let shoesPrice = shoes.calculate();
console.log(shoesPrice);