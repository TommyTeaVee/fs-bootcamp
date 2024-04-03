var  greetings = "Hello  FS Cohort"; //Variable 1
const times = 5.1;// Condition for comparison
//Block Scope
//False AND True= false
if(times ==5 && times >5){
 greetings = "Hi  So and so"; //Variable 2
 console.log(greetings); 
//end of block scope
}else{
    console.log(greetings + " "+ " The value is false");
}

 
var hello= "Welcome note"
//FALSE OR TRUE = TRUE
if(times ==5|| times>5){
hello = "Welcome to JavaScript"


console.log(greetings + " : " + hello);

}
else {
    console.log(hello + "  " + "Value is false");
}

if (times !=5){
    console.log(greetings + " : " + "Guesswork")

}else {
    console.log("I knew it !!!")
}





