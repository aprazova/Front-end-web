class PaymentMethod {
    constructor() {};

    getAmount() {
        return "Your amoung in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    // amount;
    #amount;

    constructor() {
        // let amountTwo;
        super();
        // let amount;
    }

    addToAmount(setAmount) {
        this.amount = setAmount;
    }

    reduceFromAmount() {
        console.log(this.amount);
    }

    getAmount() {
        // let taxt = super.getAmount();
        console.log(super.getAmount() + this.amount);
    }

}

// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }

// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop(); // call parent stop
//         this.hide(); // and then hide
//     }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit stands still. White rabbit hides!