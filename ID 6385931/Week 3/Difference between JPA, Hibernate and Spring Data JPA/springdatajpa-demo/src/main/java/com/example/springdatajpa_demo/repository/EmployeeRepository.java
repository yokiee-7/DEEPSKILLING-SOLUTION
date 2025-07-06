package com.example.springdatajpa_demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springdatajpa_demo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
