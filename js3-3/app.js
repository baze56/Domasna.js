function withdrawCash(amuont) {
    const accountMoney = 1500;

    if(parseInt(amount) > accountMoney){
        return "Not Enough Money";
    }
    
    return 'You have withdrawn ' + amount +'. Your account balance is now.' + (1500-amount);
    
}

const amount = prompt("Enter the amount you would like to withdraw:");
const result = withdrawCash(amount);
console.log(result);