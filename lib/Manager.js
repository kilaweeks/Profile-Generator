const Employee = require("./Employee"); 

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber() {
        return this.officeNumber; 
    }
    getRole() {
        return "Manager"; 
    }
    generateCard() {
        return `
     <div class="col-6">
       <div class="card mx-auto shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem">
         <h5 class="card-header text-white bg-dark mb-3">${this.name}<br><br>${this.getRole()}</h5>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${this.id}</li>
             <li class="list-group-item">Email: ${this.email}</li>
             <li class="list-group-item">Phone: ${this.officeNumber}</li>
         </ul>
     </div>
   </div> 
   `
    }
}

module.exports = Manager; 