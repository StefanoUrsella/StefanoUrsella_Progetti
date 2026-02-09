class Truppa{

    truppaFazione;

    constructor(truppaFazione){
        this.truppaFazione = truppaFazione;

        this.tiriAttacco1 = [];
        this.tiriDifesa1 = [];
        this.tiriAttacco2 = [];
        this.tiriDifesa2 = [];

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
        this.modificatoreAttacco1 = document.getElementById("modificatoreAttacco1");
        this.modificatoreDifesa1 = document.getElementById("modificatoreDifesa1");
        
        this.modificatoreAttacco2 = document.getElementById("modificatoreAttacco2");
        this.modificatoreDifesa2 = document.getElementById("modificatoreDifesa2");

        this.modificatoreAttacco1.textContent = this.truppa1.inputATTACCO.value;
        this.modificatoreDifesa1.textContent = this.truppa2.inputDIFESA.value;

        this.modificatoreAttacco2.textContent = this.truppa2.inputATTACCO.value;
        this.modificatoreDifesa2.textContent = this.truppa1.inputDIFESA.value;
 
        this.tiriAttacco1 = [];
        this.tiriDifesa1 = [];
        this.tiriAttacco2 = [];
        this.tiriDifesa2 = [];

        this.lanciaDadi((Number(this.truppa1.inputTRUPPE.value)*Number(this.truppa1.inputATTACCHI.value)), "attacco1");
        this.lanciaDadi((Number(this.truppa1.inputTRUPPE.value)*Number(this.truppa1.inputATTACCHI.value)), "difesa1");
        this.lanciaDadi((Number(this.truppa2.inputTRUPPE.value)*Number(this.truppa2.inputATTACCHI.value)), "attacco2");
        this.lanciaDadi((Number(this.truppa2.inputTRUPPE.value)*Number(this.truppa2.inputATTACCHI.value)), "difesa2");

        console.log(this.tiriAttacco1);
        console.log(this.tiriDifesa1);
        console.log(this.tiriAttacco2);
        console.log(this.tiriDifesa2);

        
    }

    calcolareDanni(attacco, difesa, danno){
        let danniInflitti = 0;
           for(let i=0; i<attacco.length; i++){
            if(attacco[i]>difesa[i]){
                danniInflitti += danno;
            }
        }
        return danniInflitti;
    }

    aggiornareListeDadi(risultatoDado, tipoDadi){
        if(tipoDadi == "attacco1"){
            this.tiriAttacco1.push(risultatoDado+Number(this.modificatoreAttacco1.textContent));
            this.tiriAttacco1 = this.ordinareListeBoubleSort(this.tiriAttacco1);

        }else if(tipoDadi == "difesa1"){
            this.tiriDifesa1.push(risultatoDado+Number(this.modificatoreDifesa2.textContent));
            this.tiriDifesa1 = this.ordinareListeBoubleSort(this.tiriDifesa1);

        }else if(tipoDadi == "attacco2"){
            this.tiriAttacco2.push(risultatoDado+Number(this.modificatoreAttacco2.textContent));
            this.tiriAttacco2 = this.ordinareListeBoubleSort(this.tiriAttacco2);

        }else if(tipoDadi == "difesa2"){
            this.tiriDifesa2.push(risultatoDado+Number(this.modificatoreDifesa1.textContent));
            this.tiriDifesa2 = this.ordinareListeBoubleSort(this.tiriDifesa2);

        }
    }

    ordinareListeBoubleSort(tiri){
        for(let i=0; i<tiri.length; i++){
            for(let j=0; j<tiri.length-i-1; j++){
                if(tiri[j]<tiri[j+1]){
                    let valoreTemporaneo = tiri[j+1];
                    tiri[j+1] = tiri[j];
                    tiri[j] = valoreTemporaneo;
                }
            }
        }

        return tiri;
    }

    modificareListeTiri(tiri, tipoDadi){
        let modificatore;
        if(tipoDadi == "attacco1"){
            modificatore = this.modificatoreAttacco1.value;
        }else if(tipoDadi == "difesa1"){
            modificatore = this.modificatoreDifesa1.value;
        }else if(tipo == "attacco2"){
            modificatore = this.modificatoreAttacco2.value;
        }else if(tipo == "difesa2"){
            modificatore = this.modificatoreDifesa2.value;
        }

        for(let i=0; i<tiri.length; i++){
            tiri[i] = tiri[i]+modificatore;
        }

        console.log(tiri);
        return tiri;
    }

    stampareInput(truppa){
        console.log("HP: " + truppa.inputHP.value + "\nDANNO: " + truppa.inputDANNO.value + "\nDIFESA: " + truppa.inputDIFESA.value + "\nATTACCO: " + truppa.inputATTACCO.value + "\nATTACCHI: " + truppa.inputATTACCHI.value + "\nMORALE: " + truppa.inputMORALE.value);
    }


    //DADI
    lanciaDadi(numeroDadi, tipoDadi) {
        let durataAnimazione = 1000;
        let durataVisibile = 2000;
        
        let contenitoreDadi;

        if(tipoDadi == "attacco1"){
            contenitoreDadi = document.getElementById("contenitoreDadiAttacco1");
        }else if(tipoDadi == "difesa1"){
            contenitoreDadi = document.getElementById("contenitoreDadiDifesa1");
        }else if(tipoDadi == "attacco2"){
            contenitoreDadi = document.getElementById("contenitoreDadiAttacco2");
        }else if(tipoDadi == "difesa2"){
            contenitoreDadi = document.getElementById("contenitoreDadiDifesa2");
        }
        
        const vecchiDadi = contenitoreDadi.querySelectorAll('.dadoAttacco, .dadoDifesa');/*prendi tutti i dadi vecchi*/
        vecchiDadi.forEach(d => d.remove());/*cancella tutti i dadi vecchi*/

        const dadi = [];

        // 1. Creazione dei dadi
        for (let i = 0; i < numeroDadi; i++) {
            const dado = document.createElement("div"); //"dado" è un nuovo elemento "generico" (è un "div")
            if(tipoDadi == "attacco1" || tipoDadi == "attacco2"){
                dado.classList.add("dadoAttacco"); //li dico che classe CSS deve usare il dado
            }else if(tipoDadi == "difesa1" || tipoDadi == "difesa2"){
                dado.classList.add("dadoDifesa"); //li dico che classe CSS deve usare il dado
            }
            
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
            intervalli.forEach(interval => clearInterval(interval));// passa ogni "interval" (ID per i dadi) contenuto in "intervalli"-->lo passa a "clearInterval"-->cancella il timer

            // Risultato finale
            dadi.forEach(dado => {
                dado.textContent = Math.floor(Math.random() * 6) + 1;
                this.aggiornareListeDadi(Number(dado.textContent), tipoDadi);
            });

            // 4. Scomparsa dopo Y ms
            setTimeout(() => {
                const vecchiDadi = contenitoreDadi.querySelectorAll('.dadoAttacco, .dadoDifesa');/*prendi tutti i dadi vecchi*/
                vecchiDadi.forEach(d => d.remove());/*cancella tutti i dadi vecchi*/
            }, durataVisibile); // quando scatta questo tempo-->i si fa il "setTimeout()"-->i dadi vengono cancellati

        }, durataAnimazione);// quando scatta questo tempo-->i si fa il "setTimeout()"-->ferma l'animazione
    }

}

//Per creare la classe, sennò non c'è nulla che la crea
const codice = new Codice();
