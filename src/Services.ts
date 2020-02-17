import Pokemon from './Pokemon'

export var whoShouldAttackFirst = (pokemon1: Pokemon, pokemon2: Pokemon, idAttack1: number, idAttack2: number) => {
    if(pokemon1.speed + pokemon1.attacks[idAttack1].speed > pokemon2.speed + pokemon2.attacks[idAttack2].speed ) return pokemon1;
    if(pokemon1.speed + pokemon1.attacks[idAttack1].speed == pokemon2.speed + pokemon2.attacks[idAttack2].speed ) return Math.random() <= 0.5 ? pokemon1 : pokemon2;
    return pokemon2;
}

export var attack = (pokemon1: Pokemon, pokemon2: Pokemon, idAttack: number) => {
    console.log(pokemon1.name+" utilise "+pokemon1.attacks[idAttack].name+"!");
    pokemon2.currentLifePoints -= pokemon1.attacks[idAttack].damages;
    return pokemon2;
}

export var round = (pokemon1: Pokemon, pokemon2: Pokemon) => {
    console.log(pokemon1.name+": "+ pokemon1.currentLifePoints);
    console.log(pokemon2.name+": "+ pokemon2.currentLifePoints);
    var indice1 = Math.floor((Math.random() * 100))% pokemon1.attacks.length;
    var indice2 = Math.floor((Math.random() * 100))% pokemon2.attacks.length;
    if(whoShouldAttackFirst(pokemon1, pokemon2, indice1, indice2) === pokemon2){
        attack(pokemon2, pokemon1, indice2);
        if(pokemon1.lifepoints > 0)
        attack(pokemon1, pokemon2, indice1);
    }else{
        attack(pokemon1, pokemon2, indice1);
        if(pokemon2.lifepoints > 0)
        attack(pokemon2, pokemon1, indice2);
    }
}

export var fight = (pokemon1: Pokemon, pokemon2: Pokemon) => {
    while(pokemon1.currentLifePoints > 0 && pokemon2.currentLifePoints > 0 ){
        round(pokemon1, pokemon2);
        if(pokemon1.currentLifePoints < 0) console.log(pokemon2.name+" a gagné!")
        else console.log(pokemon1.name+" a gagné!")
    }
}
