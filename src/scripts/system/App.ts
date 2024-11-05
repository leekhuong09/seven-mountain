import { Application, Assets, Sprite, Texture, AnimatedSprite } from "pixi.js";

import { GAME_WIDTH, GAME_HEIGHT } from "./../../constants/index";

import Loader from "./Loader";
import ScenesManager from "./ScenesManager";

interface GamneApp {
    config: any;
    app: any;
    loader: any;
    scene: any;
    scenes: any;
}

class GamneApp {
    constructor() {
        this.app = new Application<HTMLCanvasElement>({
            width: window.innerWidth || GAME_WIDTH,
            height: window.innerHeight || GAME_HEIGHT,
        });
    }
    run(config?: any) {
        this.config = config;
        document.body.appendChild(this.app.view);
        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload().then(() => this.start());

        this.scenes = new ScenesManager();
        this.app.stage.addChild(this.scenes.container);
    }
    start() {
        // resizeCanvas(app as any);
        // const bg = await createBg();
        // const birdFromSprite = createBird();
        // birdFromSprite.anchor.set(0.5, 0.5);
        // birdFromSprite.position.set(GAME_WIDTH / 2, GAME_HEIGHT / 4);
        // const spineExample = await getSpine();
        // app.stage.addChild(bg);
        // app.stage.addChild(birdFromSprite);
        // app.stage.addChild(spineExample);
        // app.stage.interactive = true;
        // if (VERSION.includes("d")) {
        //     // if development version
        //     attachConsole(app.stage, GAME_WIDTH, GAME_HEIGHT);
        // }
        this.scene = new this.config["startScene"]();
        this.app.stage.addChild(this.scene.container);
        // this.scenes.start("Game");
    }

    res(key: string) {
        return this.loader.resources[key].texture;
    }

    sprite(key: string) {
        const spriteSrc = Assets.get(key);
        console.log("[GM][sprite]", spriteSrc);
        const spr = Sprite.from(spriteSrc);
        return spr;
    }

    animatedSprite(images: string[]) {
        const animatedSpr = new AnimatedSprite(images.map((img) => Texture.from(img)));
        return animatedSpr;
    }
}

export const App = new GamneApp();
