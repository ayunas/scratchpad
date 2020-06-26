import java.util.Arrays;

enum Day { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY };


class ChooseDay {
    public static void main(String[] args) {
        System.out.println(Day.FRIDAY);
        System.out.println(Arrays.toString(Day.values()));
        for (int i=0; i<Day.values().length; i++) {
            System.out.println(Day.values()[i]);
        }

        System.out.println("valueOf() : " + Day.valueOf("SUNDAY"));

    }
}
