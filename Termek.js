class Termek{
    constructor(szuloElem, termek){
        this.szuloElem = szuloElem;
        this.termek = termek
        szuloElem.append(`<div><h3>${termek.nev}</h3><img src="${termek.eleresiUt}"><p>Ár: ${termek.ar}</p>`)
    }}

export default Termek