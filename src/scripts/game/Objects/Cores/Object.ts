interface CoreObject {
    id: string;
    name: string;
    old: number;
    width: number;
    height: number;
    type: string;
    info: any;
}

class CoreObject {
    constructor() {
        this.name = "";
        this.id = "";
        this.old = 0;
        this.width = 0;
        this.height = 0;
        this.type = "";
    }
    create(info: any) {
        this.info = info;
    }
    update() {}
    remove() {}
}

export default CoreObject;
