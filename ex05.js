// Dado o array abaixo percorra ele e exiba o animal e sua raça utilizando console.log.
// Dica: forEach pode ser uma boa

var animais = [
{ animal: 'Cachorro', raca: 'Akita' },
{ animal: 'Cachorro', raca: 'Boxer' },
{ animal: 'Cachorro', raca: 'Dálmata' },
{ animal: 'Cachorro', raca: 'Pastor alemão' },
{ animal: 'Gato', raca: 'Persa' },
{ animal: 'Gato', raca: 'Sphynx' },
{ animal: 'Gato', raca: 'Siamês' },
]

animais.forEach(valor => {
    console.log(valor.animal + ',' + valor.raca)
 })
