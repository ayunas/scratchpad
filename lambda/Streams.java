package lambda;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Streams {

    public static void main(String[] args) {
        //https://bit.ly/lambda-streams
        //1. add a list of numbers using a reduce.
        List<Integer> nums = Arrays.asList(1,2,3,4,5);
        int sum = nums.stream().reduce(0,(s,a) -> s+a);
        System.out.println(sum);

        Optional<Integer> sumOpt = nums.stream().reduce((s,a) -> s + a);
        System.out.println("sum optional " + sumOpt.get());

        int[] numbers = {1,2,3,4,5,6,7};
        int sumNumbers = Arrays.stream(numbers).sum();
        System.out.println(sumNumbers);
        long count = Arrays.stream(numbers).count();
        System.out.println(count);

        OptionalInt sumIntStream = IntStream.range(1,20).reduce( (s, a) -> s+a);
        System.out.println(sumIntStream.getAsInt());

        int intStreamSum = IntStream.range(50,100).sum();
        System.out.println(intStreamSum);

        List<Integer> numList = Arrays.asList(10,20,30,40,50,60,70,80,200,250,560,192);
        System.out.println(numList);

        List<Integer> numFiltered = numList.stream().filter(s -> s > 100).collect(Collectors.toList());
        System.out.println(numFiltered);

        //add 500 to each number in the numList
        List<Integer> nums500 = numList.stream().map(s -> s + 500).collect(Collectors.toList());
        System.out.println(nums500);

        //convert a list of string integers, and convert them to numbers
        List<String> stringNums = Arrays.asList("3","4","10","20","80","250","1029");
        List<Integer> numified = stringNums.stream().map(s -> Integer.parseInt(s)).collect(Collectors.toList());
        System.out.println(numified);

















    }
}
