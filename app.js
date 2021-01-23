const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



buildEngineer = () => {

    inquirer
        .prompt([

            {
                type: "input",
                name: "nameEngineer",
                message: "What is the Engineer's name?",


            },
            {
                type: "input",
                name: "idEngineer",
                message: "What is the Engineer's id?",
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
                name: "emailEngineer",
                message: "What is the Engineer's email?",
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
                name: "githubEngineer",
                message: "What is the Engineer's github?"
            },

        ])
//new Data
}






buildIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "nameIntern",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "idIntern",
            message: "What is the intern's id? ",
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
            name: "emailIntern",
            message: "What is the intern's email?",
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
            name: "schoolIntern",
            message: "What is the intern's school? "
        },



    ])
}

buildManager = () => {
    inquirer.prompt([


        {
            type: "input",
            name: "nameManager",
            message: "What is the Managers's name?"
        },
        {
            type: "input",
            name: "idManager",
            message: "What is the Manager's id?",
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
            name: "emailManager",
            message: "What is the Manager's email?",
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
            name: "officeNumberManager",
            message: "What is the Manager's office number?",
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




//newobject

//then data.. fs. ->Render 






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
