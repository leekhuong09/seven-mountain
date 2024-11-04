import { Assets } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../constants";
import { GameManifestType } from "../constants/manifest";

export function resizeCanvas(app: any): void {
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        app.stage.scale.x = window.innerWidth / GAME_WIDTH;
        app.stage.scale.y = window.innerHeight / GAME_HEIGHT;
    };

    resize();

    window.addEventListener("resize", resize);
}

export async function loadGameAssets(manifest: GameManifestType): Promise<void> {
    await Assets.init({ manifest });
    Assets.backgroundLoadBundle(["welcome-bg"]);
    await Assets.loadBundle(["bird", "pixie", "welcome-bg"]);
}
