import { Assets } from "pixi.js";

interface Loader {
    loader: any;
    config: any;
    resources: any;
}

class Loader {
    constructor(loader: any, config: any) {
        this.loader = loader;
        this.config = config;
        this.resources = {};
    }
    preload() {
        return new Promise(async (resolve) => {
            const assets = await this.loadGameAssets(this.config?.manifest);
            resolve(assets);
        });
    }

    async loadGameAssets(manifest: any) {
        await Assets.init({ manifest });
        Assets.backgroundLoadBundle(["welcome-bg"]);
        await Assets.loadBundle(["bird", "pixie", "wolf-1", "welcome-bg"]);
    }
}

export default Loader;
