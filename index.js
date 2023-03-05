// Programming Languages

let language1 = 'c#'
let language2 = 'Javascript'
let language3 = 'Ruby'
let language4 = 'php'

let languages = ["c#", "javascript", "Ruby", "php"]

languages.push("Kotlin")
languages.splice(3, 0, "Java")
const removedElementFirst = languages.shift();
languages.push("Go", "Rust")

console.log(languages)


let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log()