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
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))

function recursiveFibonacci(n) {
    if (n<2) {return n}
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))

function recursiveFactorial(n) {
    if(n===0) {return 1}
    return n * recursiveFactorial(n-1)
}
// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(5))

function linearSearch(arr, t) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === t) {
            return i
        }
    }
    return -1
}
// console.log(linearSearch([-5,2,10,4,6], 10));
// console.log(linearSearch([-5,2,10,4,6], 6));
// console.log(linearSearch([-5,2,10,4,6], 20));

function binarySearch(arr, t) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(t === arr[middleIndex]) {
            return middleIndex 
        }
        if(t < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1
}
// console.log(binarySearch([-5,2,4,6,10], 10));
// console.log(binarySearch([-5,2,4,6,10], 6));
// console.log(binarySearch([-5,2,4,6,10], 20));