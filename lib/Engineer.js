const Employee = require("./Employee"); 

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email); 
      this.github = github; 
    } 
    getGithub() {
        return this.github;
    }
    getRole() {
      return "Engineer"; 
    }
    generateCard() {
     return `
  <div class="col-4">
    <div class="card mx-auto shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem">
      <h5 class="card-header text-white bg-dark mb-3">${this.name}<br><br>${this.getRole()}</h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">GitHub: <a href="http://github.com/${this.github}" target="_blank">${this.github}</a></li>
      </ul>
  </div>
</div> 
`
    }
  } 


module.exports = Engineer; 