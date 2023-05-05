import Aszinkron from "./Aszinkron.js";
import Termek from "./Termek.js";
//import { TERMEKLISTA } from "./adat.js";



class Termekek{
    #kedvencekLista = []
    constructor(){
        const aszinkron = new Aszinkron();
        let vegpont = "http://localhost:3000/TERMEKLISTA";
        aszinkron.adatBetolt(vegpont, this.megjelenit)
       

        $(window).on("kedvencekhez", (event)=>{
            this.#kedvencekLista.push(event.detail)
            console.log(this.#kedvencekLista)
        })

        $(window).on("torol", (event)=>{
            Aszinkron.adatTorol(vegpont, event.detail.id)
        })
    }
    megjelenit(adat){
        let termekLista = adat;
        const szuloElem = $("article");
        for (let index = 0; index < termekLista.length; index++) {
            const t1 = new Termek(szuloElem, termekLista[index]);
            
        }
    }
}


export default Termekek