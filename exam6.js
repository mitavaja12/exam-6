class Book {
    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rentalPrice = rentalPrice;
        this.copiesAvailable = copiesAvailable;
    }

    // get
    getAuthor() {
        return this.author;
    }
    getPrice() {
        return this.price;
    }
    getRentalPrice() {
        return this.rentalPrice;
    }
    getCopiesAvailable() {
        return this.copiesAvailable
    }

    // set
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    setRentalPrice() {
        this.rentalPrice = newRentalprice;
    }
    setCopiesAvailable() {
        this.copiesAvailable = newcopiesAvailble;
    }

    // book
    rentBook() {
        if (this.copiesAvailable > 0) {
            this.copiesAvailable--;
            console.log(`You have successfully rented "${this.title}". Enjoy your reading!`);
        } else {
            console.log(`Sorry, "${this.title}" is currently out of stock for renting.`);
        }
    }

    buybook(){

    }

}