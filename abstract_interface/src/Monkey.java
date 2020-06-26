package src;


class Monkey extends Creature {

    Monkey(String name, int legs) {
        super(name,legs);
    }

    public static void main(String[] args) {
        Monkey curiousGeorge = new Monkey("Curious George",2);
        System.out.println("legs : " + curiousGeorge.legs);
        System.out.println("name : " + curiousGeorge.name);
    }

}