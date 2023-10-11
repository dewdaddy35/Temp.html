 /*function Temp_Convert(){

    let myArray = main(String[] args){
        
        console.log(" === Converting Temperature ===\n");
        convertTemperature();
    }


    function convertTemperature(){
       
        let value1 = document.getElementById("input1").value;
        let value2 = document.getElementById("input2").value;

        console.log("\nEnter value1 for Fahrenheit to Celsius"
                + "\nEnter value2 for Celsius to Fahrenheit"
                + "\nSomething else to Exit." + "\nYour Option:");
     selection = input.nextInt();
        if (selection == 1) {
            console.log("Enter a degree in Fahrenheit:");
            far2cel();
        } else if (selection == 2) {
            print("Enter a degree in Celsius:");
            cel2far();
        } else {
            print("Bye..");
        }
    }

    private static void cel2far() {
        
        Scanner input = new Scanner(System.in);
        Double celsius = input.nextDouble();
        print(celsius + " celsius is " + ((celsius * 9 / 5.0) + 32)
                + " Fahrenheit");
        convertTemperature();
    }

    private static void far2cel() {
        // TODO Auto-generated method stub
        Scanner input = new Scanner(System.in);

        Double Fahrenheit = input.nextDouble();
        print(Fahrenheit + " Fahrenheit is " + ((Fahrenheit - 32) * (5 / 9.0))
                + " celsius");
        convertTemperature();
    }

    private static void print(String string) {
        // TODO Auto-generated method stub
        System.out.print("\n" + string);
    }
}








/*let myArray = ["string", 5, true];
let myEmptyArray = [];
let = testValue = myArray[3];
console.log(testValue);

myArray.push(testValue); //inserts an element at the end.
myArray.unshift(testValue);//insert an element at the beginning

myArray.pop();//removes last element
myArray.shift();//removes first element
myArray.splice(2,1);//removes a specific element
document.write(myArray[0]);


//loop statement
//instruction that says you can repeat something until you reach a condition
for(let i=0;i<=10;i++)// i++ =i+1
{
    console.log(i);
}
//if statement
/*
x = 1; this is an assignment
x == 1; this is a comparision (i am asking a question) yes or no
x === 1; this is a comparison ( i am making a question) i am expecting an answer and it should be true or false(boolean)
*/



/*myArray[2]=false;//

let num1 = 3;
let num2 = 2;
let num3 = 2;

if (num1 == num2)
{
    console.log("yes it does");
}else if (num1 == num3)
{
    console.log("no, they are not equal");
}
else{ 
    console.log("nope none of them are equal");
}

// this is just an example
let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let daysWithE = [];


for(let i = 0; i < days.length; i++);
{
    if (days[i].toLowerCase().includes("e"))
    {
        daysWithE.push(days[i]);
    }
}
console.log(daysWithE);*/

//lets compare if both inputs are equal

//let imagine we want to create some logic that if the user tries to login 3 times and fails'
// they get a meesage that says your account will be cancelled
/*let username = "Eric";
let password = "admin";
let fail = 0;

function compare(){
let value1 = document.getElementById("input1").value;
let value2 = document.getElementById("input2").value;

if (value1 == username && value2 == password)
{
    console.log("Login successfully");
    fail = 0;
}else
{
    fail++;

if(fail >3)
    {
        console.log("your account will be cancelled");
        return;
    }
    console.log("Failed to login");
}
}*/
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("btnconvertTemperature").addEventListener("click", function() {
let temp = Number(document.getElementById("number").value);

let option = parseInt(prompt("Choose the option an operation to perform: 1) Celsius, 2) Fahreit"));

//let  C = (temp -32) * 5/9;
//let F= (temp * 9/5) + 32;
//let result;
if (option == 1) { 
    // convert F to C 
    temp = (temp-32) * 5/9.0; 
    tempScale = "Celsius.";
    document.getElementById("result").innerHTML=temp;

    } else if (option == 2) { 
    // convert C to F 
    temp = (temp * 9/5.0) +32; 
    tempScale = "Fahrenheit."; 
    document.getElementById("result").innerHTML=temp;

    }//end if/else
});
});
