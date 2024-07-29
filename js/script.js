//to print star pattern

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

//to print reverse star pattern
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

//to print number star pattern

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

//to print first 10 numbers

{
    let i=1;
    for(i=1; i<=10;i++){
        console.log(i)
    }
}

//to print sum of two numbers

{
    let i=1
    let sum=0
    for(i=0;i<=10;i++){
        sum=sum+i;
    }
    console.log("sum of first 10 numbers:",sum)
}

console.log("\n\n\n")

//to print even numbers between 20

{
let i=1
for (i=1;i<=20;i++){
if(i%2==0){
    console.log("number is even:",i)
}
}

}

console.log("\n\n\n")

//to print given number is prime or not

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

console.log("\n\n\n")

//to find number of vowels in a given string

{

    let str = 'Ashik'
    let arr1 = str.split('');

    let arr2 = ['a', 'e', 'o', 'u', 'i', 'A', 'E', 'I', 'O', 'U',];
    count = 0;

    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr1[i] == arr2[j]) {
                count = count + 1;

            }
        }
    } console.log("number of vowels in the given string:", count)
}

console.log("\n\n\n")


//to reverse a string

{
    // let name=['s','a','m','s','u','n'];
    // let rev='';
    // for(let i=name.length-1; i>=0; i--){
        
    //         rev=rev+name[i];
    //     }
    
    // console.log("reverse string is : ",rev); 

    // let name=['a','s','h','i','k'];
    // let rev=[];
    // for(let i=name.length-1; i>=0; i--){
    //     for(let j=0; j<=name.length-1; j++){
    //         rev[j]=name[i];
    //     }
    // }
    // console.log("reverse string is : ",rev); 

    let str='ashik';
    let arr1 = str.split('');
    console.log("",arr1)
    let count='';
    for (let i=arr1.length-1;i>=0;i--){
      count=count+arr1[i];
    }
    console.log("string:",count);
}



console.log("\n\n\n")

//task 1

function max()
{
    let arr=[20,50,77,125,60];
    let count=arr[0];
    
    for (let i=0;i<=arr.length-1;i++){
    if(arr[i]>count){
        count=arr[i]
    }
    }console.log("largest number from array:",count)
}max()

console.log("\n\n\n")

//task2

function min()
{
    let arr=[20,50,77,125,60];
    let count=arr[0];
    
    for (let i=0;i<=arr.length-1;i++){
    if(arr[i]<count){
        count=arr[i]
    }
    }console.log("smallest number from array:",count)
}min()


console.log("\n\n\n")

//task3
{
    let num=7;
    fact=1;
    for(i=2;i<=num;i++){
        fact=fact*i
    }console.log("factorial of the given string:",fact)
}

console.log("\n\n\n")

//task4
// {

// }

console.log("\n\n\n")

//for each task

//print Names in uppercase

{
    function people1 (){
        const people = [
            {name : 'Alice' ,age : 30, city : 'New York'},
            {name : 'BOB' ,age : 25, city : 'Los Angeles'},
            {name : 'Charlie' ,age : 35, city : 'Chicago'},
            {name : 'David' ,age : 30, city : 'New York'},
            {name : 'Eve' ,age : 25, city : 'Los Angeles'},
        ]
        console.log("people:",people);
    }
     
    people .forEach(items => {
        console.log("people:",people)
    });
    
}