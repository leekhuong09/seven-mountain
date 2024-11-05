import { Container } from "pixi.js";
import { App } from "../system/App";
import Scene from "../system/Scene";
import Wolf from "./Objects/Animals/Wolf";
import { generateUniqueId } from "../../utils/uuid";

interface Game {
    container: any;
    bg: any;
    animals: any[];
}

class Game extends Scene {
    constructor() {
        super();
        this.container = new Container();
        this.createBackground();
        this.createAnimals();
        console.log("[GM][animals]", this.animals);
    }
    createBackground() {
        this.bg = App.sprite("welcome-bg");
        this.bg.position.set(window.innerWidth / 2, window.innerHeight / 2); //same as your innerWidth
        this.bg.anchor.set(0.5);
        this.bg.scale.set(
            Math.min(window.innerWidth / this.bg.texture.width, window.innerHeight / this.bg.texture.height),
        );
        console.log("[GM][bg]", this.bg);
        // this.bg.width = window.innerWidth;
        // this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }
    createAnimals() {
        const wolf1 = new Wolf({ name: "Wolf 1", id: generateUniqueId() });
        const wolf2 = new Wolf({ name: "Wolf 2", id: generateUniqueId() });
        const wolf3 = new Wolf({ name: "Wolf 3", id: generateUniqueId() });
        this.animals = [wolf1, wolf2, wolf3];
        // this.container.addChild(wolf1.info);
    }
}

export default Game;
