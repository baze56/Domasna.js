function sumArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([10, 7, 6, 14, 22, 90]));

