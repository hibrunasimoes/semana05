// Dado o array abaixo realize a conversão da temperatura de Fahrenheit para Celsius;
// Utilizando console.log exiba o valor do array original e do novo array convertido
// array: [ 0, 32, 45, 50, 75, 80, 99, 120 ];
// formula: Math.round( ( elem - 32 ) * 5 / 9 );

// Dica: eu daria uma olhada no .map

const Fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

const celcius = Fahrenheit.map (elem => Math.round (( elem - 32 ) * 5/9))
console.log (celcius)