import java.util.*;

class Reference {


    static void changeName(Employee employee,String newName) {
        employee.name = newName;
    }

    static void increment(int num) {
        num++;
    }

    public static void main(String[] args) {
        // Number x = 20;
        // Employee emp = new Employee();
        // emp.name = "Amir";
        // System.out.println(emp);
        // changeName(emp, "Jonathan");
        // System.out.println(emp);

        // int n = 10;
        // System.out.println(n);
        // increment(n);
        // System.out.println(n);
        
        int[] nums = {1,2,3};
        int[] nums2 = nums;
        System.out.println(nums);
        System.out.println(nums2);
    }


}

class Employee {
    String name;

    @Override
    public String toString() {
        return "{name : " + this.name + " }";
    }
}