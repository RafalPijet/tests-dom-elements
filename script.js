const changeBig = document.getElementById("first-button");
const addSmall = document.getElementById("second-button");
const changeAllContent = document.getElementById("third-button");
const changeButtons = document.getElementById("fourth-button");
const outputBig = document.getElementById("big-output");
const outputSmall = document.getElementById("small-output");
let smallOutputCounter = 1;

const contentBigOutput = function (text) {
    outputBig.innerText = text;
};

const toggleColors = function () {
    this.classList.toggle("text-red");
};

const addSmallOutput = function (content) {
    const firstLine = document.querySelector(".first");
    let newElement = document.createElement("h3");
    newElement.innerText = content;
    newElement.classList.add("text-center");
    newElement.setAttribute("id", "small-button" + smallOutputCounter);
    newElement.addEventListener("click", toggleColors);
    smallOutputCounter++;
    firstLine.appendChild(newElement);

};

const changeAllContentForH = function (content) {
    let allHelements = document.getElementsByTagName("h3");

    for (let i = 0; i < allHelements.length; i++) {
        allHelements[i].innerText = content;
    }
    document.querySelector("h1").innerText = content;
};

const createForm = function() {
    const formElement = document.createElement("form");
    const labelFirstName = document.createElement("label");
    const labelSecondName = document.createElement("label");
    const inputFirstName = document.createElement("input");
    const inputSecondName = document.createElement("input");
    const buttonSubmit = document.createElement("button");
    formElement.classList.add("my-form");
    buttonSubmit.setAttribute("id", "submit-button");
    labelFirstName.setAttribute("for", "first-name");
    labelSecondName.setAttribute("for", "second-name");
    inputFirstName.setAttribute("id", "first-name");
    inputSecondName.setAttribute("id", "second-name");
    labelFirstName.innerText = "First name";
    labelSecondName.innerText = "Second name";
    buttonSubmit.innerText = "Submit";
    buttonSubmit.classList.add("btn-info");
    document.querySelector(".container").appendChild(formElement);
    formElement.appendChild(labelFirstName);
    formElement.appendChild(inputFirstName);
    formElement.appendChild(labelSecondName);
    formElement.appendChild(inputSecondName);
    formElement.appendChild(buttonSubmit);
};

outputSmall.addEventListener("click", toggleColors);

changeBig.addEventListener("click", function () {
    let name = prompt("Enter content to Big output:");
    contentBigOutput(name);
});

addSmall.addEventListener("click", function () {
    let content = prompt("Enter content to Small output:");
    addSmallOutput(content);
});

changeAllContent.addEventListener("click", function () {
    let content = prompt("Enter new content for all elements:");
    changeAllContentForH(content);
});

changeButtons.addEventListener("click", function () {
    let buttons = document.querySelector(".second").children;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("btn-danger");
        buttons[i].classList.toggle("btn-success");
    }
});

createForm();

const takeData = function () {
    document.querySelector(".my-form").addEventListener("submit", function (event) {
        event.preventDefault();
    });
    let firstName = document.getElementById("first-name").value;
    let secondName = document.getElementById("second-name").value;
    outputBig.innerText = firstName + " " + secondName;
};

document.getElementById("submit-button").addEventListener("click", takeData);
