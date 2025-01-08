//task 1
console.log("Task 1");

let input5="learning JavaScript every day";
let words=input5.split(" ");
let largestWord="";
    for (let word of words) {
        if (word.length>largestWord.length) {
            largestWord = word;
        }
    }
    console.log(largestWord);  


//task 2
console.log("Task 2");

var input="John Mary John Alex Mary";
var arr1=input.split(" ");
for (let i=0;i<arr1.length;i++) {
    for(let j=i+1;j<arr1.length;j++)
    {
        if(arr1[i]==arr1[j])
        {
            arr1[j]='CHANGED';
        }
    }
    console.log(arr1[i]);  
}

//task 3
console.log("Task 3")

var get1="I am learning JavaScript every day";
var arr2=get1.split(" ");

for(let i=0;i<arr2.length;i++)
{
    if(i%2==0)
    {
        arr2[i]="EVEN";
    }
}
console.log(arr2);


//task 4
console.log("Task 4");

var get="Hello World";
var arr=get.split('');
for (let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            arr[j]='@';
        }
    }
    if(arr[i]=='@')
    {
        continue;
    }
    else
    {
        console.log(arr[i]);
        
    }
}