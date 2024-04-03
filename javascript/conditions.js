const gpa = 51;
const exp= 70;
const dist= 85;
const pass_mark= 50;
const fail= 49;
const dnw= 0;

if(gpa >=pass_mark){
    console.log("You passed with: " + gpa);
}else if(gpa <=fail){
    console.log("Try again next semester");
}
else if(gpa >=dist){
    console.log("You pass with Distinctions")
}