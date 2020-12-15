function digital_root(n)  {
   let number = n.toString().length;
   let result = []
   let sum = 0;
   
   while (n> 0) {
       const current = n % 10;
       sum += current;
       n = Math.floor(n / 10)
       if( sum.toString().length > 1) {
           n = sum;
           digital_root(n);
       }
   }
   return sum;
}
console.log(digital_root(159));