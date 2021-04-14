const Employee = require("../lib/Employee"); 

describe("Employee", () => {
        it("should initialize correctly", () => {
            const employee = new Employee("Michael","111", "michael@test.com");
            expect(employee.name).toEqual("Michael"); 
            expect(employee.id).toEqual("111"); 
            expect(employee.email).toEqual("michael@test.com"); 
        })
        it("should return name correctly", () => {
            const employee = new Employee("Michael","111", "michael@test.com");
            expect(employee.getName()).toEqual("Michael"); 
        })
        it("should return ID correctly", () => {
            const employee = new Employee("Michael","111", "michael@test.com");
            expect(employee.getId()).toEqual("111"); 
        })
        it("should return email correctly", () => {
            const employee = new Employee("Michael","111", "michael@test.com");
            expect(employee.getEmail()).toEqual("michael@test.com"); 
        })
        it("should return role correctly", () => {
            const employee = new Employee("Michael","111", "michael@test.com");
            expect(employee.getRole()).toEqual("Employee"); 
        })
})