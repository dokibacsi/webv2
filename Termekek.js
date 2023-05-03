import Termek from "./Termek.js";
import { TERMEKLISTA } from "./adat.js";

class Termekek{
    constructor(){
        const szuloElem = $('article')
        for (let index = 0; index < TERMEKLISTA.length; index++) {
            const TRMK = new Termek(szuloElem, TERMEKLISTA[index])
            console.log(TRMK)
        }
    }
}


export default Termekek