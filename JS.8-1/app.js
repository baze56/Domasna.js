/*class Animal{
    constructor(name, kind){
        this.name = Rex;
        this.kind = shepperd;
    }
    speak(message){
        console.log(`$(this.kind) says: '${message}'`);
    }

}
let dog = new Animal('Rex', 'Dog');
dog.speak('Hey bro!!!');
*/

class Animal {
    constructor(name, kind) {
      this.name = name;
      this.kind = kind;
    }
  
    speak(message) {
      console.log(`${this.kind} says: '${message}'`);
    }
  }
  
  let dog = new Animal('Rex', 'Dog');
  dog.speak('Hey bro!!!'); 
  