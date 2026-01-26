class Truppa{

    constructor(){
        this.inputHP = document.getElementById("inputHP1");
        this.inputDANNO = document.getElementById("inputDANNO1");
        this.inputDIFESA = document.getElementById("inputDIFESA1");
        this.inputATTACCO = document.getElementById("inputATTACCO1");
        this.inputATTACCHI = document.getElementById("inputATTACCHI1");
        this.inputMORALE = document.getElementById("inputMORALE1");
    }

    getHP(hp){
        this.inputHP.value = hp;
    }

    setHP(){
        return this.inputHP.value;
    }

    getDANNO(danno){
        this.inputDANNO.value = DANNO;
    }

    setDANNO(){
        return this.inputDANNO.value;
    }

    getDIFESA(difesa){
        this.inputDIFESA.value = difesa;
    }

    setDIFESA(){
        return this.inputDIFESA.value;
    }

    getATTACCHI(attacchi){
        this.inputATTACCHI.value = attacchi;
    }

    setATTACCHI(){
        return this.inputATTACCHI.value;
    }

    getMORALE(morale){
        this.inputMORALE.value = morale;
    }

    setMORALE(){
        return this.inputMORALE.value;
    }


}

class Codice{

    constructor(){
        this.buttonRissa = document.getElementById("buttonRissa");
        this.buttonRissa.addEventListener("click", () => this.onButtonClick());
        this.truppa1 = new Truppa();
        this.truppa2 = new Truppa();
    }

    onButtonClick(){
        console.log("pulsnte cliccato");
        this.stampareInput();
    }

    stampareInput(){
        console.log("HP: " + this.inputHP.value + "\nDANNO: " + this.inputDANNO.value + "\nDIFESA: " + this.inputDIFESA.value + "\nATTACCO: " + this.inputATTACCO.value + "\nTRUPPE: " + this.inputTRUPPE.value + "\nMORALE: " + this.inputMORALE.value);
    }
}

//Per creare la classe, sennò non c'è nulla che la crea
const codice = new Codice();