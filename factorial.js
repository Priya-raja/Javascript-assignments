function factorialNumber(num) {
    
    // write code here
    let sum = 1;
    for(let i=1; i<=num; i++)
    {
        sum *= i;
    }
    return sum;
}
console.log(factorialNumber(5))

function findDigit(str) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const digit = str.split('');
    for(const di of digit){

        if(numbers.includes(di)) {
            return di;
        }
    }
}
console.log(findDigit('a2bhf'));

function largestNumber(num) {
    let placeholder = '';
    
    for(let i = 0; i < num; i++) {
        placeholder = placeholder.concat('9'); //add 9 in every iterartion
    }
    
    return parseInt(placeholder);
}

console.log(largestNumber(2))
//Can be done like this also
function largestNumber(num) {
    const placeholder = '9'.repeat(num);
    
    return parseInt(placeholder);
}




