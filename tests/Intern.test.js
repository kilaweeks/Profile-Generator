const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("should initialize correctly", () => {
        const intern = new Intern("Meredith","555", "meredith@test.com", "U of Scranton");
        expect(intern.name).toEqual("Meredith"); 
        expect(intern.id).toEqual("555"); 
        expect(intern.email).toEqual("meredith@test.com"); 
        expect(intern.school).toEqual("U of Scranton"); 
    })
    it("should return school correctly", () => {
        const intern = new Intern("Meredith","555", "meredith@test.com", "U of Scranton");
        expect(intern.getSchool()).toEqual("U of Scranton"); 
    })
    it("should return role correctly", () => {
        const intern = new Intern("Meredith","555", "meredith@test.com", "U of Scranton");
        expect(intern.getRole()).toEqual("Intern"); 
    })
    it("should have Intern title", () => {
        const intern = new Intern("Meredith","555", "meredith@test.com", "U of Scranton");
        expect(intern.generateCard()).toContain("Intern"); 
    })
    it("should have school label", () => {
        const intern = new Intern("Meredith","555", "meredith@test.com", "U of Scranton");
        expect(intern.generateCard()).toContain('<li class="list-group-item">School:'); 
    })
})