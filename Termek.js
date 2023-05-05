class Termek{
    #kedvenc = $("div:last-child .kedvenc")
    #torol = $("div:last-child .torol")
    constructor(szuloElem, termek){
        this.szuloElem = szuloElem;
        this.termek = termek
        szuloElem.append(`<div class=termekDiv"><h3>${termek.nev}</h3><img src="${termek.eleresiUt}"><p>Ár: ${termek.ar} Ft.</p><button class="kedvenc">Kedvencekhez add</button><button class="torol">Törlésre fel!</button></div>`)
        this.#kedvenc.on('click', ()=>{
            this.esemenyTrigger()
        })
        this.#torol.on('click', ()=>{
            console.log(event.detail)
            this.esemenyTrigger2();
        })
    }

    esemenyTrigger(){
        const KEDVENC = new CustomEvent("kedvencekhez", {detail:this.termek});
        window.dispatchEvent(KEDVENC);
    }
    esemenyTrigger2(){
        const TOROL = new CustomEvent("torol", {detail:this.termek});
        window.dispatchEvent(TOROL);
        console.log(event.detail)

    }
}
export default Termek