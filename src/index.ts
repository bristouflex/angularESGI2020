import Attack from "./Attack";
import Dracaufeu from "./Dracaufeu";
import Bulbizarre from "./Bulbizarre";
import { round } from "./Services";

const lanceFlammes = new Attack("lance flammes", 20, 50)
const viveAttaque  = new Attack("vive attaque", 80, 20)
const fouetLianes = new Attack("fouet liane", 100, 30)
const lanceSoleil = new Attack("lance soleil", 10, 100)
var dracaufeu = new Dracaufeu("Dracofeu", [lanceFlammes, viveAttaque], 1);
var bulbizare = new Bulbizarre("Bulbizare", [fouetLianes, lanceSoleil], 1);


while(dracaufeu.currentLifePoints > 0 && bulbizare.currentLifePoints > 0 ){
    round(dracaufeu, bulbizare);
    if(dracaufeu.currentLifePoints < 0) console.log("Bulbizarre a gagné!")
    else console.log("Dracaufeu a gagné!")
}