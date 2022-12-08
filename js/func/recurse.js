function getFactorial(n){
    if (n===1){
        return 1;
    }
    else{
        return n*getFactorial(n-1);
    }
}
var result = getFactorial(4);
console.log(result);

/*
var result = 4 * getFactorial(3);
var result = 4 * 3 * getFactorial(2);
var result = 4 * 3 * 2 * getFactorial(1);
var result = 4 * 3 * 2 * 1; // 24
*/

function getFibonacci(n){
    if (n===0){
        return 0;
    }
    if (n===1){
        return 1;
    }
    else{
        return getFibonacci(n-1) + getFibonacci(n-2);
    }
};
var result = getFibonacci(8);
console.log(result);