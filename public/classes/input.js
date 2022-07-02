var Selection;
(function (Selection) {
    Selection["Chmod"] = "[0-7]{3}";
    Selection["Ninebit"] = "[-rwx]{9}";
    Selection["Umask"] = "[0-7]{3}";
})(Selection || (Selection = {}));
export class Input {
    constructor(fv, tv, ft, iv) {
        this.fromValue = fv;
        this.toValue = tv;
        this.fileType = ft;
        this.inputVal = iv;
        this.selection = this.assignSelection();
    }
    getFromValue() {
        return this.fromValue;
    }
    getSelection() {
        return this.selection;
    }
    getToValue() {
        return this.toValue;
    }
    checkValidInput() {
        switch (this.selection) {
            case Selection.Ninebit:
                const ninebit_exp = /[-rwx]{9}/;
                return ninebit_exp.test(this.inputVal);
            case Selection.Chmod:
                const chmod_exp = /[0-7]{3}/;
                return chmod_exp.test(this.inputVal);
            case Selection.Umask:
                const umask_exp = /[0-7]{3}/;
                return umask_exp.test(this.inputVal);
            default:
                return false;
        }
    }
    assignSelection() {
        if (this.fromValue !== this.toValue) {
            if (this.fromValue == "Chmod") {
                return Selection.Chmod;
            }
            if (this.fromValue == "9-bit") {
                return Selection.Ninebit;
            }
            if (this.fromValue == "Umask") {
                return Selection.Umask;
            }
        }
        throw console.error("Cannot convert between two of the same types");
    }
}
