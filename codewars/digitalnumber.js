const findSum = (num) => {
    if(num < 10){
       return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log(findSum(159));

 //Another solution
 function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}