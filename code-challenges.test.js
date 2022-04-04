// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("caps", () => {
  it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(caps(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
// need to map throught the arrays so that we can modify them
// we can use split to break up the values in the name key with the " " so that thee names are eaiser to access for caplitaliztion
// maping throug the new individual words in each name we can capitalize them at their 0 index and the bring them back together with slice
// join the first and last names back together
// use string interprilation to produce the desired sentance
// in order for this to work i had to break the steps into the interprilation.



const caps = (array) => {
  return array.map(
    (item) =>
      `${item.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} is ${item.occupation}.`
  )
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("nums3", () => {
  it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(nums3(hodgepodge1)).toEqual([2, 0, -1, 0,])
    expect(nums3(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.
//create a function that iterates through an array and onnly returns numbers that are the remaders of the orginal numbers /3 aka %3
// we need to use filter to remove all non numbers (typeof value === "nmumber")
// once noinnumbers are removed we can map the remaining vaules with the %3 operation done to them  


const nums3 = (array) => {
  return array
    .filter((value) => typeof value === "number")
    .map((num) => num % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

//create a function that iterates through an array changes the values within the array then adds all the values up
//we dont need to weed out any values so we dont need filter and map should work for this
// map the array and return the values cubed **3
// use the reduce method to return the array as a single number with each number added to the next number to come to the total


const sumCubed = (arr) => {
  let cubedArr = arr.map((value) => {
    return value ** 3
  })
  return cubedArr.reduce((a, b) => a + b, 0)
}