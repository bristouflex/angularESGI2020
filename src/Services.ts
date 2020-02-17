import Pokemon from './Pokemon'


export var whoShouldAttackFirst = (pokemon1: Pokemon, pokemon2: Pokemon) => {
    if(pokemon1.speed >= pokemon2.speed) return pokemon1;
    return pokemon2;
}
