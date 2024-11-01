function isValidParens (s: string[]): boolean {
  const pairs = {
      ")":"(",
      "}":"{",
      "]":"[",
  }
  const observed: string[] = [];
  for (let i = 0; i < s.length; i++){
      if (pairs[s[i]]){
          if (pairs[s[i]] === observed[observed.length-1]){
              observed.pop();
              continue;
          }
          else return false
      }
      observed.push(s[i]);
  }
  if (observed[0]){return false}
  return true;
};