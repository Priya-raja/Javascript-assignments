function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    
    return bound - remainder;
}

console.log(maxMultiple(8,78)) //maximum divisible by the number