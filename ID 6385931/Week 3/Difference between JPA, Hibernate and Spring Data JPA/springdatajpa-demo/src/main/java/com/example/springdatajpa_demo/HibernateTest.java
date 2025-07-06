package com.example.springdatajpa_demo;

import com.example.springdatajpa_demo.entity.Employee;
import com.example.springdatajpa_demo.hibernate.HibernateExample;

public class HibernateTest {
    public static void main(String[] args) {
        HibernateExample example = new HibernateExample();
        Employee emp = new Employee("John", "Tester");
        Integer id = example.addEmployee(emp);
        System.out.println("Employee saved with ID: " + id);
    }
}
