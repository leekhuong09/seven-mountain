import { Sprite, Assets } from "pixi.js";

export async function createBg() {
    const bgResource = await Assets.get("season-1-welcome");

    const bg = Sprite.from(bgResource);
    console.log("[LOG][bg]", bgResource);
    return bg;
}
