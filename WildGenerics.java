import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class WildGenerics {

    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();
        List<? extends Number> ints = new ArrayList<Integer>();
        List<? extends Number> dubs = new ArrayList<Double>();

        List<Integer> integers = new ArrayList<>(Arrays.asList(1,2,3,4,5));


        nums.addAll(integers);

        System.out.println(nums);










    }
}
