import { ChangeTitle } from "./classes/change-title.js";

const formTitle = document.getElementById('form__title')!;
const inputTitle = document.getElementsByClassName("form__label")!;
const fromSelect = document.getElementById("from") as HTMLSelectElement
const toSelect = document.getElementById("to") as HTMLSelectElement
let labelString: Element; 

[...inputTitle].filter((it) => {
    if (it.textContent == "Numeric Conversion") {
        labelString = it;
    }
})


const TextFunction = () => {
    const newTitle = new ChangeTitle(fromSelect!.value, toSelect!.value);
    formTitle.textContent = newTitle.newString();
    labelString.textContent = newTitle.getFromText();
}

fromSelect!.onchange =() => TextFunction()
toSelect!.onchange =() => TextFunction()
