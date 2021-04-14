const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    it("should initialize correctly", () => {
        const engineer = new Engineer("Dwight","222", "dwight@test.com", "dshrute");
        expect(engineer.name).toEqual("Dwight"); 
        expect(engineer.id).toEqual("222"); 
        expect(engineer.email).toEqual("dwight@test.com"); 
        expect(engineer.github).toEqual("dshrute"); 
    })
    it("should return Github correctly", () => {
        const engineer = new Engineer("Dwight", "222", "dwight@test.com", "dshrute"); 
        expect(engineer.getGithub()).toEqual("dshrute"); 
    })
    it("should return role correctly", () => {
        const engineer = new Engineer("Dwight", "222", "dwight@test.com", "dshrute"); 
        expect(engineer.getRole()).toEqual("Engineer"); 
    })
    it("should have Engineer title", () => {
        const engineer = new Engineer("Dwight", "222", "dwight@test.com", "dshrute"); 
        expect(engineer.generateCard()).toContain("Engineer"); 
    })
    it("should have Github label", () => {
        const engineer = new Engineer("Dwight", "222", "dwight@test.com", "dshrute"); 
        expect(engineer.generateCard()).toContain('<li class="list-group-item">GitHub:'); 
    })
})