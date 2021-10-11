// Person.ts
class Person{

    public lName: string;
    constructor ( name : string){
        this.lName = name;
    }
}   
 


const fares = new Person('Fares');
console.log(fares.lName);    
   