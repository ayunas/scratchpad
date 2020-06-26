package src;


class Octopus extends Creature {

    Octopus(String name, int legs) {
        super(name,legs);
    }

    public void move() {
        System.out.println(this.name + " is using " + this.legs + " to swim");
    }

    public static void main(String[] args) {
        Octopus octolady = new Octopus("Octopus lady", 8);
        System.out.println(octolady.name);
        octolady.swim();
    }
}