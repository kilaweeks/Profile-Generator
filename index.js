const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let team = [];

// Create writeFile function
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the team manager's name."
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the team manager's ID number."
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team manager's email address."
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the team manager's office phone number."
    }
  ])
    .then(data => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      return addEmployee();
    })
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add an employee to the team?',
      choices: ['Yes, add Engineer', 'Yes, add Intern', "No, I'm finished"],
      default: "No, I'm finished"
    }
  ])
    .then(data => {
      switch (data.addEmployee) {
        case 'Yes, add Engineer':
          return addEngineer();
          break;

        case "Yes, add Intern":
          return addIntern();
          break;

        case "No, I'm finished":
          return generateHTML();
      }
    })
}

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the engineer's name."
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the enginner's ID number."
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the engineer's email address."
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the engineer's Github username."
    }
  ])
    .then(data => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const github = data.github;
      const engineer = new Engineer(name, id, email, github);
      team.push(engineer);
      return addEmployee();
    })
}
const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the intern's name."
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the intern's ID number."
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the intern's email address."
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter the name of the intern's school."
    }
  ])
    .then(data => {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const school = data.school;
      const intern = new Intern(name, id, email, school);
      team.push(intern);
      return addEmployee();
    })
}

function generateHTML() {
  return readFileAsync('./src/template.html', 'utf8') 
  .then(template => {
    console.log(template)
    return template.replace("{placeholder}", team.map((employee) => {
      return employee.generateCard()
    }).join(""))
  });
}

  // Write file
const init = () => {
          promptUser()
            .then(() => generateHTML()) 
            .then((content) => writeFileAsync('./dist/generatedHTML.html', content))
            .then(() => console.log('Successfully wrote HTML file'))
            .catch((err) => console.error(err));
};

init();