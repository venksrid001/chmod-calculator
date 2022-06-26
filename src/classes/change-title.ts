export class ChangeTitle {
    private fromText: string;
    private toText: string;
    
    constructor(a:string,b:string) {
        this.fromText = a;
        this.toText = b;
    }
    getFromText(): string {
        return this.fromText;
    }

    newString(): string {
        return this.fromText + " to " + this.toText + " converter";
    }




}