class Animal {
    public name: string;
    constructor(name: string = 'no name') {
        this.name = name;
    }

    public DoSomething(): string {
        return "can't do much";
    }
}

class Dog extends Animal {

    public DoSomething(): string {
        return "bark";
    }
}

let animal = new Animal();
let dog = new Dog('buzz');

console.log(`animal doing something:  ${animal.DoSomething()}`);
console.log(`dog doing something: ${dog.DoSomething()}`);


