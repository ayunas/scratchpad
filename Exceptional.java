class Exceptional {

    public static void main(String[] args) {

        try {
            int num = 100;
            int num2 = num / 0;
            // System.out.println(num2);
        } catch(ArithmeticException e) {
            System.out.println("You cannot divide a number by zero");
        }
    }
}