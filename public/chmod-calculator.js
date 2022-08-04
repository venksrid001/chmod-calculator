import { Calculator } from "./classes/calculate.js";
import { ChangeTitle } from "./classes/change-title.js";
import { Input } from "./classes/input.js";
const formTitle = document.getElementById('form__title');
const inputElement = document.querySelector('input');
const inputTitle = document.getElementsByClassName("form__label");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const fileSelect = document.getElementById("file_type");
const submit = document.querySelector(".form__submit");
const footer = document.querySelector("footer");
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
const CalculateVals = (fromValue, toValue, fileType, stringVal) => {
    try {
        const inputval = new Input(fromValue, toValue, fileType, stringVal);
        const calculator = new Calculator(inputval);
        console.log(calculator.calculate());
        footer.innerHTML = `<div id="result_title"> The value is ${calculator.calculate()} </div>`;
    }
    catch (error) {
        inputElement.style.border = '1px solid #FF6666';
    }
};
fromSelect.onchange = () => TextFunction();
toSelect.onchange = () => TextFunction();
submit.addEventListener("click", () => CalculateVals(fromSelect.value, toSelect.value, fileSelect.value, inputElement.value));
