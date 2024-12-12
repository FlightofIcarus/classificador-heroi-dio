const prompt = require('prompt-sync')();

const heroLevel = [{
    nivel:'Ferro',
    pontuacaoMaxima: 1000,
    pontuacaoMinima: 0},
    {
        nivel:'Bronze',
        pontuacaoMaxima: 2000,
        pontuacaoMinima: 1001},
    {
        nivel:'Prata',
        pontuacaoMaxima: 5000,
        pontuacaoMinima: 2001},
        {
        nivel:'Ouro',
        pontuacaoMaxima: 7000,
        pontuacaoMinima: 5001},
        {
        nivel:'Platina',
        pontuacaoMaxima: 8000,
        pontuacaoMinima: 7001},
        {
        nivel:'Ascendente',
        pontuacaoMaxima: 9000,
        pontuacaoMinima: 8001},
        {
        nivel:'Imortal',
        pontuacaoMaxima: 10000,
        pontuacaoMinima: 9001},
        {
        nivel:'Radiante',
        pontuacaoMaxima: 10000,
        pontuacaoMinima: 10001
        }
]


const myHeroName = prompt('Digite seu nome.');
const myHeroXp = parseInt(prompt('Digite seu valor de experiência.'));

heroLevel.forEach(element => {
    if(myHeroXp >= element.pontuacaoMinima && myHeroXp <= element.pontuacaoMaxima){
        console.log(`O herói ${myHeroName} tem ${myHeroXp} pontos de experiência e está no nível ${element.nivel}.`);
          }
})