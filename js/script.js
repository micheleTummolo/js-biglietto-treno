let eta = prompt ("Inserire l'età del passegero");
console.log (eta);

let km = prompt ("Inserire il numero di km da percorrere");
console.log (km);

const prezzo_km = 0.21;
console.log (prezzo_km);

let tot_prezzo_km;

tot_prezzo_km = km * prezzo_km;

console.log (tot_prezzo_km);

let prezzo_finito;
let prezzo_arrotondato;

if (eta < 18 ){
    prezzo_finito = tot_prezzo_km * 0.8;
    console.log (prezzo_finito);
}
else if (eta > 65){
    prezzo_finito = tot_prezzo_km * 0.6;
    console.log (prezzo_finito);
}
else {
    prezzo_finito = tot_prezzo_km;
    console.log (prezzo_finito);
}

prezzo_arrotondato = prezzo_finito.toFixed(2);

document.getElementById ('tot_viaggio').innerHTML = ("Prezzo finito: ") + prezzo_arrotondato;