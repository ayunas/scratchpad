
import java.util.*;

class Upcast {

    String a;
    String b;

    Upcast(String a, String b) {
        this.a = a;
        this.b = b;
    }

    public static void main(String[] args) {
         Upcast upc1 = new Upcast("a","b");
         System.out.println(upc1.a);
         Object upc2 = new Upcast("c","d");
         System.out.println(upc2.getClass().getName());
//         System.out.println(upc2.a);
    }

}