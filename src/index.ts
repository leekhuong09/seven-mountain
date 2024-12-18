// import { GAME_MANIFEST } from "./constants/manifest";
// import { GAME_MANIFEST } from "./constants/manifest";
// import { GAME_HEIGHT, GAME_WIDTH } from "./constants/index";
// import "pixi-spine";
import "./style.css";
// import { Application } from "pixi.js";
// import { getSpine } from "./utils/spine-example";
// import { createBird } from "./utils/create-bird";
// import { createBg } from "./utils/backgrounds";
// import { attachConsole } from "./utils/attach-console";
// import { loadGameAssets, resizeCanvas } from "./utils/canvas";

// const app = new Application<HTMLCanvasElement>({
//     // backgroundColor: 0xd3d3d3,
//     width: GAME_WIDTH,
//     height: GAME_HEIGHT,
// });

// window.onload = async (): Promise<void> => {
//     await loadGameAssets(GAME_MANIFEST);

//     document.body.appendChild(app.view);

//     resizeCanvas(app as any);
//     const bg = await createBg();
//     const birdFromSprite = createBird();
//     birdFromSprite.anchor.set(0.5, 0.5);
//     birdFromSprite.position.set(GAME_WIDTH / 2, GAME_HEIGHT / 4);

//     const spineExample = await getSpine();
//     app.stage.addChild(bg);
//     app.stage.addChild(birdFromSprite);
//     app.stage.addChild(spineExample);
//     app.stage.interactive = true;

//     if (VERSION.includes("d")) {
//         // if development version
//         attachConsole(app.stage, GAME_WIDTH, GAME_HEIGHT);
//     }
// };
import { Config } from "./scripts/game/Config";
import { App } from "./scripts/system/App";
App.run(Config);
