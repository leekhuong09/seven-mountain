// import { Tools } from "../system/Tools";
import { GAME_MANIFEST } from "../../constants/manifest";
import Game from "./Game";

export const Config = {
    // loader: Tools.massiveRequire((require as any).context("../../../assets/", true, /\.(mp3|png|jpe?g)$/)),
    startScene: Game,
    manifest: GAME_MANIFEST,
    scenes: {
        Game,
    },
};
