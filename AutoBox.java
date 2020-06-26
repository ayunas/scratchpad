import java.util.Arrays;

class AutoBox {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(args));
        Integer num = 36; //autoboxing
        System.out.println(num.getClass().getName());

        int num2 = 36;
        // System.out.println(num2.getClass().getName());
        num = 27;
        System.out.println(num.getClass().getName());

    }
}