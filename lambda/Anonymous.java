package lambda;

interface Codable {
    void code();
}

class Anonymous {

    static void learn(Codable codable) {
        codable.code();
    }

    public static void main(String[] args) {

        TCstudent sarah = new TCstudent("Sarah");
        sarah.learn();

        TCstudent gabe = new TCstudent("Gabe");
        gabe.code();

        TCstudent gotham = new TCstudent("Gotham City");

        gotham.learn();
        gotham.code();

        Codable nancy = new Codable() {
            @Override
            public void code() {
                System.out.println("nancy loves code");
            }
        };

        nancy.code();
        learn(() -> System.out.println("we are learning tons of stuff!"));

        Codable codeLambda = () -> System.out.println("I coded at Lambda.  Now I code at TEKcamp...");

        useLambda(codeLambda);

//        Addable adder = new Addable() {
//            @Override
//            public int add(int a, int b) {
//                return a + b;
//            }
//        };

        Addable addLambda = (a,b) -> a + b;

    }

    static void useLambda(Codable cdbl) {
        cdbl.code();
    }
}


interface Addable {
    int add(int a, int b);
}

interface Student {
     void learn();
     void code();
}



class TCstudent implements Student {

    String name;

    TCstudent(String name) {
        this.name = name;
    }

    @Override
    public void learn() {
        System.out.println(this.name + " learns at TEKcamp");
    }

    @Override
    public void code() {
        System.out.println(this.name + " codes at TEKcamp");
    }

}