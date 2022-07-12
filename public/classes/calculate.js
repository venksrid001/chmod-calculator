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
    getMapKey(permsMap, searchVal) {
        for (let [key, val] of permsMap.entries()) {
            if (val == searchVal) {
                return key;
            }
        }
        throw console.error("Value does not exist in permissions map");
    }
    calculate() {
        if (!this.inputInstance.checkValidInput()) {
            throw console.error("Inputs are invalid");
        }
        switch (this.inputInstance.getFromValue()) {
            case "Chmod":
                const convertedChmodVal = this.calculateFromChmod(this.inputInstance.getToValue(), this.inputInstance.getFileType());
                return convertedChmodVal;
            case "Umask":
                const convertedUmaskVal = this.calculateFromUmask(this.inputInstance.getToValue(), this.inputInstance.getFileType());
            case "9-bit":
                const convertedNinebitVal = this.calculateFromNineBit(this.inputInstance.getToValue(), this.inputInstance.getFileType());
                return convertedNinebitVal;
        }
        return "";
    }
    calculateFromChmod(toValue, fileType) {
        const permsMap = this.gatherRelevantVal();
        switch (toValue) {
            case "9-bit":
                var chmodVal = "";
                const inputArr = [...this.inputInstance.getInputVal()];
                inputArr.forEach((iv) => {
                    const num = parseInt(iv);
                    chmodVal += this.getMapKey(permsMap, num);
                });
                return chmodVal;
            case "Umask":
        }
        return 0;
    }
    calculateFromUmask(toValue, file_type) {
        return 0;
    }
    calculateFromNineBit(toValue, file_type) {
        const permsMap = this.gatherRelevantVal();
        switch (toValue) {
            case "Umask":
                var umaskVal = "";
                const inputArr = this.inputInstance.getInputVal().match(/.{1,3}/g) || [];
                inputArr.forEach((ia) => {
                    ia = ia.replaceAll("-", "");
                    if (file_type == "File") {
                        var tempVal = 6 - permsMap.get(ia);
                        if (tempVal == -1) {
                            tempVal = 0;
                        }
                        umaskVal += tempVal;
                    }
                    else {
                        umaskVal += 7 - permsMap.get(ia);
                    }
                });
                return umaskVal;
            case "Chmod":
                var chmodStr = "";
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
