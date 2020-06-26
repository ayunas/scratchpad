class ExceptionDemo {

    public static void main(String[] args) {

        try {
            int num = 100;
            int num2 = num / 0;
            System.out.println(num2);
        } catch(ArithmeticException ae) {
            System.out.println("You are trying to divide by zero! That will not work.");
            throw new ArithmeticException("divide by zero");
        }
    }
}