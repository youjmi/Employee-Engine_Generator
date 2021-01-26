const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamGroup = []

//Adding employee option//
const addEmployee = ([
    {
        type: "list",
        name: "add",
        message: "Who do you want to add?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "None"
        ]
    }
])
const buildManager = ([
    {
        type: "input",
        name: "name",
        message: "Managers's name:",
        validate: (entryInput) => {
            if (entryInput) {
                return true
            }
            else {
                return "Please enter Manager's name!"
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Manager's id:",
        validate: (entryInput) => {
            if (/^([1-9])$/.test(entryInput)) {
                return true
            }
            else {
                return "Please put a number between 1-9 only!"
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Manager's email:",
        validate: (entryInput) => {
            if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(entryInput)) {
                return true
            }
            else {
                return "Please put a valid email!"
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number:",
        validate: (entryInput) => {
            if (/^([1-9])$/.test(entryInput)) {
                return true
            }
            else {
                return "Please put the correct Office Number that is between 1-9 only!"
            }
        }
    },

])
const buildEngineer = ([
    {
        type: "input",
        name: "name",
        message: "Engineer's name:",
        validate: (entryInput) => {
            if (entryInput) {
                return true
            }
            else {
                return "Please enter your Engineer's name!"
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's id:",
        validate: (entryInput) => {
            if (/^([1-9])$/.test(entryInput)) {
                return true
            }
            else {
                //used Return instead of Console Log. Return presents the message more clearly into a different line and seperates any error input//
                return "Please put a number between 1-9 only!"
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email:",
        validate: (entryInput) => {
            if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(entryInput)) {
                return true
            }
            else {
                return "Please put a valid email!"
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Engineer's github:"
    },

])
const buildIntern = ([
    {
        type: "input",
        name: "name",
        message: "Intern's name:",
        validate: (entryInput) => {
            if (entryInput) {
                return true
            }
            else {
                return "Please enter your Intern's name!"
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Intern's id:",
        validate: (entryInput) => {
            if (/^([1-9])$/.test(entryInput)) {
                return true
            }
            else {
                return "Please put a number between 1-9 only!"
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email:",
        validate: (entryInput) => {
            if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(entryInput)) {
                return true
            }
            else {
                return "Please put a valid email!"
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Intern's school:"
    },
])
const nextPrompt = () => {
    inquirer.prompt(addEmployee)
        .then((data) => {
        if (data.add === "Manager") {
            managerPrompt()
        }
        else if (data.add === "Engineer") {
            engineerPrompt()
        }
        else if (data.add === "Intern") {
            internPrompt()
        }
        else {
            if (fs.existsSync (OUTPUT_DIR) != true ) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFile(outputPath, render(teamGroup), (err) =>
                err ? console.log(err) : console.log("Success! Here is your Team!")
            )
        }
    })
}
const managerPrompt = () => {
    inquirer.prompt(buildManager).then((data) => {
        teamGroup.push(new Manager(data.name, data.id, data.email, data.officeNumber))
        nextPrompt()
    })
}
const engineerPrompt = () => {
    inquirer.prompt(buildEngineer).then((data) => {
        teamGroup.push(new Engineer(data.name, data.id, data.email, data.github))
        nextPrompt()
    })
}
const internPrompt = () => {
    inquirer.prompt(buildIntern).then((data) => {
        teamGroup.push(new Intern(data.name, data.id, data.email, data.school))
        nextPrompt()
    })
}
nextPrompt()