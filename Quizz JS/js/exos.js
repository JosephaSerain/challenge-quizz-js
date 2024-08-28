/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
// Ton code ici...
let goodAnswers = 0

const question1 = `Quelle mer borde la ville de Sébastopol ?`;
console.log(typeof question1);
const solution1 = "la mer noire";

/* Exo 2 */
// Ton code ici...
const response1 = prompt(question1).toLowerCase();
if (response1===solution1){
    alert (`Gagné !`);
    goodAnswers = goodAnswers + 1;
} else {
    alert (`Perdu...`);
}

/* Exo 3 */
// Ton code ici...
const question2 = `Quel est l'âge du capitaine ?`;
const solution2 = 63;

const response2 = prompt(question2).toLowerCase();
if (parseInt(response2) === solution2){
    alert(`Gagné !`)
    goodAnswers = goodAnswers + 1;
} else {
    alert(`Perdu...`)
}

alert (`Tu as ${goodAnswers} bonnes réponses !`)