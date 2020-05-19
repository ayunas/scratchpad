function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const grey = new Book("Fifty Shades of Grey","EL James",2013);
const nightingale = new Book("The Nightingale","Kristin Hannah",2015);
const stars = new Book("The Fault in Our Stars","John Green", 2014)
const eightyfour = new Book("1984","George Orwell",1961);
const time = new Book("A Brief history of time", "Stephen Hawking", 1998);
[grey,nightingale,stars,eightyfour,time].forEach(book => console.log(book));



