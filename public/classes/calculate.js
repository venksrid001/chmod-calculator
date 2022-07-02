export class Calculator {
    constructor(i) {
        this.inputInstance = i;
    }
    gatherCombinations(a) {
        const result = [];
        [...a].forEach((char) => {
            const temp = [];
            for (let x in result) {
                temp.push(result[x] + char);
            }
            result.concat(temp);
        });
        return result;
    }
    gatherRelevantVal(fromValue, toValue) {
        switch (fromValue) {
            case "Chmod":
                if (toValue == "Umask") {
                    return new Map([
                        ["r", 4], ["w", 2], ["x", 1]
                    ]);
                }
                else {
                }
        }
        return new Map;
    }
    calculate() {
        if (!this.inputInstance.checkValidInput()) {
            throw console.error("Inputs are invalid");
        }
        return "";
    }
}
