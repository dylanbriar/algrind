/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome (s) {
  //this could be /[\W\s]+/gi but for whatever reason that doesnt cover underscores, so we gotta get real specific
  const regex = /[^a-zA-Z0-9]+/g;   
  //clear out the string of all nonalphanumeric chars
  const newString = s.replaceAll(regex, '').toLowerCase();
  //set the pointers to begin at the left end and the right end
  let left = 0;
  let right = newString.length - 1;
  //make sure each character matches, shifting the pointers each time
  while (left !== right && left < right){
    if (newString[left] !== newString[right]) {return false};
      left++;
      right--;
  }
  return true;
};

function isPalindromeRecurse (s) {
  //this could be /[\W\s]+/gi but for whatever reason that doesnt cover underscores, so we gotta get real specific
  const regex = /[^a-zA-Z0-9]+/g;   
  //clear out the string of all nonalphanumeric chars
  const newString = s.replaceAll(regex, '').toLowerCase();
  function checkPalindrome (string){
    if (!string){return true}
    else if (string[0] !== string[string.length - 1]) {return false}
    else return checkPalindrome(string.slice(1, string.length - 1)) 
  }
  return checkPalindrome(newString);
};

//for readability, you could do this
function isPalin(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
//this is still O(n), but it it adds 3 additional passes, so it isnt as efficient