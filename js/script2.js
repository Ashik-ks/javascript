// console.log("hello world")


// var a=10;
// console.log("a",a)
// {
//     let b=20;
//     console.log("b",b)
//     b=25;-
//     console.log("b",b)
// }

let str = "hello world"
console.log("str :", str)

let strlenght = str.length;
console.log("strlenght:", strlenght)
console.log("uppercase:", str.toUpperCase())
console.log("lowercase:", str.toLocaleLowerCase())
console.log("chaining methods:", str.toUpperCase().toLocaleLowerCase().toUpperCase())
console.log("startswith:", str.startsWith("x"))
console.log("startswith:", str.startsWith("h"))
console.log("endswith:", str.endsWith("p"))

let trimvalue = str.trimStart();
console.log("trimvalue:", trimvalue);
console.log("trimvalue string lenght:", trimvalue.length)

let trimvalueleft = str.trimStart();
console.log("trimvalueleft:", trimvalueleft);
console.log("trimvalue string lenght:", trimvalueleft)


//array

let arr = [10, 20, 30, 40, 50];
console.log("arr:", arr);
console.log("typeofarr:", typeof arr);
console.log("lenghtof arr:", arr.length);
console.log("arr[3]:", arr[3])
arr[0] = 15;
console.log("arr:", arr);
arr.push("last")
console.log("arr:", arr);
arr.unshift("first")
console.log("arr:", arr);
arr.pop();
console.log("arr:", arr);
arr.shift();
console.log("arr:", arr);
// arr.splice(1,3);
// console.log("arr:",arr)
arr.splice(3, 0, 100);
console.log("arr:", arr);


//object

let obj = {
    firstname: 'asasas',
    lastname: 'kkk',
    address: {
        street: "street",
        area: "gggggg",
    },
    canadian: true,
    hobbies: ['reading', 'writing'],
}

console.log("obj:", obj);
console.log("firstname:", obj.firstname);
console.log("address:", obj.address.area)

obj.mark = 10;

console.log("mark:", obj.mark);

let json_obj = JSON.stringify(obj);
console.log("nnnnn:", obj)
console.log("type:", typeof json_obj);

let parsed_json_obj = JSON.parse(json_obj);
console.log("asdasjdh:", parsed_json_obj)
console.log("type:", typeof parsed_json_obj);


//if,else,else if

{
    let num1 = 20;
    let num2 = 10;

    if (num1 > num2) {
        console.log("num1 is greater:", num1)
    }
    else if (num1 == num2) {
        console.log("both are equal:", num1)
    }
    else {
        console.log(`$num2 is greater:`, num2)
    }
}

//switch

// let day=2;
// switch(day){
//     case 1:console.log("day:","sunday");
//     break;
//     case 2:console.log("day:","monday");
//     break;
//     case 3:console.log("day:","tuesday");
//     break;
//     case 4:console.log("day:","wednesday");
//     break;
// }


{
    for (let i = 0; i < 10; i++) {
        console.log("hai")
    }

    let i = 0
    while (i < 10) {
        console.log("hello");
        i++;
    }


}



//functions

console.log("\n\n")

// 1.named function

function funct1() {
    console.log("this is from named function");
}
funct1()

console.log("\n\n")

// 2.anonymous function

const funct2 = function () {
    console.log("this is from anonymous function");
}
funct2();

console.log("\n\n")

// 3.arrow function

const funct3 = () => {
    console.log("this is from arrow function");
}
funct3();

console.log("\n\n")

// 4.function with parameters

function funct4(a, b) {
    console.log("a:", a);
    console.log("b:", b);
}
funct4(100, 200)

console.log("\n\n")

// 5.callback function

function funct5(abc, num) {
    abc()
    console.log("num:", num)
}
funct5(function () {
    console.log("this is from callback function")
}
    , 10)

console.log("\n\n")

// 5.function with return

function funct6() {
    console.log("this is from return value function")
    return 100;
}
const value6 = funct6()
console.log("value6:", value6)

console.log("\n\n")


console.log("\n\n")

// call by value

{
    function update(a) {
        a = 20;
        console.log("a inside update function:", a)
    }
    let a = 10;
    console.log("a before update function:", a);

    update(a)
    console.log("a after update function:", a)



    //call by reference

    function updatearr(arr) {
        arr[0] = 100;
        console.log("arr inside update function:", arr)
    }

    let arr = [1, 2, 3, 4, 5,];
    console.log("arr before update:", arr)

    updatearr(arr)
    console.log("arr after update function:", arr)

}
//closure
{
    function outerfunction() {
        let outervariable = 'outer function variable';
        {
            function innerfunction() {
                function innerfunction1() {
                    console.log(":", outervariable)
                } return innerfunction1
            } return innerfunction
        }
    }
} let result = outerfunction();
let result1 = result();
result1()

console.log("\n\n\n\n")


//event handling

// {
//     let btn1=document.getElementById('btn');
//     console.log("this is btn");

//     btn1.addEventListener('click' ,function(){
//         console.log("buttonclicked...");
//     })
//     btn1.addEventListener('mouseover' ,function(){
//         console.log("mouseover is fired...");
//     })
//     btn1.addEventListener('mouseout' , function () {
//         console.log('mouseout is fired...');
//     })
//     btn1.addEventListener('mouseup',function(){
//         console.log('mouseup');
//     })
//     btn1.addEventListener("mousedown",function(){
//         console.log("mousedown");
//     })
//     btn1.addEventListener("mousemove",function(){
//         console.log("mousemove");
//     })

//     let inp=document.getElementById('input');
//     console.log("input type");

//     inp.addEventListener("keydown",function(){
//         console.log("keydown performed");
//     })
//     inp.addEventListener("keyup",function(){
//         console.log("keyup performed");
//     })
//     inp.addEventListener("keypress",function(){
//         console.log("keypressed performed");
//     })
// }

console.log("\n\n\n\n")

//spread operator

{
    let arr = [1, 2, 3, 4, 5];
    console.log("arr : ", arr);

    let arr1 = [...arr, 6];
    console.log("arr1 : ", arr1);

    let obj = {
        name: "john",
        email: "john@gmail.com"

    }
    console.log("obj : ", obj);

    let obj1 = { ...obj, address: "street", }
    console.log("obj1:", obj1)


    console.log("\n\n\n\n")

    //Destructuring



    let [a, b, c, d, e] = arr;
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
    console.log("d:", d);
    console.log("e:", e);

    let { name, email, address } = obj1;
    console.log("adress:", address);
    console.log("email:", email);
    console.log("name:", name);

    {
        //nested destructuring


        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]
        console.log("matrix:", matrix)

        let [row1, row2, [g, h, i]] = matrix;
        console.log("row1 :", row1);
        console.log("row2 :", row2);
        console.log("row3 :", h);

        let [a, b, c] = row1;
        console.log("a : ", a);
        console.log("b : ", b);
        console.log("c : ", c);


        let obj = {
            name: "jane",
            email: "jane@gmail.com",
            address: {
                street: "street1",
                houseno: "eight",
                pincode: "680026"
            }
        }
        let { name, email, address: { street, hoouseno, pincode } } = obj;
        console.log("pincode : ", pincode)
    }

}
console.log("\n\n\n\n")


{
    //array methods

    //foreach
    let arr = [10, 20, 30, 40, 50];

    arr.forEach(items => {
        console.log("items:", items)
    });

    //find
    let result = arr.find(items => {
        return items > 30

    })
    console.log("result: ", result);

    //filter
    let result1 = arr.filter(items => {
        return items > 30

    })
    console.log("result1: ", result1);

    //map
    let result2 = arr.map(items => {
        return items

    })
    console.log("result2: ", result2);

    //reduce
    let result3 = arr.reduce((total, items) => {
        return total + items;
    }, 0);
    console.log("total : ", result3)

}

console.log("\n\n\n\n\n\n")


//this keyword

{
    let obj = {
        name: "john",
        email: "john@gmail.com",
        age: 20,
        printage: function () {
            console.log("function execution started");
            console.log("this : ", this);
            console.log("age : ", this.age);
            return "function execution completed";
        }
    }
    console.log("name:", obj.name);
    console.log("name:", obj.email);
    console.log("name:", obj.age);
    console.log("obj.printage():", obj.printage());



    function greet(message1, message2) {
        console.log("message1 : ", message1);
        console.log("message2 : ", message2);
        console.log("this : ", this)
        console.log("name : ", this.name)

    }
    greet("hello", "hai");


    greet.call(obj, "hello", "hai");


    greet.apply(obj, ["hello", "hai"]);


    let output = greet.bind(obj, "hello", "hai");
    //console.log("output : ",output)
    output();

}
console.log("\n\n\n\n")
{
    //constructors


    function person(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
        this.greeting = function () {
            console.log(`hai my name is ${this.name},my age is ${this.age}`)
        }
    }
    let person1 = new person("john", 21, 96)
    console.log("person1 : ", person1);
    person1.greeting()

    let person2 = new person("jane", 20, 90)
    console.log("person2 : ", person2);
    person2.greeting()

    //updating individual objects

    person1.adrress = "address";
    console.log("person1:", person1);

    person.prototype.getmark = function () {       //added mark using getmark() in obj.
        console.log(`${this.name},your mark is ${this.mark}`)
    }
    person2.getmark();
    person1.getmark();
}
console.log("\n\n\n\n")

//constructors in classes.

{
    class person {
        name;
        age;
        mark;

        constructor(name, age, mark, job) {
            this.name = name;
            this.age = age;
            this.mark = mark;
            this.job = job;
        }

        greeting = function () {
            console.log(`my name is ${this.name},age is ${this.age},and mark is${this.mark}`)
        }
    }



    let person1 = new person("henry", 22, 100, "developer");
    console.log("person1 : ", person1);

    person1.greeting()



    person.prototype.getjob = function () {
        console.log(`my name is ${this.name},age is ${this.age},and mark is${this.mark},and job is ${this.job}`)
    }
    person1.getjob()
}


console.log("\n\n\n")

{
    class animal {
        name;

        constructor(name) {
            this.name = name
        }

        display() {
            console.log(`${this.name} is walking`)
        }
    }
    let animal1 = new animal("tomy")
    animal1.display()

    //Inheritance
    class dog extends animal {
        colour;

        constructor(name, colour) {
            super(name);// call parent constructor
            this.colour = colour;
        }
        //maethod overriding
        display = function () {
            console.log(`${this.name} is running,and ${this.colour} is its colour`)
        }
    }
    let dog1 = new dog("bella", "white")
    console.log(dog1)
    dog1.display()


}

console.log("\n\n\n")

{
    class car {
        name;
        colour;

        constructor(name) {
            this.name = name;
        }
        info() {
            console.log(`${this.name} is moving,${this.color}`)
        }

        // setColour(colour){
        //     this.colour=colour

        // }
        // getColour(colour){
        //     this.colour = colour
        //     console.log(`${this.name} is moving,${this.colour}`)
        // }

        set Color(color) {
            this.color = color
        }

        get Color() {
            return this.color
        }

    }
    let car1 = new car("BMW")
    console.log(car1)
    car1.info()
    //car1.getColour("white")
    car1.color = "blue"
    console.log(car1.color)
    car1.info()
}

console.log("\n\n\n\n\n");

{
    class Button {
        button;

        constructor(content) {
            this.button = document.createElement('button');
            this.button.innerHTML = content;
            document.body.appendChild(this.button);

        }

        set Width(width) {
            this.button.style.width = width + "px";
        }
        get Width() {
            return this.button.style.width;
        }
        set Height(height) {
            this.button.style.height = height + "px";
        }
        get Height() {
            return this.button.style.height;
        }

        onClick(fn) {
            this.button.onclick = fn;

        }
    }
    let button1 = new Button("click here");
    console.log("button1  : ", button1);
    button1.Width = "100";
    button1.Height = "50";
    button1.onClick(function () {
        console.log("button clicked")
    });

    class blackbutton extends Button{

        constructor (content) {
            super(content);
            this.button.style.background = "black";
            this.button.style.color = "white";
            this.button.style.padding = 10 + "px";
            this.button.style.margin = 10 + "px"
        }

        onclick (fn){
            this.button.onclick() =function (){
                console.log (this.button)
                fn()
            }.bind(this)
            
        }
    }

    let blackbutton1 = new blackbutton("blackbutton");
    console.log("blackbutton  : ",blackbutton1);
    blackbutton1.onClick(function(){
        console.log("blackbutton clicked")
    })
}


console.log ("\n\n\n\n")

{
    //console.log("first line ...")

    // setters, event Listeners, fetch api's they are asychronous operations they will execute after the synchronous operations.the asynchronous operations are stored in callback queue and sends to call stack using the event loop and it goes to javascript engine for the execution.
    // setTimeout(()=>{
    //     console.log ("second line...")
    // })

    //console.log("third line...")

    //Asynchronous
    // call stack
    // event loop
    // callback queue
    // macrotask queue

}



{
    let xhr = new XMLHttpRequest();
    console.log("xhr : ", xhr);

    xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

    document.getElementById('btn1').onclick = function () {
        xhr.send()
    }

    xhr.onreadystatechange = function () {
        console.log("readystate : ", xhr.readyState);

        if (xhr.readyState === 4) {
            console.log(xhr.status);
            if (xhr.status === 200) {

                let response = xhr.response;
                console.log("response : ", response)
                console.log("type of response : ", typeof (response))


                let datas = JSON.parse(response)
                console.log("datas : ", datas);

                let Datacontainer = document.getElementById('datacontainer');
                console.log("Datacontainer : ", Datacontainer);

                let rows = '';
                for (let i = 0; i < datas.length; i++) {
                    rows = rows + `
                        <tr>
                        <td>${datas[i].name}</td>
                        <td>${datas[i].username}</td>
                        <td>${datas[i].email}</td>
                        <td>${datas[i].website}</td>
                    `
                }

                console.log(rows)
                Datacontainer.innerHTML = rows;

            }
        }
    }
}

