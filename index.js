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
function isPalindrome(string) {
  if (string.length > 1) {
    if (string[0] === string[string.length - 1]) {
      return isPalindrome(string.substring(1, string.length-1))
    } else {
      return false
    }
  } else {
    return true
  }
}

// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(array, index) {
  if (index >= 1) {
    return array[index] + addUpTo(array, index-1)
  } else {
    return array[index]
  }
}

// Write a recursive function to find the largest integer in an array.
function maxOf(array) {
  if (array.length > 1) {
    return array[0] > maxOf(array.slice(1)) ? array[0] : maxOf(array.slice(1))
  } else {
    return array[0]
  }
}

// Write out a function to see if an array includes a given element.
function includesNumber(array, element) {
  if (array.length >= 1) {
    return array[0] === element ? true : includesNumber(array.slice(1), element)
  } else {
    return false
  }
}