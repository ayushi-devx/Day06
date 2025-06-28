// function greet(name="guest"){
//     console.log(`hello,${name}!`);

// }
// // greet();
// greet("ayushi");

// function multiply(a,b=2){
//     return a*b;
// }
// console.log(multiply(5));
// console.log(multiply(5,3));


// function ques(a=5, b=a*2){
//     console.log(a,b);


// }
// ques();

// function logNames(first,...others){
//     console.log(first,others);


// }
// logNames("Leader","Members","Members","Members","Members");

// function countArgs(...args){
//     return args.length;

// }
//  console.log(countArgs(1,2,3,4,5,6,7,8,9,0));

// var vals=[1,2];
// var vals2=[3,4,...vals];
// console.log(vals2);


// var obj1={a:1};
// var obj2={
//     b:2,
//     ...obj1
// };
// console.log(obj2);
// obj3=obj2.a="hii";

// console.log(obj2);



// Use spread to pass an array [3, 7, 2] to a function Math.max() and get the largest number.
// var num=[3,7,2];
// var result=Math.max(...num);
// console.log(result);

// class

// class Person{
//     name;
//     age;
//     // constructor(name,age){
//     //     console.log(name, age);
//     // }
//     introduce(name, age){
//         console.log(`Hii, I am ${name}, and I am ${age} year old.`)
//     }
// }
// var per=new Person("ayushi",22);
// per.introduce("neha",32);


    // ques
    // Q2. Create a class Rectangle that accepts length and width. Add methods to calculate area and perimeter.
    
    // class Rectangle{
    //    length;
    //     width;
    //     area(length){
    //         var ar=length*length;
    //         console.log("area is: ",ar);


    //     }
    //     perimeter(length,width){
    //         var para=2*(length+width);
    //         console.log("parameter is: ",para);


    //     }

    // }
    // var rect=new Rectangle();
    // rect.area(5);
    // rect.perimeter(5,2);
    

    // ques->Q3. Create a class Student that extends Person. Add a new property rollNo and override the introduce() method
    //  to include roll number. Use super keyword.
    
    

    // inheritance
    // ques1=>Create a base class Animal with a method speak() and a derived class Dog that calls it. Instantiate Dog and call speak().
    
    // class Animal{
    //     speak(){
    //         console.log("hello!!");

    //     }
    // }
    // class Dog extends Animal{

    // }
    // var dog=new Dog();
    // dog.speak();
    

    // ques2=>Extend a Person class to Student. Give Student an additional property rollNo. 
    // Demonstrate inheritance by creating a Student object.
    

    // class Person{
    //     constructor(rollNo){
    //         this.rollNo=rollNo;
    //     }
        


    // }
    // class Student extends Person{
    //     constructor(rollNo){
    //         super(rollNo);
    //         console.log("roll no. is: ",rollNo);
    //     }

       
    // }
    // var st=new Student(21);
    
    


    // ques3=>How does super() work in a child class constructor? Try it with super(name) in Employee extends Person.
    // class Person{
    //     constructor(name){
    //         this.name=name;
    //     }


    // }
    // class Employee extends Person{
    //     constructor(name){
    //         super(name);
    //         console.log("name is: ",name);
    //     }

    // }
    // var emp=new Employee("ayushi");
    


    //  Method Overriding
    // ques1=>Override the speak() method in class Cat extends Animal such that it logs "Meow" instead of the parent behavior.
    
    // class Animal{
    //     speak(){
    //         console.log("speaking");
    //     }

    // }
    // class Cat extends Animal{
    //     speak(){
    //         console.log("Meow");
    //     }
    // }
    // var cat=new Cat();
    // cat.speak();
    // ques2=>If the parent class has getInfo(), how can the child override it but also call the parent version inside? (Use super.getInfo().)

   // ques3=>How do you create a constructor in a child class Bike that extends Vehicle? Show how super() is used.  



    // constructor
    // ques1=>Write a class Car with a constructor that accepts make and model. Create an object and log the properties.
    // class Car{
    //     constructor(make,model){
    //         this.make=make;
    //         this.model=model;
    //     }
    //     display(make,model){
    //         console.log(`${this.make} and ${this.model}`);
    //     }
    // }
    // var car=new Car("happy",21);
    // car.display();
    

    // ques2=>How do you create a constructor in a child class Bike that extends Vehicle? Show how super() is used.
    // class Vehicle{
    //     constructor(arg){
    //         this.arg=arg;

    //     }
    // }
    // class Bike extends Vehicle{
    //     constructor(arg){
    //         super(arg);
    //         console.log("value of super: ",arg);

    //     }
        
    // }
    // var bike=new Bike("splender");
    



    // destructuring 
    // ques1=>Q1. Destructure the first two elements from this array:
    // var colors=["red","green","blue"];
    //  Extract "red" and "green" into variables
    // var[a,b]=colors;
    // console.log(a,b);

    // ques2=>Q2. Swap two variables using array destructuring:
    // var a=10,b=20;
    // var arr=[a,b];
    // var[x,y]=arr;
    // console.log(y,x);


    // ques3=>Use array destructuring with a function that returns an array:
    // function des(){
    //     var arr=[1,2,3,4];
    //     var[x,y,z,w]=arr;
    //     return [x,y,z,w];
        
    // }
    // console.log(des());
    


    // ques4
    // var user={
    //     name:"ayushi",
    //     age:22,
    //     city:"sre"
    // }
    // var{name,age,city}=user;
    // console.log(name,age,city);
    



// ques5=>
// const settings = {
//   theme: "dark",
//   fontSize: 14
// };

// usertheme=settings.theme;
// settings["language"]="en";
// console.log(usertheme);
// console.log(settings);

// Destructure theme as userTheme, and set default for language = "en"




// function s(...numbers){
//   var sum=0;
//   for(i=0;i<numbers.length;i++){
//     sum=sum+numbers[i];
//   }
//   return sum;
// }
//  console.log(s(1,2,3,4,5));


    
    


  