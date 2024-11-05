import CoreObject, { type CoreObjectType } from "../Cores/Object";

interface AnimalsType extends CoreObjectType {
    strenght?: number;
    speed?: number;
    health?: number;
    foods?: any[];
}

class Animals extends CoreObject {
    strenght: number;
    speed: number;
    health: number;
    foods: any[];
    constructor({ strenght = 0, speed = 0, health = 0, foods = [], ...props }: AnimalsType) {
        props.type = "ANIMAL_" + props.type;
        super(props);
        this.strenght = strenght;
        this.speed = speed;
        this.health = health;
        this.foods = foods;
    }
    remove() {}
    walk() {}
    run() {}
    eat() {}
    break() {}
    sleep() {}
    development() {}
}

export { type AnimalsType };
export default Animals;
