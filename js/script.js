// console.log("hello world")


// var a=10;
// console.log("a",a)
// {
//     let b=20;
//     console.log("b",b)
//     b=25;
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



let arr=[10,20,30,40,50];
console.log("arr:",arr);
console.log("typeofarr:",typeof arr);
console.log("lenghtof arr:",arr.length);
console.log("arr[3]:",arr[3])
arr[0]=15;
console.log("arr:",arr)
arr.push("last")
console.log("arr:",arr)
arr.unshift("first")
console.log("arr:",arr)
arr.pop();
console.log("arr:",arr)
arr.shift();
console.log("arr:",arr)
// arr.splice(1,3);
// console.log("arr:",arr)
arr.splice(3,0,100);
console.log("arr:",arr)

