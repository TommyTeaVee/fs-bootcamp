
let courses = ["Javascript", "Java", "Angular", "React"];// Pre-defined array of courses
courses.length = 3;

courses[4]= "Typescript";
courses[5]= "Vue";

console.log("Number of courses available: ");
//Check if the array is an object or string 
console.log(typeof courses);

//Injecting multiple values into a single array
courses.push(["C++", "Flutter", "C#","Python"])
console.log("New semester courses: " , courses)
//Check if the array is an array method
console.log(` coursers are : ${courses instanceof Array}`);
console.log("Is this still an array? " + Array.isArray(courses))


let faculty= courses.toString();
console.log(` coursers are : ${faculty instanceof Array}`);
console.log("Courses as String" , faculty );
console.log(typeof faculty)
console.log(faculty.toUpperCase());
