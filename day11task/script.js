//task 1
console.log("Task 1");

var a=5;
var b=3;
var sum=a+b;
var difference=a-b;
var product=a*b;
var quotient=a/b;
console.log(sum +" "+difference+" "+product+" "+quotient);

//task 2
console.log("Task 2");

var a1=25;
if (a1>10 && a1%2==0)
     {
   console.log("true");   
}
else{
    console.log("flase");   
}

//task 3
console.log("Task 3");

var num1=-7;
var output=num1>0?"the number is positive":"the number is negative"
console.log(output);

//task 4
console.log("Task 4");

var number=25;
    if(number%2==0)
    {
        console.log("The number is even");
        
    }
     else {
        console.log("The number is odd")
    }

//task 5
console.log("Task 5");

var input=88;
switch (true) {
    case input>=90 && input<=100:
        console.log("A");
        break;
    case input>=80 && input<89:
        console.log("B");
        break;
    case input>=70 && input<79:
        console.log("C");
        break;
}

//task 6
console.log("Task 6");

var k=5;
var m=1;
while (m<=10) {
    console.log(k+"X"+m+"="+(k*m));
    m++;
}

//task 8
console.log("Task 8");

alert("Welcome to my website!")

//task 9
console.log("Task 9");

if (confirm("Press a button!")) {
    console.log("You chose to continue!");
  } else {
   console.log("You canceled!");
  }

//task 10
console.log("Task 10");

var age1= prompt("enter the age")
if (age1>=18) {
    console.log("You are eligible!");
}
else
{
    console.log("You are not eligible!");
}

//task 11
console.log("Task 11");

var height=prompt("Enter the height");
var weight=prompt("Enter th weight");
var bmi=weight/(height**2);
console.log(bmi);


//task 12
console.log("Task 12");

var name9="pavi";
var ans=name9.split('').reverse().join('');
console.log(ans);

//task 13
console.log("Task 13");

var vow="pavithran";
var mainvow="aeiou";
var c=0;
for (let i=0;i<10;i++) {
    if (mainvow.includes(vow[i])) {
        c++;
    }
}
console.log(c);

//task 14
console.log("Task 14");

var name7="madam";
var ans=(name7.split('').reverse().join(''));
if (name7==ans) {
    console.log("true");
}
else{
    console.log("flase");
}

//task 15
console.log("Task 15");

var m="john doe";
var sp=m.split(" ");
for(let i=0;i<sp.length;i++)
{
    console.log(sp[i].toUpperCase().charAt(0));
}

//task 16
console.log("Task 16");

var ino="I Love Programming";
var newino=ino.replace("Programming","JavaScript")
console.log(newino);

//task 17
console.log("Task 17");

var text="Hello World";
var split=text.split(" ");
console.log(split);

//task 18
console.log("Task 18");

var input1="I love JavaScript";
var newinput1=input1.replaceAll(" ",'');
console.log(newinput1);
