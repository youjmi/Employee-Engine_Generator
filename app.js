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

buildManager = () => {
     inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Managers's name:",
            validate: (entryInput) => {
                if (entryInput) {
                    return true
                }
                else {
                    return "Please enter your Manager's name!"
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
}


buildEngineer = () => {

    inquirer
        .prompt([

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
            {
                type: "list",
                name: "addEmployee",
                message: "Is there another Employee you would like to add?",
                choices: [ 
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more additions"
                ]
            },

        ])
}


buildIntern = () => {
    inquirer.prompt([
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
        {
            type: "list",
            name: "addEmployee",
            message: "Is there another Employee you would like to add?",
            choices: [ 
                "Manager",
                "Engineer",
                "Intern",
                "No more additions"
            ]
        },
    ])
}





// addManager = ()=> {
//     buildManager().then((data) => {
//         const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
//         
//             fs.writeFile("ManagerTest.html", render(data), (err) => 
//             err ? console.log(err) : console.log("Success!!! ")
//         );
//         }
//     })

// }


// addEngineer = ()=> {
//     buildEngineer().then((data) => {
//         const engineer = new Engineer(data.name, data.id, data.email, data.github)
//         fs.writeFile("engineerTest.html", render(teamGroup), (err) => 
//                 err ? console.log(err) : console.log("Success!!! ")
//             );
//     })

// }

// addIntern = ()=> {
//     buildEngineer().then((data) => {
//         const intern = new Intern(data.name, data.id, data.email, data.school)
//         fs.writeFile("internTest.html", render(teamGroup), (err) => 
//                 err ? console.log(err) : console.log("Success!!! ")
//             );
//     })

// }

buildManager()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
