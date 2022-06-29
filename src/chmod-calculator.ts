import { ChangeTitle } from "./classes/change-title.js";

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

const PrintInfoToConsole = (fromValue: string, toValue: string, fileType: string, stringVal: string) => {
    console.log(
        "From: " + fromValue+'\n', 
        "To: "+ toValue+ '\n',
        "File Type: " +fileType+'\n', 
        "String value: " + stringVal+ '\n'
    )
}

fromSelect!.onchange =() => TextFunction()
toSelect!.onchange =() => TextFunction()
submit!.addEventListener("click", () => PrintInfoToConsole(fromSelect!.value, toSelect!.value, fileSelect!.value, inputElement.value))