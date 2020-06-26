class LooseStrongType {

    public static void main(String[] args) {
        int myVar = 3;
        // myVar = "three";
        // myVar = true;
        // myVar = new int[]{3,"three",true};
        // System.out.println(myVar);

        String str1 = "TEK";
        String str2 = "camp";
        String str3 = str1 + str2;
        String str4 = str1 + " " + str2 + " " + str3;
        System.out.println(str4);

        StringBuilder string1 = new StringBuilder("TEK");
        string1.append(" ");
        string1.append("camp");
        string1.append(" ");
        string1.append("TEKcamp");
        System.out.println(string1);


        // System.out.println(str1);
        System.out.println(str1 == str2);
        System.out.println(str1.equals(str2));
        
    }



}