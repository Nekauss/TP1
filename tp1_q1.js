//Tirer, au hasard, tous les nombres
//de la plage [0:100]
//Math.random(), push(), lenght


let tabDeBingo = new Array(100);
tabDeBingo.fill(false);


//for (let i = 0; i < tabDeBingo.lenght; i++) {
//    tabDeBingo[i] = false;
//}
let cpteur = 0;
let nbreEssai = 0;
let hasard;

do {
    //Je tire un nombre au sort
    hasard = Math.round(Math.random()*100);
    //Je vérifie s'il est déjà dans le tableau
    if (tabDeBingo [hasard] === false) {
        tabDeBingo[hasard] = true;
        cpteur++;
    }
    nbreEssai++;
}while (cpteur<100)

console.log("Nombre d'essai : " + nbreEssai);
