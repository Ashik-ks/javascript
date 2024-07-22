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


{
    let str =" ";

    for(i=0;i<10;i++){
    for(j=0;j<i;j++){
    str =str + "*";
   
    }
 str =str + ("\n");
}
    console.log(str)
}

console.log("\n\n\n")

//task-1
{
    let str ="";

    for(i=0;i<10;i++){
    for(j=10;j>i;j--){
    str =str + "*";
   
    }
 str =str + ("\n");
}
    console.log(str)
}

console.log("\n\n\n")

//task-2

{
    let str ="";

    for(i=1;i<10;i++){
    for(j=1;j<=i;j++){
    str =str + j;
    }
 str =str + ("\n");
}
    console.log(str)
}

 console.log("\n\n\n")

//task-3

{
    let i=1;
    for(i=1; i<=10;i++){
        console.log(i)
    }
}

//task-4

{
    let i=1
    let sum=0
    for(i=0;i<=10;i++){
        sum=sum+i;
    }
    console.log("sum:",sum)
}

console.log("\n\n\n")

//task-5

{
let i=1
for (i=1;i<=20;i++){
if(i%2==0){
    console.log("even:",i)
}
}

}

console.log("\n\n\n")

//task-5

{
    let num=2;
    let count=0;
    let i=2;
    for(i=2;i<num;i++){
        if(num%i==0){
            count=count+1
        }
    }
    if(count>=1){
        console.log("Given number is not prime")
    }else{
        console.log("Given number is prime")
    }

}

console.log("\n\n\n\n\n\n\n\n\n")

//task-6

{



    let str="aeiou";
    let arr1=[str[1],str[2],str[3],str[4],str[5]];
    let arr2=["a","e","i","o","u"];
    let count=0;
    result=0;
    if(arr1==arr2){
        count=count+1
        console.log("n",count)
    }else{count==0}
    console.log("m",count)
}





// let arr=[10,20,30,40,50];
// console.log("arr:",arr);
// console.log("typeofarr:",typeof arr);
// console.log("lenghtof arr:",arr.length);
// console.log("arr[3]:",arr[3])
// arr[0]=15;
// console.log("arr:",arr);
// arr.push("last")
// console.log("arr:",arr);
// arr.unshift("first")