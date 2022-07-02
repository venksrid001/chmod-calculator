enum Selection {
    Chmod = "[0-7]{3}",     
    Ninebit = "[-rwx]{9}",
    Umask = "[0-7]{3}"    
}

export class Input {
    private fromValue: string
    private toValue: string
    private fileType: string
    private inputVal: string
    private selection: Selection

    constructor(fv: string, tv: string, ft: string, iv: string) {
        this.fromValue = fv;
        this.toValue = tv;
        this.fileType = ft;
        this.inputVal = iv;
        this.selection = this.assignSelection();
        
    }

    getFromValue(): string {
        return this.fromValue;
    }

    getSelection(): Selection {
        return this.selection;
    }

    getToValue(): string {
        return this.toValue;
    }

    

    checkValidInput(): boolean {
        switch(this.selection) {
            case Selection.Ninebit:
                const ninebit_exp = /[-rwx]{9}/
                return ninebit_exp.test(this.inputVal)
            case Selection.Chmod:
                const chmod_exp = /[0-7]{3}/
                return chmod_exp.test(this.inputVal)
            case Selection.Umask:
                const umask_exp = /[0-7]{3}/
                return umask_exp.test(this.inputVal)
            
            default:
                return false;
        }
    }

    assignSelection(): Selection {
        if (this.fromValue !== this.toValue) {
            
            if (this.fromValue == "Chmod") {return Selection.Chmod}
            if (this.fromValue == "9-bit") {return Selection.Ninebit}
            if (this.fromValue == "Umask") {return Selection.Umask}
        } 

        throw console.error("Cannot convert between two of the same types")
        
    }

    


}