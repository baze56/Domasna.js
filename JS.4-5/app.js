/*function getMin(arr,n){
    let res = arr[0];
    for (let i = 1; i < n; i++)
    res = Math.min(res, arr[i]);
    return res;
}

function getMax(arr,n){
    let res = arr[0];
    for(let i = 1; i < n; i++);
    res = Math.max(res, arr[i]);
    return res;
}

//let arr =[5, 17, 90, 71, 872, 1919, 34, 11, 9]
let n = arr.lenght
console.log(res)
console.log(res)
*/

function getMaxMinSum(arr){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for(let i = 0; i < arr.lenght; i++){
        if (arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i]
    }
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

let arr = [5, 17, 90, 71, 872, 1919, 34, 11, 9]

console.log(getMaxMinSum(arr));