import { ObjectTypes } from "../../../../constants/type";
import Animals, { type AnimalsType } from ".";

interface WolfType extends AnimalsType {
    app?: any;
    info?: any;
}

class Wolf extends Animals {
    app: any;
    shapes = {
        default: [""],
        run: ["wolf-run-1.png", "wolf-run-2.png", "wolf-run-3.png", "wolf-run-4.png", "wolf-run-5.png"],
    };
    constructor({ name }: WolfType) {
        super({ name, type: ObjectTypes.WOLF });
        // this.app = app;
        // this.info = this.app.animatedSprite([
        //     "wolf-run-1.png",
        //     "wolf-run-2.png",
        //     "wolf-run-3.png",
        //     "wolf-run-4.png",
        //     "wolf-run-5.png",
        // ]);
        // this.info.loop = true;
        // this.info.animationSpeed = 0.1;
        // this.info.play();
        // this.info.scale.set(2);
        // this.create(this.info);
    }
    create() {
        return this;
    }
    walk() {}
    run() {}
    eat() {}
    break() {}
    sleep() {}
    development() {}
}

export default Wolf;
