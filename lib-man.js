/*
Instructions

Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.

Tasks
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).

2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.

3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.

4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/


/*
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
*/

class LibraryItem {
    
        constructor (title, id) { // could be constructor (title, , isAvailable)
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    checkOut() {
        if (this.isAvailable) {
            console.log(`${this.title} has been checked out.`);
            this.isAvailable = false;
        }
        else {
            console.log(`${this.title} is already checked out.`)
        }
    }

    returnItem() {
        if(!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.title} has now been returned.`);
        }
        else {
            console.log(`${this.title} was not checked out.`)
        }
    }

}

/*
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
*/

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id); 
        this.author = author;
        this.genre = genre;
        this.isAvailable = true;
    }

    groupDescribeBook() {
        let status;
        if (this.available) {
            status = "available";
        }
        else {
            status = "unavailable";
        }
        return `${this.title} by ${this.author} is ${status} and is in the ${this.genre} section.`;
    }

    // myDescribeBook() {
    //     return (`
    //         Title: \t${this.title}
    //         ID: \t${this.id}
    //         Author: \t${this.author}
    //         Genre: \t${this.genre}
    //         Available: \t${this.isAvailable}`)
    // }

}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id); 
        this.director = director;
        this.duration = duration;
        this.isAvailable = true;
    }

    groupDescribeDVD() {
        let status;
        if (this.available) {
            status = "available";
        }
        else {
            status = "unavailable";
        }
        return `${this.title} is directed by ${this.director}, is ${this.duration} minutes long and is ${status}.`;
    }

    // myDescribeDVD() {
    //     return (`
    //         Title: \t${this.title}
    //         ID: \t${this.id}
    //         Director: \t${this.director}
    //         Duration: \t${this.duration}
    //         Available: \t${this.isAvailable}`)
    // }

}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id); 
        this.issueNumber = issueNumber;
        this.publisher = publisher;
        this.isAvailable = true;
    }

    groupDescribeMag() {
        let status;
        if (this.available) {
            status = "available";
        }
        else {
            status = "unavailable";
        }
        return `${this.title} is published by ${this.publisher}, the issue number is ${this.issueNumber} and is ${status}. The ID number is ${this.id}.`;
    }

    // myDescribeMag() {
    //     return (`
    //         Title: \t${this.title}
    //         ID: \t${this.id}
    //         Issue: \t${this.issueNumber}
    //         Publisher: \t${this.publisher}
    //         Available: \t${this.isAvailable}`)
    // }

}

/*
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
*/

let book1 = new Book ("The Seventh Tower",1,"Garth Nix","Fiction");
let dvd1 = new DVD("Inception",2,"Christopher Nolan",148);
let mag1 = new Magazine("National Geographic",3,25,"NatGeo Society");


/*
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/

console.log(book1);
book1.checkOut();
// book1.myDescribeBook;
book1.groupDescribeBook();

console.log(dvd1);
dvd1.checkOut();
// dvd1.myDescribeDVD();
dvd1.groupDescribeDVD();

console.log(mag1);
mag1.checkOut();
// mag1.myDescribeMag();
mag1.groupDescribeMag();
