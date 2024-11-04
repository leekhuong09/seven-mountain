import { Sprite, Assets } from "pixi.js";

export async function createBg() {
    const bgResource = await Assets.get("welcome-bg");
    const bg = Sprite.from(bgResource);
    return bg;
}
