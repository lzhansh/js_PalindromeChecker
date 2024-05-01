const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function isPalindrome (stri) {
  const cleanStr = String(stri).toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reverseStr = cleanStr.split('').reverse().join('');
  return cleanStr === reverseStr;
}

function checkString () {
  const str = inputText.value;
  if (str.length == 0) {
    alert("Please input a value");
    return;
  } 
  
  const isPalindromeRes = isPalindrome(str);
  
  if ( isPalindromeRes === true ) {
    resultText.textContent = `${str} is a palindrome`;
  } else {
    resultText.textContent = `${str} is not a palindrome`;
  }
}

checkButton.addEventListener('click' , checkString);

console.log(inputText);