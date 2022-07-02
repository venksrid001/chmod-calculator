import { Input } from "./input";

export class Calculator {
    private inputInstance: Input

    constructor(i: Input) {
        this.inputInstance = i;
    }

    gatherCombinations = (a:string): string[] => {
        const result:string[] = [];
        
        [...a].forEach((char) => {
            const temp:string[] = [char]
            result.forEach((x) => {
                temp.push("" + x + char)
            })
            temp.forEach((xChar) => {
                result.push(xChar)
            })
        })
        return result;
    }

    gatherRelevantVal(fromValue: string, toValue: string): Map<string, number> {
        
        switch (fromValue) {
            case "Chmod":
                if (toValue == "Umask") {
                    return new Map<string, number>([
                        ["r", 4], ["w", 2], ["x", 1]
                    ])
                } else {
                    
                }
        }

        return new Map<string, number>;
    }


   

    calculate():string | number {
        
        if (!this.inputInstance.checkValidInput()) {throw console.error("Inputs are invalid")}
        return ""
    }
}