import Pokemon from "./Pokemon";
import Attack from "./Attack";

export default class Bulbizarre extends Pokemon{
    constructor(public nickname: string, public attacks: Attack[], public level: number){
        super("Bulbizarre", 10, 180, "feu", attacks, level, 180);
    }
}