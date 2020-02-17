import Pokemon from "./Pokemon";
import Attack from "./Attack";

export default class Dracaufeu extends Pokemon{
    constructor(public nickname: string, public attacks: Attack[], public level: number){
        super("Dracaufeu", 30, 120, "feu", attacks, level, 120);
    }
}