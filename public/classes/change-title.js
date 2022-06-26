export class ChangeTitle {
    constructor(a, b) {
        this.fromText = a;
        this.toText = b;
    }
    getFromText() {
        return this.fromText;
    }
    newString() {
        return this.fromText + " to " + this.toText + " converter";
    }
}
