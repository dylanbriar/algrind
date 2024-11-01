/* difficult to go line by line here, but here's what's up
* you only need to keep track of a minimum, and the best difference you've found so far
* if you find a lower minimum, that's more profit
* unless there's a greater difference between the former minimum and a higher number behind the lower minimum
* which we already recorded, so we won't lost it until we find a greater one. 
* so there's two pointers: one for the minimum, one for the current number being observed
*/
function maxProfitTS (prices: number[]): number {
  let maxDif: number = 0;
  let min: number = 0;
  for (let i = 1; i < prices.length; i++){
      if (prices[i] - prices[min] > maxDif){
          maxDif = prices[i] - prices[min];
      }
      if (prices[i] < prices[min]){
          min = i; 
      }
  }
  return maxDif;
};
