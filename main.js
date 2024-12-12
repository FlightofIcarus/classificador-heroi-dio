const prompt = require('prompt-sync')();

const myHeroName = prompt('Digite seu nome.');
const myHeroXp = parseInt(prompt('Digite seu valor de experiência.'));
let heroLevel;

    if (myHeroXp < 1000) {
        heroLevel = 'Ferro';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Bronze';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Prata';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Ouro';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Platina';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Ascendente';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Imortal';
    }else if (myHeroXp >= 1001 && myHeroXp <= 2000) {
        heroLevel = 'Radiante';
    }
console.log(`O herói ${myHeroName} tem ${myHeroXp} pontos de experiência e está no nível ${heroLevel}`);