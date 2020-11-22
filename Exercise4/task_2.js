class Person {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(`Здравей ${this.name} от планетата ${this.planet}!`);
    }
}

Person.prototype.planet = "Земя";

let personOne = new Person("Чък Норис");
let personTwo = new Person("Джон");
let personThree = new Person("Марк");

console.log(personOne.print());
console.log(personTwo.print());
console.log(personThree.print());