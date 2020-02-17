import Attack from "./Attack";
export default class Pokemon{

    constructor (public name: string, public speed: number, public lifepoints: number, public type: string, public attacks: Attack[], public level: number, public currentLifePoints: number){}


}