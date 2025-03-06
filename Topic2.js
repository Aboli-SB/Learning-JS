// 2. JavaScript Object-Oriented Programming (OOPs)
// Understanding Objects & Prototypes
const animal = {
    speak: function () {
        console.log(`${this.name} makes a noise`);
    }
};

const giv={
    name:"Dilip"
}

console.log(giv);
giv.freeze()

const dog = Object.create(animal); 
dog.name = "Buddy";
dog.speak(); 

// Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log(`Hello, I am ${this.name}`);
    };
}

const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet(); 
bob.greet();   

// ES6 Classes and Inheritance
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const aboli = new Human("Aboli", 25);
aboli.greet(); 
// Inherits 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); 
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

const doggo = new Dog("Buddy", "Labrador");
doggo.speak(); 

// Static Methods & Properties
class Car {
    static numberOfWheels = 4; 

    static showWheels() { 
        console.log(`A car has ${this.numberOfWheels} wheels.`);
    }
}

console.log(Car.numberOfWheels); 
Car.showWheels();

// Method Overriding & Encapsulation
class Animal1 {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog1 extends Animal1 {
    speak() {
        super.speak(); 
        console.log("Dog barks");
    }
}

const myDog = new Dog1();
myDog.speak();  