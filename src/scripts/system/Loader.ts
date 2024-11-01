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
        for (const asset of this.config.loader) {
            let key = asset.key.substr(asset.key.lastIndexOf("/") + 1);
            key = key.substring(0, key.indexOf("."));
            if (asset.key.indexOf(".png") !== -1 || asset.key.indexOf(".jpg") !== -1) {
                this.loader.add(key, asset.data.default);
            }
        }

        return new Promise((resolve: any) => {
            this.loader.load((loader: any, resources: any) => {
                this.resources = resources;
                resolve();
            });
        });
    }
}

export default Loader;
