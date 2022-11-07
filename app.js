function summation(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(summation(10));

function fibonacci(n) {
    let fibo = [0,1];
    for(i=2; i<n; i++) {
        fibo[i] = fibo[i-2] + fibo[i-1]
    }
    return fibo
}
// console.log(fibonacci(7));

function factorial(n) {
    let result = 1
    for(i=2; i<=n; i++) {result *= i}
    return result
}
// console.log(factorial(0))
// console.log(factorial(2))
// console.log(factorial(5))

function isPrime(n) {
    if (n<2) {return false}
    for (let i=2; i<n; i++) {
        if(n%i === 0) {
            return false
        }
    }
    return true
}
// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))

function isPowerOfTwo(n) {
    if (n<1) {return false}
    while(n>1) {
        if (n%2 !==0){return false}
        n /= 2
    }
    return true
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))