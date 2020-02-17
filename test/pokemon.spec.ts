import { whoShouldAttackFirst } from "../src/Services";
import Pokemon from "../src/Pokemon";

describe("Test speed of Pokemons", () => {
    test('Dracaufeu speed 10 an Bulbizare speed 30', () => {
        const dracaufeu = new Pokemon("Dracofeu", 10);
        const bulbizare = new Pokemon("Bulbizare", 30);
        expect(whoShouldAttackFirst(dracaufeu, bulbizare)).toBe(bulbizare);
    });

    test('Dracaufeu speed 30 an Bulbizare speed 10', () => {
        const dracaufeu = new Pokemon("Dracofeu", 30);
        const bulbizare = new Pokemon("Bulbizare", 10);
        expect(whoShouldAttackFirst(dracaufeu, bulbizare)).toBe(dracaufeu);
    });

    test('Dracaufeu speed 10 an Bulbizare speed 10', () => {
        const dracaufeu = new Pokemon("Dracofeu", 10);
        const bulbizare = new Pokemon("Bulbizare", 10);
        expect(whoShouldAttackFirst(dracaufeu, bulbizare)).toBe(dracaufeu);
    });
});