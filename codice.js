class Truppa{

    truppaFazione;

    constructor(truppaFazione){
        this.truppaFazione = truppaFazione;

        if(truppaFazione == 1){
            this.inputHP = document.getElementById("inputHP1");
            this.inputDANNO = document.getElementById("inputDANNO1");
            this.inputDIFESA = document.getElementById("inputDIFESA1");
            this.inputATTACCO = document.getElementById("inputATTACCO1");
            this.inputATTACCHI = document.getElementById("inputATTACCHI1");
            this.inputMORALE = document.getElementById("inputMORALE1");
            this.inputTREUPPEINIZIALI = document.getElementById("inputTruppeIniziali1");
            this.inputTRUPPE = document.getElementById("inputTRUPPE1");
            this.displayMORALERIMASTO = document.getElementById("moraleRimasto1");
        }else if(truppaFazione == 2){
            this.inputHP = document.getElementById("inputHP2");
            this.inputDANNO = document.getElementById("inputDANNO2");
            this.inputDIFESA = document.getElementById("inputDIFESA2");
            this.inputATTACCO = document.getElementById("inputATTACCO2");
            this.inputATTACCHI = document.getElementById("inputATTACCHI2");
            this.inputMORALE = document.getElementById("inputMORALE2");
            this.inputTREUPPEINIZIALI = document.getElementById("inputTruppeIniziali2");
            this.inputTRUPPE = document.getElementById("inputTRUPPE2");
            this.displayMORALERIMASTO = document.getElementById("moraleRimasto2");
        }
    }

    aggiornareMorale(){
        //this.moraleMassimo = Number(this.inputTREUPPEINIZIALI.value) * Number(this.inputMORALE.value);
        this.displayMORALERIMASTO.textContent = Math.round(Number(this.inputMORALE.value) * Number(this.inputTRUPPE.value) / Number(this.inputTREUPPEINIZIALI.value));
    }

    getHP(hp){
        this.inputHP.value = hp;
    }

    setHP(){
        return this.inputHP.value;
    }

    getDANNO(danno){
        this.inputDANNO.value = danno;
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
        this.truppa1 = new Truppa(1);
        this.truppa2 = new Truppa(2);
    }

    onButtonClick(){
        console.log("pulsnte cliccato");
        this.stampareInput(this.truppa1);
        this.stampareInput(this.truppa2);
        this.truppa1.aggiornareMorale();
        this.truppa2.aggiornareMorale();
        lanciaDadi(5);
    }

    stampareInput(truppa){
        console.log("HP: " + truppa.inputHP.value + "\nDANNO: " + truppa.inputDANNO.value + "\nDIFESA: " + truppa.inputDIFESA.value + "\nATTACCO: " + truppa.inputATTACCO.value + "\nATTACCHI: " + truppa.inputATTACCHI.value + "\nMORALE: " + truppa.inputMORALE.value);
    }
}

//Per creare la classe, sennò non c'è nulla che la crea
const codice = new Codice();




//DADI
function lanciaDadi(numeroDadi, durataAnimazione = 1000, durataVisibile = 2000) {
    const contenitoreDadi = document.getElementById("contenitoreDadi");
    contenitoreDadi.innerHTML = ""; //cancella il contenuto di "contenitoreDadi"

    const dadi = [];

    // 1. Creazione dei dadi
    for (let i = 0; i < numeroDadi; i++) {
        const dado = document.createElement("div"); //"dado" è un nuovo elemento "generico" (è un "div")
        dado.classList.add("dadoAttacco"); //li dico che classe CSS deve usare il dado
        dado.textContent = "-";
        contenitoreDadi.appendChild(dado);
        dadi.push(dado);//aggiungo i "dado" alla lista di "dadi"
    }

    // 2. Animazione casuale veloce
    const intervalli = dadi.map(dado => {//"intervalli" contiene tutti i "setInterval" di ogni dado             //"map" esegue un metodo su tutti gli elementi di un array
        return setInterval(() => {//"setInterval" esegue una funzione ogni TOT tempo
            dado.textContent = Math.floor(Math.random() * 6) + 1;
        }, 50); //"50" è la velocità con cui viene iterato "setInterval"
    });

    // 3. Stop animazione dopo X ms
    setTimeout(() => {
        intervalli.forEach(interval => clearInterval(interval));

        // Risultato finale
        dadi.forEach(dado => {
            dado.textContent = Math.floor(Math.random() * 6) + 1;
        });

        // 4. Scomparsa dopo Y ms
        setTimeout(() => {
            contenitoreDadi.innerHTML = "";
        }, durataVisibile);

    }, durataAnimazione);
}
