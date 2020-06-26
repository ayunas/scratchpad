class Errors {
    //semantic error : (meaningful). cannot assign a boolean to an int.
//    int num = true; //semantic error
    String name;

    // boolean num = (float) "hello";

    Errors(String name) {
        name = this.name;
        System.out.println(name);
    } 
    //syntax error. no semicolon. too many quotes at the end.
    // String fun = "we are having fun!!!""""

    public static void main(String[] args) {
        Errors err = new Errors("Big Mistake!");
    }
}