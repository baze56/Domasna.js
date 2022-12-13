let year = window.prompt('Enter a year')
function calculateZodiac(year) {
    switch (year % 12) {
        case 0:
            return 'Monkey';
            break;
        case 1:
            return 'Rooster';
            break;
        case 2:
            return 'Dog';
            break;
        case 3:
            return 'Pig';
            break;
        case 4:
            return 'Rat';
            break;
        case 5:
            return 'Ox';
            break;
        case 6:
            return 'Tiger';
            break;
        case 7:
            return 'Rabbit';
            break;
        case 8:
            return 'Dragon';
            break;
        case 9:
            return 'Snake';
            break;
        case 10:
            return 'Horse';
            break;
        case 11:
            return 'Sheep';
            break;
    }
}
let result = calculateZodiac(year)
console.log(result)