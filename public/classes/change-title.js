export class ChangeTitle {
    constructor(a, b) {
        this.fromText = a;
        this.toText = b;
    }
    newString() {
        return this.fromText + " to " + this.toText + " converter";
    }
}
