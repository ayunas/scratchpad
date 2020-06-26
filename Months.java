enum Months {JAN,FEB,MARCH,APRIL,MAY,JUNE,JULY,AUGUST,SEPTEMBER,OCTOBER,NOVEMBER,DECEMBER};

enum Summer {May,June,July,August};

class SummerTime {

    public static void main(String[] args) {
        System.out.println(Summer.August);
        System.out.println(Summer.values()[1]);
    }
}

enum Companies {
    EBAY("ebay.com"),
    AMAZON("amazon.com"),
    PAYPAL("paypal.com");

    final String url;

    Companies(String url) {
        this.url = url;
    }
}

enum BigMonths {
    JANUARY(1,"jan"), //adding parenthesis to the enum constant, calls the constructor of the Enum.  It needs to match the correct # of arguments specified after the constant.
    FEBRUARY(2,"feb");

    final int monthNum;
    final String mon;

    BigMonths(int m, String mon)  {
        this.monthNum = m;
        this.mon = mon;
    }
}

class MonthEnums {

    public static void main(String[] args) {
        System.out.println(Summer.August);
        System.out.println(BigMonths.valueOf("JANUARY"));
        BigMonths bigMonths = BigMonths.FEBRUARY;
        System.out.println(bigMonths.monthNum);
        System.out.println(bigMonths.mon);
    }
}











