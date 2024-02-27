// PALINDROMOUS WORD
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

checkPalindromous = isPalindrome();

alert(`La parola ${checkPalindromous}`);