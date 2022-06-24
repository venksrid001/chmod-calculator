import { ChangeTitle } from "./classes/change-title.js";
const formTitle = document.getElementById('form__title');
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const TextFunction = () => {
    const newTitle = new ChangeTitle(fromSelect.value, toSelect.value);
    formTitle.textContent = newTitle.newString();
};
fromSelect.onchange = () => TextFunction();
toSelect.onchange = () => TextFunction();
