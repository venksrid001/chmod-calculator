import { Calculator } from "./classes/calculate.js";
import { ChangeTitle } from "./classes/change-title.js";
import { Input } from "./classes/input.js";

const formTitle = document.getElementById('form__title')!;
const inputElement = document.querySelector('input')!;
const inputTitle = document.getElementsByClassName("form__label")!;
const fromSelect = document.getElementById("from") as HTMLSelectElement
const toSelect = document.getElementById("to") as HTMLSelectElement
const fileSelect = document.getElementById("file_type") as HTMLSelectElement;
const submit = document.querySelector(".form__submit") as HTMLElement;

let labelText: Element; 

[...inputTitle].filter((it) => {
    if (it.textContent == "Numeric Conversion") {
        labelText = it;
    }
})


const TextFunction = () => {
    const newTitle = new ChangeTitle(fromSelect!.value, toSelect!.value);
    formTitle.textContent = newTitle.newString();
    labelText.textContent = newTitle.getFromText();
}

const CalculateVals = (fromValue: string, toValue: string, fileType: string, stringVal: string) => {
    const inputval = new Input(fromValue, toValue, fileType, stringVal);
    const calculator = new Calculator(inputval);
    console.log(calculator.calculate())
}

fromSelect!.onchange =() => TextFunction()
toSelect!.onchange =() => TextFunction()
submit!.addEventListener("click", () => CalculateVals(fromSelect!.value, toSelect!.value, fileSelect!.value, inputElement.value))