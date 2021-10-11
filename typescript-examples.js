var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal(name) {
        if (typeof name === "undefined") { name = 'no name'; }
        this.name = name;
    }
    Animal.prototype.DoSomething = function () {
        return "can't do much";
    };
    return Animal;
})();

var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.DoSomething = function () {
        return "bark";
    };
    return Dog;
})(Animal);
// let animal = new Animal();
// let dog = new Dog('buzz');
// // console.log(`a1:${a1.name} a2:${a2.name}`)
// console.log(`animal doing something:  ${animal.DoSomething()}`);
// console.log(`dog doing something: ${dog.DoSomething()}`);
