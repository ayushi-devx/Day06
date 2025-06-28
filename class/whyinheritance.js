class Animal{
    eat(){
        console.log("eating");
    }
    move(){
        console.log("moving");
    }
}
class Fish extends Animal{
    swim(){
        console.log("swimming");
    }
}
class Bird extends Animal{
    fly(){
        console.log("flying");
    }
}
var fish=new Fish();
fish.eat();
fish.move();
fish.swim();
var bird=new Bird();
bird.eat();
bird.move();
bird.fly();