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


function isEvenOrOdd(evenOrOdd, userNumber) {

  // Create a variable for user's choise "Even" or "Odd"

  evenOrOdd = prompt("Inserie 'pari' o 'dispari'");
  console.log(evenOrOdd);


  // Create a varaible and assign the number entered by the user (between 1 and 5)

  userNumber = Number(prompt("Inserie un numero tra 1 e 5"));
  console.log(userNumber);


  // Create a variable and assign it a random number (between 1 and 5)

  const randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);


  // Add the two numbers together

  let sum = userNumber + randomNumber;
  console.log(sum);

  let sumEvenOdd = "pari";

  if (sum % 2 !== 0) {
    sumEvenOdd = "dispari";
  }

  console.log(evenOrOdd);
  console.log(sumEvenOdd);

  // Check if the sum is even or odd and tell the user if he wins or loses

  if (evenOrOdd === sumEvenOdd) {
    return "Hai vinto!";
  } else {
    return "Hai perso!";
  }
}

const countingOut = isEvenOrOdd();
alert(countingOut);

// #endregion EVEN OR ODD