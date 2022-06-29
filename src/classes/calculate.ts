import { Input } from "./input";

export class Calculator {
    private InputInstance: Input

    constructor(i: Input) {
        this.InputInstance = i;
    }

    calculate():string | number {
        return ""
    }
}