export class Calculator {
    constructor(i) {
        this.gatherCombinations = (a) => {
            const result = [];
            [...a].forEach((char) => {
                const temp = [char];
                result.forEach((x) => {
                    temp.push("" + x + char);
                });
                temp.forEach((xChar) => {
                    result.push(xChar);
                });
            });
            return result;
        };
        this.inputInstance = i;
    }
    gatherRelevantVal() {
        const nineBitMap = new Map();
        const combArr = this.gatherCombinations("rwx");
        combArr.forEach((combVal) => {
            var num = 0;
            if (combVal.includes("r")) {
                num += 4;
            }
            if (combVal.includes("w")) {
                num += 2;
            }
            if (combVal.includes("x")) {
                num += 1;
            }
            nineBitMap.set(combVal, num);
        });
        return nineBitMap;
    }
    calculate() {
        if (!this.inputInstance.checkValidInput()) {
            throw console.error("Inputs are invalid");
        }
        switch (this.inputInstance.getFromValue()) {
            case "Chmod":
                const convertedChmodVal = this.calculateFromChmod(this.inputInstance.getToValue(), this.inputInstance.getFileType());
            case "Umask":
                const convertedUmaskVal = this.calculateFromUmask(this.inputInstance.getToValue(), this.inputInstance.getFileType());
            case "9-bit":
                const convertedNinebitVal = this.calculateFromNineBit(this.inputInstance.getToValue(), this.inputInstance.getFileType());
                return convertedNinebitVal;
        }
        return "";
    }
    calculateFromChmod(toValue, fileType) {
        switch (toValue) {
            case "9-bit":
                const inputArr = [...this.inputInstance.getInputVal()];
                inputArr.forEach;
            case "Umask":
        }
        return 0;
    }
    calculateFromUmask(toValue, file_type) {
        return 0;
    }
    calculateFromNineBit(toValue, file_type) {
        switch (toValue) {
            case "Umask":
                const umaskVal = 0;
                const inputArr = [...this.inputInstance.getInputVal()];
                inputArr.forEach((ia) => {
                });
            case "Chmod":
                var chmodStr = "";
                const permsMap = this.gatherRelevantVal();
                console.log(permsMap);
                const inputVal = this.inputInstance.getInputVal().match(/.{1,3}/g) || [];
                inputVal.forEach((xVal) => {
                    xVal = xVal.replaceAll("-", "");
                    chmodStr += permsMap.get(xVal);
                });
                return chmodStr;
        }
        return "";
    }
}
