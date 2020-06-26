import java.util.Arrays;

class StrongType {

    public static void main(String[] args) {
        int myVar = 3;
        // myVar = "three";
        // myVar = true;
        // myVar = new Object[]{3,"three",true};
        System.out.println(myVar);

        // Object[] arr = new Object[]{3,"three",true};
        // System.out.println(Arrays.toString(arr));

        String[] cars = {"Volvo","BMW","Ford","Mazda"};
        cars[4] = "Lexus";
        System.out.println(cars);
    }
}