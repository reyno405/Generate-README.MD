const inquirer = require("inquirer")
const fileGenerator = require("./fileGenerator");
const fs = require("fs");


// questions to ask the user //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    }, {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    }, {
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    }, {
        type: "input",
        message: "Please describe the repository.",
        name: "description"
    }, {
        type: "input",
        message: "Please supply one references (1/1).",
        name: "ref1"
    }, {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    }, {
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribute"
    }, {
        type: "input",
        message: "State your accomplishments.",
        name: "accomplish"
    }, {
        type: "input",
        message: "Please state your end-goal.",
        name: "endgoal"
    }
];




// Function to write to my ReadMe.md file. //
inquirer.prompt(questions).then(function (response) {
    console.log(response);

    const content = fileGenerator(response);
    console.log(content);
    fs.writeFile("./ReadMe.md", content, function (err) {
        if (err) throw err
        console.log("success");
    });
}); 