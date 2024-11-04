import CoreObject from "../Cores/Object";

interface Animals {
    strenght: number;
    speed: number;
    health: number;
    foods: any[];
}

class Animals extends CoreObject {
    constructor() {
        super();
        this.strenght = 0;
        this.speed = 0;
        this.health = 0;
        this.foods = [];
    }
    update() {}
    remove() {}
    walk() {}
    run() {}
    eat() {}
    break() {}
    sleep() {}
    development() {}
}

export default Animals;
