package lambda;

class App {
    public static void main(String[] args) {
        new Book("Where the Crawdads Sing", "Delia Owens").read();
    }
}

class Book {
    String title;
    String author;

    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    void read() {
        System.out.println("reading:" + " \"" + this.title + "\" " + " by: " + this.author);
    }
}
