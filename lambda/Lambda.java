class Lambda {

    // static int add(Addable adder) {
    //     adder.add();
    // }

    public static void main(String[] args) {
        
        Addable adder = (a,b) -> a + b;
        int sum = adder.add(2,3);
        System.out.println("java : " + sum);
    }
}

@FunctionalInterface
interface Addable {
    int add(int a, int b);
}