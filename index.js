// Print out all the letters of the stirng with recursive function.
function printString(string) {
  console.log(string[0])

  if(string.length > 1) {
    printString(string.substring(1))
  } else {
    return true
  }
}

// Write out a recursive function to reverse a string.
function reverseString(string) {
  if (string.length > 1) {
    return reverseString(string.substring(1)) + string[0]
  } else {
    return string
  }
}

// Write out a recursive function to see if a word is a palindrome.
function isPalindrome() {
  

}

// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo() {

}

// Write a recursive function to find the largest integer in an array.
function macOf() {

}

// Write out a function to see if an array includes a given element.
function includesNumber() {

}