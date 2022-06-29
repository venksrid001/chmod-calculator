export class ChangeTitle {
    constructor(a, b) {
        this.fromText = a;
        this.toText = b;
    }
    getFromText() {
        return this.fromText;
    }
    getToText() {
        return this.toText;
    }
    newString() {
        return this.fromText + " to " + this.toText + " converter";
    }
}
