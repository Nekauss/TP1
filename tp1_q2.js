//Trier les lettres d'une phrase
//par ordre alphabétique
//Array.from(), split(), sort()

/*let tableau = Array.from(phrase)
Permet de créer un tableau à partir d'un objet itérable (comme une chaîne de caractères)
*/

//Avec Array.from
let phrase = "une chaine avec des lettres dans un certain ordre";
//let tableau = Array.from(phrase.replace(/ /g, ""));
let tableau = Array.from(phrase.replaceAll(/ /g, ""));

//Avec SPLIT:
let phraseModifie = phrase.replace(/ /g, "");
let tab2 = phraseModifie.split('');

console.log(tableau.sort().toString());







