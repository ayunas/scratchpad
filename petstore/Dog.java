package petstore;

class Dog extends Animal{

    @Override
    void sound() {
        System.out.println("woof");
    }

    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}


