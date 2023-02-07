class Book {
    constructor(title, author, readingStatus) {
      this.title = title;
      this.author = author;
      this.readingStatus = readingStatus;
    }
  
    getStatus() {
      if (this.readingStatus) {
        return `Already read '${this.title}' by ${this.author}.`;
      } else {
        return `You still need to read '${this.title}' by ${this.author}.`;
      }
    }
  }
  
  let book1 = new Book('Harry Potter', 'J. K. Rowling', true);
  let book2 = new Book('Fire & Blood', 'George R. R. Martin', false);
  
  console.log(book1.getStatus()); 
  
  console.log(book2.getStatus()); 
  