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
        nineBitMap.set("---", 0);
        return nineBitMap;
    }
    getMapKey(permsMap, searchVal) {
        for (let [key, val] of permsMap.entries()) {
            if (val == searchVal) {
                let newString = "";
                if (key.length === 1) {
                    if (key == "r") {
                        newString = key + "--";
                    }
                    if (key == "w") {
                        newString = "-" + key + "-";
                    }
                    if (key == "x") {
                        newString = "--" + key;
                    }
                }
                else if (key.length < 3) {
                    if (!key.includes("r")) {
                        newString = "-" + key.substring(0, key.length);
                    }
                    if (!key.includes("w")) {
                        newString = key.substring(0, 1) + "-" + key.substring(1, key.length);
                    }
                    if (!key.includes("x")) {
                        newString = key.substring(0, key.length) + "-";
                    }
                }
                else {
                    return key;
                }
                return newString;
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
                return convertedUmaskVal;
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
                const fileMax = fileType == "File" ? 6 : 7;
                var umaskVal = "";
                const chmodArr = [...this.inputInstance.getInputVal()];
                chmodArr.forEach((cm) => {
                    const number = parseInt(cm);
                    umaskVal += fileMax - number;
                });
                return umaskVal;
        }
        return 0;
    }
    calculateFromUmask(toValue, file_type) {
        const permsMap = this.gatherRelevantVal();
        let fileVal = file_type == "File" ? 6 : 7;
        switch (toValue) {
            case "9-bit":
                let ninebitVal = "";
                const inputArr = [...this.inputInstance.getInputVal()];
                inputArr.forEach((iv) => {
                    const umasknum = fileVal - parseInt(iv);
                    const val = this.getMapKey(permsMap, umasknum);
                    ninebitVal += val;
                });
                return ninebitVal;
            case "Chmod":
                let chmodVal = "";
                const umaskArr = [...this.inputInstance.getInputVal()];
                umaskArr.forEach((um) => {
                    const num = parseInt(um);
                    chmodVal += fileVal - num;
                });
                return chmodVal;
        }
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
