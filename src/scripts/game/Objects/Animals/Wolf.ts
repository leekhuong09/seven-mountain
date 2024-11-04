import Animals from ".";

interface Wolf {
    app: any;
    info: any;
}

class Wolf extends Animals {
    constructor(app: any) {
        super();
        this.app = app;
        this.info = this.app.animatedSprite([
            "wolfJump-1.png",
            "wolfJump-2.png",
            "wolfJump-3.png",
            "wolfJump-4.png",
            "wolfJump-5.png",
        ]);
        this.info.loop = true;
        this.info.animationSpeed = 0.1;
        this.info.play();
        this.info.scale.set(4);
        this.create(this.info);
    }
    walk() {}
    run() {}
    eat() {}
    break() {}
    sleep() {}
    development() {}
}

export default Wolf;
