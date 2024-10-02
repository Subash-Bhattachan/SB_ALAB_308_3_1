
let n = 9;
let isDividerFound = 0;

while(isDividerFound == 0) {

  if (n < 2)
  {console.log("2 is the next prime number.")
    break;
  }
  n++;
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isDividerFound++;
      break;
    }
   }
    
   if (isDividerFound) {
      isDividerFound = 0;
    }
    else {
      console.log(n + " is the next prime number.")
          break;
      }
    }