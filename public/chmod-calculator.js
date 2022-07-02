import { ChangeTitle } from "./classes/change-title.js";
const formTitle = document.getElementById('form__title');
const inputElement = document.querySelector('input');
const inputTitle = document.getElementsByClassName("form__label");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const fileSelect = document.getElementById("file_type");
const submit = document.querySelector(".form__submit");
let labelText;
[...inputTitle].filter((it) => {
    if (it.textContent == "Numeric Conversion") {
        labelText = it;
    }
});
const TextFunction = () => {
    const newTitle = new ChangeTitle(fromSelect.value, toSelect.value);
    formTitle.textContent = newTitle.newString();
    labelText.textContent = newTitle.getFromText();
};
const PrintInfoToConsole = (fromValue, toValue, fileType, stringVal) => {
    console.log("From: " + fromValue + '\n', "To: " + toValue + '\n', "File Type: " + fileType + '\n', "String value: " + stringVal + '\n');
};
const gatherCombinations = (a) => {
    const result = [];
    [...a].forEach((char) => {
        const temp = [char];
        result.forEach((x) => {
            temp.push("" + x + char);
        });
        temp.forEach((xChar) => {
            result.push(xChar);
        });
    });
    return result;
};
console.log(gatherCombinations("rwx"));
fromSelect.onchange = () => TextFunction();
toSelect.onchange = () => TextFunction();
submit.addEventListener("click", () => PrintInfoToConsole(fromSelect.value, toSelect.value, fileSelect.value, inputElement.value));
