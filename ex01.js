// Jovens: individuos de ate 15 anos;
// Adultos: Individuos com a idade entre 16 ate 64 anos;
// Idosos: Individuos de 65 anos em diante;

let idade = prompt ('Qual a sua idade?');

if (idade <=15) {
    console.log('Jovem')
}
else if (idade >= 16 && idade <= 64) {
    console.log ('Adulto')
}
else {
    console.log ('Idoso')
}
