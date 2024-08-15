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
                        <td><button onclick ="handleclick(${datas[i].id})">view</button> </td>
                        </tr>
                     `
                }

                console.log(rows)
                Datacontainer.innerHTML = rows;

            }
        }
    }
    function handleclick(id){
        console.log("reached here ....");
        console.log ("id : ",id)
        window.location.href = "dashboard.html"
    }

    function loadUserData(){
        console.log ("")
    }
}

{
    const str1 = "the cat is running"
    const str2 = "rat eat cheese"
    const str3 = `dog eats
    meat and 
    it barkes`


    const regexp1 = /a/;
    const result1 = regexp1.test (str1); //check if str 1 contains letter a
    console.log ("result1 : ",result1); //true

    const regexp2 = /A/i;
    const result2 = regexp2.test(str1); // check if str 1 contains letter a and performs case in-sensitive search
    console.log("result2 : ",result2); // true 

    const regexp3 = /ab/
    const result3 = regexp3.test(str1); // check if str 1 contains ab
    console.log("result3 : ",result3); //false

    const regexp4 = /[crb]a/i
    const result4 = regexp4.test(str1); // check str 1 contains c,r,b before a  
    console.log("result4 : ",result4); // true

    const regexp5 = /[a-z]a/
    const result5 = regexp5.test(str1); // check if a-z letters before str 1 contains a 
    console.log("result5 : ",result5); //true 

    const regexp6 = /[a-z0-9]a/
    const result6 = regexp6.test(str1); // check if a-z and 0-9 letters before str 1 contains a 
    console.log("result6 : ",result6); //true

    const regexp7 = /^rat/i ; 
    const result7 = regexp7.test(str2); // check if str2 starts with 'rat'
    console.log("result7 : ",result7) ; //true

    const regexp8 = /cheese$/i ; 
    const result8 = regexp8.test(str2); // check if str2 ends with 'cheese'
    console.log("result8 : ",result8) ; //true

    const regexp9 = /^dog/im ; // /m-flag represents multiline matching
    const result9 = regexp9.test(str3); // check if str3 starts with 'dog'
    console.log("result9 : ",result9) ; //true

    const regexp10 = /barkes$/im ; // /m-flag represents multiline matching
    const result10 = regexp10.test(str3); // check if str3 ends with 'barkes'
    console.log("result10 : ",result10) ; //true

    const regexp11 = /barkes?/im ; // word or character before '?' is optional for  matching
    const result11 = regexp11.test(str3); // it matches both bark and barkes 's' is optional
    console.log("result11 : ",result11) ; //true

    const regexp12 = /bark(es)?/im ; // word or character before '?' is optional for  matching
    const result12 = regexp12.test(str3); // it matches both bark and barkes 'es' is optional
    console.log("result12 : ",result12) ; //true

    const regexp13 = /barkes*$/i ; // the letter before '*' can occur multiple times in a string
    const result13 = regexp13.test(str3); // it matches both bark and barkes , barkess , barkessss...
    console.log("result13 : ",result13) ; //true

    const regexp14 = /barkes+$/i ; // the letter before '+' can occur multiple times in a string, but atleat 1 occurence is needed
    const result14 = regexp14.test(str3); // it matches barkes ,barkess ....
    console.log("result14 : ",result14) ; //true

    const regexp15 = /barke.$/i ; // any charecter can occur after '.' represent any type of character
    const result15 = regexp15.test(str3); // it matches barkes ,barkess ,barkesd,barkejdhfjd but not match barke
    console.log("result15 : ",result15) ; //true

    const regexp16 = /barke.*$/i ; 
    const result16 = regexp16.test(str3); // it matches barkes ,barkess ,barkesss since due to '*' munltiple charecters are matched.  
    console.log("result16 : ",result16) ; //true


     const str4 = "Hello"


     const regexp17 = /[kjm]/i
     const result17 =regexp17.test(str4); // if there is k,j,m it will be true
     console.log("result17 : ",result17); // false

     const regexp18 = /[^kjm]/i
     const result18 =regexp18.test(str4); // if there is no k,j,m it will be true
     console.log("result18 : ",result18); // true

     const regexp19 = /[H+]/i
     const result19 =regexp19.test(str4); // atleast one 'H' it will be true
     console.log("result19 : ",result19); // true

     const regexp20 = /o$/i
     const result20 =regexp20.test(str4); // string ends with o
     console.log("result20 : ",result20); // true

     const regexp21 = /o?$/i
     const result21 =regexp21.test(str4); // 'o' in string ending is optional
     console.log("result21 : ",result21); // true

     const regexp22 = /o+$/i
     const result22 =regexp22.test(str4); // atleast one  'o' is needed in the string  ending
     console.log("result22 : ",result22); // true


    //{} indicates the number of characters, a{2} means aa ,ie 2a is required

    // const str4 = "Hello"

     const regexp23 = /L{2}o$/i // 'o' should be exactly after 2 i's
     const result23 = regexp23.test(str4);
     console.log("result23 : ",result23); //true

     const regexp24 = /L{2,4}o$/i // 'o' should be exactly after between 2-4 L's
     const result24 = regexp24.test(str4);
     console.log("result24 : ",result24); //true

     const regexp25 = /HeL{2,4}o$/i // 'o' should be exactly after 'He' and between 2-4 L's and 'o' is required
     const result25 = regexp25.test(str4);
     console.log("result25 : ",result25); //true

     const regexp26 = /HeL{2,}o$/i // 'o' should be exactly after 'He' and between 2 or more L's  required
     const result26 = regexp26.test(str4);
     console.log("result26 : ",result26); //true

    // indicates escape characters ,used for matching any characters which has special meaning

     const regexp27 = /\d/i // if there is any digit  it will be true, else it will bw false
     const result27 = regexp27.test(str4);
     console.log("result27 : ",result27); //false

     const regexp28 = /D/i // if there is any non-digits it will be true, else it will be false
     const result28 = regexp28.test(str4);
     console.log("result28 : ",result28); //false

     const regexp29 = /./i // if ther is a '.' or anything it will match
     const result29 = regexp29.test(str4);
     console.log("result29 : ",result29); //true

     const regexp30 = /\./i // if there any '.' in the string it will match, else it will false
     const result30 = regexp30.test(str4);
     console.log("result30 : ",result30); // false

     // '\'  used to escape special characters


     // Date validation

     const regexpdate1 = /^\d{1,2}-\d{1,2}-\d{4}$/i; // string should start with 1 or 2 digit and after it '-' symbol then again 1 or 2 digits, after '-', ending digit should be 4
     
  
     let datebox = document.getElementById("btnn").onclick = function (){
         let input = document.getElementById('datebox').value
         console.log(input)
     
         let resultt = regexpdate1.test(input);
         console.log(resultt)
         if(resultt === true){
             let x = document.getElementById('output')
             x.innerHTML = "set"
             console.log(x)
         } else{
             let x = document.getElementById('output')
             x.innerHTML= "Enter valid string"
             x.style.color = "red"
         }
     
     }


     const regexpdate2 = /^([012]?\d|3[01])-([0]\d)/

}

