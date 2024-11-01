import { Container } from "pixi.js";
import { App } from "./App";

interface Scene {
    container: any;
}

class Scene {
    constructor() {
        this.container = new Container();
        this.container.interactive = true;
        this.create();
        App.app.ticker.add(this.update, this);
    }

    create() {}
    update() {}
    destroy() {}

    remove() {
        App.app.ticker.remove(this.update, this);
        this.destroy();
        this.container.destroy();
    }
}

export default Scene;
