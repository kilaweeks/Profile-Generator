const Manager = require("../lib/Manager")

describe("Manager", () => {
    it("should initialize correctly", () => {
        const manager = new Manager("Pam","333", "pam@test.com", "333-3333");
        expect(manager.name).toEqual("Pam"); 
        expect(manager.id).toEqual("333"); 
        expect(manager.email).toEqual("pam@test.com"); 
        expect(manager.officeNumber).toEqual("333-3333"); 
    })
    it("should return office number correctly", () => {
        const manager = new Manager("Pam","333", "pam@test.com", "333-3333");
        expect(manager.getOfficeNumber()).toEqual("333-3333"); 
    })
    it("should return role correctly", () => {
        const manager = new Manager("Pam","333", "pam@test.com", "333-3333");
        expect(manager.getRole()).toEqual("Manager"); 
    })
    it("should have Manager title", () => {
        const manager = new Manager("Pam","333", "pam@test.com", "333-3333");
        expect(manager.generateCard()).toContain("Manager"); 
    })
    it("should have office number label", () => {
        const manager = new Manager("Pam","333", "pam@test.com", "333-3333");
        expect(manager.generateCard()).toContain('li class="list-group-item">Phone:'); 
    })
})