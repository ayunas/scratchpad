package src;

abstract class Creature {

    String name;
    int legs;

    // abstract void move();
    // abstract void eat();
    // abstract void reproduce();

    Creature(String name, int legs) {
        this.name = name;
        this.legs = legs;
    }

    void swim() {
        System.out.println(name + " is swimming");
    }

}