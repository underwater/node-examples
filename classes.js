function getMyType (o) {
    if ( o instanceof Dog) return 'dog';
    if ( o instanceof Animal) return 'animal';
}

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`i am a ${this.name} and I am a ${getMyType(this)}`);
    }
 }

 
class Dog extends Animal{
    speak(){
        console.log(` inherited version - i am a ${this.name} and I am a ${getMyType(this)}`);
    }
}

let dog = new Dog('doggy');
  dog.speak();



  let animal = new Animal('animal');
  animal.speak();


//  console.log(`Hello, I am a`);

//  class Person {
//      constructor(name){
//          this.name = name;
//      }
//  }

//  let p = new Person('Fares');
//  console.log(`Hello, my  name is : ${p.name}`);