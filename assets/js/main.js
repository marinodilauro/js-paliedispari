// #region PALINDROMOUS WORD

// Ask the user to enter a word and create a function to check if the entered word is a palindrome

function isPalindrome(userWord) {

  // Create a varaible and assign the word entered by the user

  userWord = prompt("Inserire una parola");


  //  Turn the string into an array

  const userWordArray = Array.from(userWord)
  //console.log(userWord);


  // Reverse order of the letters

  const userWordArrayReversed = userWordArray.reverse();
  //console.log(userWordArrayReversed);


  //  Turn the array into a string

  const userWordReversed = userWordArrayReversed.join("");
  //console.log(userWordReversed);


  // Check if the word is palindrome

  if (userWord === userWordReversed) {
    return "è palindroma"
  } else {
    return "non è palindroma"
  };

}

// checkPalindromous = isPalindrome();

// alert(`La parola ${checkPalindromous}`);

// #endregion PALINDROMOUS WORD


// #region EVEN OR ODD

// Create a variable for user's choise "Even" or "Odd"

const evenOrOdd = prompt("Inserie 'pari' o 'dispari'");
console.log(evenOrOdd);


// Create a varaible and assign the number entered by the user (between 1 and 5)

const userNumber = Number(prompt("Inserie un numero tra 1 e 5"));
console.log(userNumber);


// Create a variable and assign it a random number (between 1 and 5)

const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);


// Add the two numbers together

let sum = userNumber + randomNumber;
console.log(sum);


// Check if the sum is even or odd 

if (sum % 2 === 0) {
  alert("la somma è pari")
} else {
  alert("la somma è dispari")
}
// #endregion EVEN OR ODD