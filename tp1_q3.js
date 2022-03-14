/*let phrase = ("une phrase sans majuscule");
console.log(phrase.charAt(0).toUpperCase()+phrase.slice(1));
const arr = phrase.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    const phrase = arr.join(" ");
    console.log(phrase);}*/
//Mettre en MAJ la première
//lettre de chaque mot
// split(), toUpperCase(), substring()

let phrase = ("une phrase sans majuscule");

let tableau = phrase.split(" ");
let resultat = "";

for (const chaqueMot of tableau) {
    let premiereLettre = chaqueMot.substring(0,1).toUpperCase();
    //let premiereLettre = chaqueMot.charAt(0).toUpperCase();
    let lesAutresLettres = chaqueMot.substring(1).toLowerCase();
    let leMotReconstruit = premiereLettre + lesAutresLettres + " ";

    //resultat = resultat + leMotReconstruit;
    resultat += leMotReconstruit;
}

console.log(resultat);


/*
const str = 'flexiple';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

Output: Flexiple
 */

/*
const str = 'i have learned something new today';

//split the above string into an array of strings
//whenever a blank space is encountered

const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string
//using a blankspace as a separator
const str2 = arr.join(" ");
console.log(str2);

//Outptut: I Have Learned Something New Today
 */