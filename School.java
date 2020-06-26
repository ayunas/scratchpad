
class School extends Building {

    @Override
    void shelter() {

    }

    @Override
    void cool() {

    }

    @Override
    void heat() {

    }

    @Override
    void illuminate() {

    }
}


abstract class Building {
    String name;

    abstract void shelter();
    abstract void cool();
    abstract void heat();
    abstract void illuminate();
}