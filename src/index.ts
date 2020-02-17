import Attack from "./Attack";
import Dracaufeu from "./Dracaufeu";
import Bulbizarre from "./Bulbizarre";
import { round, fight } from "./Services";

const lanceFlammes = new Attack("lance flammes", 20, 50)
const viveAttaque  = new Attack("vive attaque", 80, 20)
const fouetLianes = new Attack("fouet liane", 100, 30)
const lanceSoleil = new Attack("lance soleil", 10, 100)
var dracaufeu = new Dracaufeu("Dracofeu", [lanceFlammes, viveAttaque], 1);
var bulbizare = new Bulbizarre("Bulbizare", [fouetLianes, lanceSoleil], 1);


fight(dracaufeu, bulbizare);