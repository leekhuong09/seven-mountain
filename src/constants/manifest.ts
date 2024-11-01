type SpriteAssetType = {
    name?: string;
    srcs?: string;
    src?: string;
    alias?: string;
};

type SpriteType = {
    name: string;
    assets: SpriteAssetType[];
};

export type GameManifestType = {
    bundles: SpriteType[];
};

const SEASON_1_BGS: SpriteType[] = [
    {
        name: "season-1-welcome",
        assets: [
            {
                name: "season-1-welcome",
                srcs: "./assets/season1/backgrounds/welcome.jpeg",
            },
        ],
    },
];

export const GAME_MANIFEST: GameManifestType = {
    bundles: [
        ...SEASON_1_BGS,
        {
            name: "bird",
            assets: [
                {
                    name: "bird",
                    srcs: "./assets/simpleSpriteSheet.json",
                },
            ],
        },
        {
            name: "pixie",
            assets: [
                {
                    name: "pixie",
                    srcs: "./assets/spine-assets/pixie.json",
                },
            ],
        },
    ],
};
