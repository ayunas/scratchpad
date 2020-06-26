class Run {

    void runMe() {
        System.out.println("runMe()");
    }

    void runMe(int a, int b) {
        System.out.println("runMe(int a, int b)" + a + " " + b);
    }

    void runMe(int a, int b, int c) {
        System.out.println("runMe(a, b, c) " + a + " " + b + " " + c);
    }

    public static void main(String[] args) {
        Run run = new Run();
        int a = 1;
        int b = 2;
        int c = 3;
        run.runMe(a,b,c);
    }

}






