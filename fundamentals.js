1. What are the results of these expressions ? (answer first, then use console.log() to check)

"" + 1 + 0         // "10"
"" - 1 + 0         // -1
true + false       // 1
!true              // false
6 / "3"            // 2
"2" * "3"          // 6
4 + 5 + "px"       // "9px"
"$" + 4 + 5        // "$45"
"4" - 2            // 2
"4px" - 2          // NaN
" -9 " + 5         // " -9 5"
" -9 " - 5         // -14
null + 1           // 1
undefined + 1      // NaN
undefined == null  // true
undefined === null // false
" \t \n" - 2       // -2

2. Which of the below are not giving the right answer ? Why are they not correct ? How can we fix them ?

    let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four         // 34
let multiplication = three * four   // 3*4
let division = three / four         // 0.75
let subtraction = three - four      // -1

let lessThan1 = three < four        // true
let lessThan2 = thirty < four       // false

let addition = three + four and let multiplication = three * four are reading it as a string rather than numbers.To fix the issue you would need to use parseInt() to convert the string to a number.

let addition = parseInt(three) + parseInt(four)             // 7
let multiplication = thrparseInt(three) * parseInt(four)    // 12

3. Which of the following console.log messages will print ? Why ?

if (0) console.log('#1 zero is true')           // will not print because if(0) will be false
if ("0") console.log('#2 zero is true')         // will print because if ("0") is string and not empty. 
if (null) console.log('null is true')           // will not print because if(null) is false
if (-1) console.log('negative is true')         // will print because if(-1) is true, so the statement is true. 
if (1) console.log('positive is true')          // will print because if(1) is true, and the statement is true. 

4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10'
//not sure how to do that

5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
        return 'Hello ' + name + '!';
    }

a) function expression syntax, 
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
  };
  


b) arrow function syntax. 
const getGreeting = (name) => {
    return 'Hello ' + name + '!';
  };
  

  6. a) Complete the inigo object by adding a lastName property and including it in the greeting. 

  b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. 
  HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.

  getCatchPhrase(person) {
    return person.numFingers === 6 ? "I am Inigo Montoya, you killed my father, prepare to die!" : "Nice to meet you.";
  }
  
  c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

  getCatchPhrase: (person) => person.numFingers === 6 ? "I am Inigo Montoya, you killed my father, prepare to die!" : "Nice to meet you."


Const westley = {
    name: 'Westley',
    numFingers: 5
}

Const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

Const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya' // adding lastName
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; //lastName added
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
    }
}

inigo.greeting(westley)
inigo.greeting(rugen)

7. The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
    },
    basket() {
        this.score += 2;
    },
    threePointer() {
        this.score += 3;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
    }
}

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();


8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
function printCity(obj) {
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  
  const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
  };
  
  printCity(sydney);
  

b) Create a new object for a different city with different properties and call your function again with the new object.
function printCity(obj) {
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

const newCity = {
    name: 'Auckland',
    population: 1_750_236,
    state: 'Auckland',
    founded: '1840',
    timezone: 'NZDT/Auckland'
  };
  
  printCity(newCity);
  


const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
let moreSports = [...teamSports];
moreSports.push('Baseball', 'Rugby');
moreSports.unshift('Soccer');

b) Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = dog1;
dog2 = 'Max';

c) Create a new cat2 variable equal to cat1 and change its name property
let cat2 = {...cat1};
cat2.name = 'Whiskers';


d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
console.log(teamSports); // ['Hockey', 'Cricket', 'Volleyball']
console.log(dog1); // 'Bingo'
console.log(cat1); // { name: 'Fluffy', breed: 'Siberian' }

e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
let moreSports = [...teamSports, 'Baseball', 'Rugby'];
moreSports.unshift('Soccer');

let cat2 = {...cat1, name: 'Whiskers'};



let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


10. The following constructor function creates a new Person object with the given name and age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.
function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
}