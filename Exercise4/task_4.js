function Person(salary) {
    _salary = salary;

    this.getSecretSalaryInfo = function getSecretSalaryInfo() {
        return _salary;
    }
};

let person = new Person(1000);
console.log(person.getSecretSalaryInfo());