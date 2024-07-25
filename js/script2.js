// console.log("hello world")


// var a=10;
// console.log("a",a)
// {
//     let b=20;
//     console.log("b",b)
//     b=25;-
//     console.log("b",b)
// }

let str="hello world"
console.log("str :",str)

let strlenght=str.length;
console.log("strlenght:",strlenght)
console.log("uppercase:",str.toUpperCase())
console.log("lowercase:",str.toLocaleLowerCase())
console.log("chaining methods:",str.toUpperCase().toLocaleLowerCase().toUpperCase())
console.log("startswith:",str.startsWith("x"))
console.log("startswith:",str.startsWith("h"))
console.log("endswith:",str.endsWith("p"))

let trimvalue=str.trimStart();
console.log("trimvalue:",trimvalue);
console.log("trimvalue string lenght:",trimvalue. length)

let trimvalueleft=str.trimStart();
console.log("trimvalueleft:",trimvalueleft);
console.log("trimvalue string lenght:",trimvalueleft)


//array

let arr=[10,20,30,40,50];
console.log("arr:",arr);
console.log("typeofarr:",typeof arr);
console.log("lenghtof arr:",arr.length);
console.log("arr[3]:",arr[3])
arr[0]=15;
console.log("arr:",arr);
arr.push("last")
console.log("arr:",arr);
arr.unshift("first")
console.log("arr:",arr);
arr.pop();
console.log("arr:",arr);
arr.shift();
console.log("arr:",arr);
// arr.splice(1,3);
// console.log("arr:",arr)
arr.splice(3,0,100);
console.log("arr:",arr);


//object

let obj= {
    firstname:'asasas',
    lastname:'kkk',
    address:{
        street:"street",
        area:"gggggg",
    },
    canadian:true,
    hobbies : ['reading','writing'],
}

console.log("obj:",obj);
console.log("firstname:",obj.firstname);
console.log("address:",obj.address.area)

obj.mark=10;

console.log("mark:",obj.mark);

 let json_obj=JSON.stringify(obj);
 console.log("nnnnn:",obj)
 console.log("type:",typeof json_obj);

let parsed_json_obj=JSON.parse(json_obj);
console.log("asdasjdh:", parsed_json_obj)
console.log("type:",typeof parsed_json_obj);


//if,else,else if

{
    let num1=20;
    let num2=10;

    if(num1 > num2){
        console.log("num1 is greater:",num1)
    }
    else if (num1==num2){
console.log("both are equal:",num1)
    }
    else{
        console.log(`$num2 is greater:`,num2)
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
    for(let i = 0; i < 10; i++){
        console.log("hai")
    }

    let i=0
    while(i < 10){
        console.log("hello");
        i++;
    }


}



//functions

console.log("\n\n")

// 1.named function

function funct1(){
    console.log("this is from named function");
}
funct1()

console.log("\n\n")

// 2.anonymous function

const funct2=function(){
    console.log("this is from anonymous function");
}
funct2();

console.log("\n\n")

// 3.arrow function

const funct3= () =>{
    console.log("this is from arrow function");
}
funct3();

console.log("\n\n")

// 4.function with parameters

function funct4(a,b){
console.log("a:",a);
console.log("b:",b);
}
funct4(100,200)

console.log("\n\n")

// 5.callback function

function funct5(abc,num){
    abc()
    console.log("num:",num)
}
funct5(function() {
    console.log("this is from callback function")}
    ,10)

console.log("\n\n")

// 5.function with return

function funct6(){
    console.log("this is from return value function")
    return 100;
}
const value6=funct6()
console.log("value6:",value6)

console.log("\n\n")


console.log("\n\n")

// 5.call by value

{
    function update(a){
        a=20;
        console.log("a inside update function:",a)
    }
    let a =10;
    console.log("a before update function:",a);

    update(a)
    console.log("a after update function:",a)



//call by reference

    function updatearr(arr){
        arr[0]=100;
        console.log("arr inside update function:",arr)
    }

    let arr=[1,2,3,4,5,];
    console.log("arr before update:",arr)

    updatearr(arr)
        console.log("arr after update function:",arr)
    
}

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

{
    let btn1=document.getElementById('btn');
    console.log("this is btn");

    btn1.addEventListener('click' ,function(){
        console.log("buttonclicked...");
    })
    btn1.addEventListener('mouseover' ,function(){
        console.log("mouseover is fired...");
    })
    btn1.addEventListener('mouseout' , function () {
        console.log('mouseout is fired...');
    })
    btn1.addEventListener('mouseup',function(){
        console.log('mouseup');
    })
    btn1.addEventListener("mousedown",function(){
        console.log("mousedown");
    })
    btn1.addEventListener("mousemove",function(){
        console.log("mousemove");
    })

    let inp=document.getElementById('input');
    console.log("input type");
    
    inp.addEventListener("keydown",function(){
        console.log("keydown performed");
    })
    inp.addEventListener("keyup",function(){
        console.log("keyup performed");
    })
    inp.addEventListener("keypress",function(){
        console.log("keypressed performed");
    })
}