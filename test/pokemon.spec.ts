import { whoShouldAttackFirst, attack } from "../src/Services";
import Pokemon from "../src/Pokemon";
import Dracaufeu from "../src/Dracaufeu";
import Attack from "../src/Attack";
import Bulbizarre from "../src/Bulbizarre";

describe("Test speed of Pokemons", () => {
    const lanceFlammes = new Attack("lance flammes", 20, 50)
    const viveAttaque  = new Attack("vive attaque", 80, 30)
    const fouetLianes = new Attack("fouet liane", 100, 30)
    const lanceSoleil = new Attack("lance soleil", 10, 100)
    var dracaufeu = new Dracaufeu("Dracofeu", [lanceFlammes, viveAttaque], 1);
    var bulbizare = new Bulbizarre("Bulbizare", [fouetLianes, lanceSoleil], 1);
    let MathRandom;

    beforeEach(() => {
        MathRandom = Math.random;
        Math.random = () => 0.51;
    });

    test('Dracaufeu utilise lance flamme et bulbizarre lance soleil', () => {
        expect(whoShouldAttackFirst(dracaufeu, bulbizare, 0, 1)).toBe(dracaufeu);
    });

    test('Dracaufeu utilise lance flamme et bulbizarre fouet liane', () => {
        expect(whoShouldAttackFirst(dracaufeu, bulbizare, 0, 0)).toBe(bulbizare);
    });

    test('Dracaufeu utilise vive attaque et bulbizarre fouet liane', () => {
        expect(whoShouldAttackFirst(dracaufeu, bulbizare, 1, 0)).toBe(bulbizare);
    });

    afterEach(() => {
        Math.random = MathRandom;
    });

});

describe("Test attack of Pokemons", () => { 
    const lanceFlammes = new Attack("lance flammes", 20, 50)
    const viveAttaque  = new Attack("vive attaque", 80, 30)
    const fouetLianes = new Attack("fouet liane", 100, 30)
    const lanceSoleil = new Attack("lance soleil", 10, 100)
    var dracaufeu = new Dracaufeu("Dracofeu", [lanceFlammes, viveAttaque], 1);
    var bulbizare = new Bulbizarre("Bulbizare", [fouetLianes, lanceSoleil], 1);

    test("Dracaufeu attaque Bulbizarre", () => {
        expect(attack(dracaufeu, bulbizare, 0)).toBe(bulbizare)
    })
});