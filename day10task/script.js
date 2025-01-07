// task 1
console.log("Task 1")

var number=25;
    if(number%2==0)
    {
        console.log("The number is even");
        
    }
    else{
        console.log("The number is odd")
    }


//task 2
console.log("Task 2");

let num=1;
for(var i=num;i<=10;i++)
{
    console.log(i);    
}

//task 3
console.log("Task 3");

let num1=3;
for(var i=num;i<=10;i++)
{
    console.log(num1*i); 
}

//task 4
console.log("Task 4");




//task 5
console.log("Task 5");

let num3=1;
let sum=0;
for(let i=num3;i<=100;i++)
{
    sum=sum+i;
}
console.log(sum);

//task 6
console.log("Task 6");

var arr1=[1,5,3,9,2]
var max=0;
for(let i=0;i<arr1.length;i++)
{
    if(max<arr1[i])
        {
            max=arr1[i];
    }
}
console.log(max);

//task 7
console.log("Task 7");

var name8="pavithran";
let chararray=name8.split('');
let count=0;
for(let i=0;i<name8.length;i++){
    if(chararray[i]=='a'||chararray[i]=='e'||chararray[i]=='i'||chararray[i]=='o'||chararray[i]=='u')
    {
        count++;
    }
}
console.log(count);

//task 8
console.log("Task 8");

for(var i=0;i<=5;i++)
{
    console.log("*".repeat(i));
    
}

//task 9
console.log("Task 9");

for(var i=0;i<=50;i++)
{
    if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        
    }
}

//task10
console.log("Task 10");

let name5='pavi';
let ans='';
for(let i=name5.length-1;i>=0;i--){
    ans+=name5.charAt(i);
}
console.log(ans);
