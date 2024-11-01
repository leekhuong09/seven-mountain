import { Container } from "pixi.js";
import { App } from "./App";

interface ScenesManager {
    container: any;
    scene: any;
}

class ScenesManager {
    constructor() {
        this.container = new Container();
        this.container.interactive = true;
        this.scene = null;
    }

    start(scene: any) {
        if (this.scene) {
            this.scene.remove();
        }

        this.scene = new App.config.scenes[scene]();
        this.container.addChild(this.scene.container);
    }
}

export default ScenesManager;
