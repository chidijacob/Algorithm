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

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target===arr[middleIndex]) {
        return middleIndex
    }
    if(target<arr[middleIndex]) {
        return search (arr,target,leftIndex,middleIndex-1)
    } else {
        return search(arr, target, middleIndex+1, rightIndex)
    }
}
// console.log(binarySearch([-5,2,4,6,10], 10));
// console.log(binarySearch([-5,2,4,6,10], 6));
// console.log(binarySearch([-5,2,4,6,10], 20));

//finding the longest word in a string
function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    for(let i=0; i<str.length; i++) {
      if(str[i]===' ') {
        if(currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength ++;
      }
      if(currentLength>longestLength) {
        longestLength=currentLength;
      }
    } 
    return longestLength;
  }
  //console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  //Return largest number in array
  function largestOfFour(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
       let largestNum = arr[i][0]
        for(let j=1; j<arr[i].length; j++) {
          if(arr[i][j] > largestNum) {
            largestNum = arr[i][j];
          } 
        } 
        newArr[i] = largestNum
      }
    
    return newArr;
  }
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// confirm the ending
function confirmEnding(str, target) {
    let re = new RegExp(target + '$', 'i');
    let result = re.test(str);
    return result
  }
//console.log(confirmEnding("Bastian", "n"));

//confirm the ending
function confirmEnding(str, target) {
    if(str.slice(-target.length)===target) {
      return true
    }
    return false
  }
//console.log(confirmEnding("Bastian", "n"));

//repeat a string repeat a string
function repeatStringNumTimes(str, num) {
    let totalStr = "";
    for(let i=0; i<num; i++) {
      totalStr += str
    } return totalStr
  }
//console.log(repeatStringNumTimes("abc", 3));

//repeat a string repeat a string
function repeatStringNumTimes(str, num) {
    if(num<1) {return ""}
    return str + repeatStringNumTimes(str, num-1)
  }
//console.log(repeatStringNumTimes("abc", 3));