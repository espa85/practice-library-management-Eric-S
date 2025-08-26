class LibraryItem {
    constructor (title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been checked out.`);
        } else {
            console.log(`${this.title} is already checked out.`);
        }
    }

    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was not checked out.`);
        }
    }

}

class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }

    describeBook() {
        let status; 
        if (this.isAvailable) {
             status = "available";
        } else {
            status = "unavailable";
        }
        return `${this.title} by ${this.author} is ${status} and is in the ${this.genre} section.`;
    }

}

class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }

      describeDVD() {
        let status; 
        if (this.isAvailable) {
             status = "available";
        } else {
            status = "unavailable";
        }
        return `${this.title} is directed by ${this.director}, is ${this.duration} minutes long and is ${status}.`;
    }
}

class Magazine extends LibraryItem {
    constructor ( title, id, isAvailable, issueNumber, publisher) {
        super (title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

      describeMagazine() {
        let status; 
        if (this.isAvailable) {
             status = "available";
        } else {
            status = "unavailable";
        }
        return `${this.title} is published by ${this.publisher}, the issue number is ${this.issueNumber} and is ${status}. The id number is ${this.id}.`;
    }
}

let book = new Book("The Great Gatsby", 1, true, "F. Scott Fitzgerald", "Fiction" );
let dvd = new DVD("Inception", 2, true, "Christopher Nolan", 148);
let magazine = new Magazine("National Geographic", 3, true, 25, "NatGeo Society");

console.log(book);

book.checkOut();

console.log(book);

book.returnItem();

console.log(book);

console.log(magazine.describeMagazine());
console.log(dvd.describeDVD());

dvd.checkOut();
console.log(dvd.describeDVD());