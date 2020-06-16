import java.util.*;

class Flow {

    static void divZero() {
        System.out.println("I will invoke a try catch block in this method");
        Random rand = new Random();
        int zeroOneTwo = rand.nextInt(3);
        
        try {ß
            int num1 = rand.nextInt(50);
            System.out.println(num1 + " divided by " + zeroOneTwo + " is : " + num1 / zeroOneTwo);
        } catch(ArithmeticException ae) {
            System.out.println("You cannot divide a number by zero " + ae);
        } catch(e)
    }

    static void iffys() {
        int num = 10;

        if (num > 10)
            if (num > 5) {
                System.out.println(num + " is am greater than 5 and 10");
            }
    }



    public static void main(String[] args) {
        
        divZero();
        iffys();

        List<String> stuff = Arrays.asList("one","two","three");

        for (int i=0; i<stuff.size(); i++) {
            System.out.println(stuff.get(i));
        }

        for(String s : stuff) {
            System.out.println(s);
        }

        stuff.forEach(x -> System.out.println(x));
    }

}

