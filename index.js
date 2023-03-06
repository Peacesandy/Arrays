// Programming Languages Question 2

let language1 = 'c#'
let language2 = 'Javascript'
let language3 = 'Ruby'
let language4 = 'php'

let languages = ["c#", "javascript", "Ruby", "php"]


languages.push("Kotlin")
languages.splice(3, 0, "Java")
const removedElementFirst = languages.shift();
//languages.push("Go", "Rust")
languages.unshift("Scala", "Swift")
languages.pop("php" )

console.log(languages)




// Question 4
function largest(arr) { 
	let i; 
	
	let max = arr[0]; 

	for (i = 1; i < arr.length; i++) {
		if (arr[i] > max) 
			max = arr[i]; 
	} 
	  
  return max; 
} 

let arr = [10, 32, 45, 90, 98];
    document.write("Largest in given array is " + largest(arr));

	console.log(largest(arr))

		