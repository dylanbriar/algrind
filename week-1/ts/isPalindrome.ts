/**
 heres the blog i wrote on this: 
https://medium.com/@dylan.e.briar/jeff-goldblum-inspired-algos-valid-palindrome-lc-125-solutions-comparison-eb3dffa26fa0
 */
function isPalindromeTS (s: string): boolean {
  //this could be /[\W\s]+/gi but for whatever reason that doesnt cover underscores, so we gotta get real specific
  const regex: RegExp = /[^a-zA-Z0-9]+/g;   
  //clear out the string of all nonalphanumeric chars
  const newString: string = s.replaceAll(regex, '').toLowerCase();
  //set the pointers to begin at the left end and the right end
  let left: number = 0;
  let right: number = newString.length - 1;
  //make sure each character matches, shifting the pointers each time
  while (left !== right && left < right){
    if (newString[left] !== newString[right]) {return false};
      left++;
      right--;
  }
  return true;
};

function isPalindromeRecurseTS (s: string): boolean {
  //this could be /[\W\s]+/gi but for whatever reason that doesnt cover underscores, so we gotta get real specific
  const regex: RegExp = /[^a-zA-Z0-9]+/g;   
  //clear out the string of all nonalphanumeric chars
  const newString: string = s.replaceAll(regex, '').toLowerCase();
  function checkPalindrome (string: string): boolean{
    if (!string){return true}
    else if (string[0] !== string[string.length - 1]) {return false}
    else return checkPalindrome(string.slice(1, string.length - 1)) 
  }
  return checkPalindrome(newString);
};

//for readability, you could do this
function isPalinTS(s: string): boolean {
  const cleaned: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
//this is still O(n), but it it adds 3 additional passes, so it isnt as efficient
