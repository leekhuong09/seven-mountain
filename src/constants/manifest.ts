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
        name: "welcome-bg",
        assets: [
            {
                name: "welcome-bg",
                srcs: "./assets/backgrounds/bg-1.jpeg",
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
            name: "wolf-1",
            assets: [
                {
                    name: "wolf-1",
                    srcs: "./assets/animals/wolf-1/wolf-1.json",
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
