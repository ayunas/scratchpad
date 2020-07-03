import java.util.Arrays;
import java.util.List;
import java.util.Optional;

class Lambdas {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        System.out.println(nums);

        Mathable lambdaAdd = () -> {
            long sum = nums.stream().reduce(nums.get(0),(s, n) -> s + n);
            return (int) sum;
        };
//
//        int sum1 = lambdaAdd.math(); //1. invoking lambda directly in main
//        int sum2 = adder(lambdaAdd); //2. lambda as argument, but defined outside
//        System.out.println(sum);

        int sum3 = adder(() -> nums.stream().reduce(nums.get(0),(s,n) -> s + n));
        System.out.println("lambda defined in line of the arugment to adder() : " + sum3);


    }

    static int adder(Mathable lambdaMath) {
        return lambdaMath.math();
    }




}

@FunctionalInterface
interface Mathable {
    int math();
}