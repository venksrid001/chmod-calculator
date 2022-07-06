import { Input } from "./input.js";

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

    gatherRelevantVal(): Map<string, number> {
        
        const nineBitMap:Map<string,number> = new Map<string, number>();
        const combArr:string[] = this.gatherCombinations("rwx");
        combArr.forEach((combVal) => {
            var num:number = 0;
            if (combVal.includes("r")) {num += 4}
            if (combVal.includes("w")) {num += 2}
            if (combVal.includes("x")) {num += 1}
            nineBitMap.set(combVal,num)
            
        })

        return nineBitMap;
                    
                        
    

        
    }


   

    calculate():string | number {
        
        if (!this.inputInstance.checkValidInput()) {throw console.error("Inputs are invalid")}
        
        switch (this.inputInstance.getFromValue()) {
            case "Chmod":
              const convertedChmodVal:string | number = this.calculateFromChmod(this.inputInstance.getToValue(), this.inputInstance.getFileType())
            case "Umask":
                const convertedUmaskVal: string | number = this.calculateFromUmask(this.inputInstance.getToValue(), this.inputInstance.getFileType())
            case "9-bit":
                const convertedNinebitVal: string = this.calculateFromNineBit(this.inputInstance.getToValue(), this.inputInstance.getFileType())
                return convertedNinebitVal;
        }
        

        return ""
    }

    calculateFromChmod(toValue: string, fileType: string): string | number {
        switch(toValue) {
            case "9-bit":
                const inputArr = [...this.inputInstance.getInputVal()];
                inputArr.forEach
            case "Umask":

        }
        return 0;
    }

    calculateFromUmask(toValue: string, file_type: string): string | number {
        return 0;
    }

    calculateFromNineBit(toValue: string, file_type: string): string {
        switch(toValue) {
            case "Umask":
                const umaskVal:number = 0;
                const inputArr = [...this.inputInstance.getInputVal()];
                inputArr.forEach((ia) => {
                    
                })
            case "Chmod":
                var chmodStr:string = ""
                const permsMap:Map<string, number> = this.gatherRelevantVal();
                
                const inputVal:string[] = this.inputInstance.getInputVal().match(/.{1,3}/g) || []

                inputVal.forEach((xVal) => {
                    xVal =  xVal.replaceAll("-", "")
                    chmodStr += permsMap.get(xVal);
                })
                return chmodStr;
        }
        return "";
    }
}