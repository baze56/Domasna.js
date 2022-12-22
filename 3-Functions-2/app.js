function calculateDogAge(dogAge) {
    return `Your dog is ${dogAge * 7} years old in human years.`;
  }
  
  console.log(calculateDogAge(1));  
  
  console.log(calculateDogAge(2));  
  
  function calculateAge(age, isHumanToDog) {
    if (isHumanToDog) {
      return `Your dog is ${age / 7} years old in dog years.`;
    } else {
      return `Your dog is ${age * 7} years old in human years.`;
    }
  }
  
  console.log(calculateAge(7, true));  
  
  console.log(calculateAge(14, true));  
  
  console.log(calculateAge(1, false));  
  
  console.log(calculateAge(2, false));  
  