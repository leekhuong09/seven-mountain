import { generateUniqueId } from "./../../../../utils/uuid";
interface CoreObjectType {
    id?: string;
    name?: string;
    old?: number;
    width?: number;
    height?: number;
    type?: number;
    position?: {
        x: number;
        y: number;
    };
}

class CoreObject {
    id: string;
    name: string;
    old: number;
    width: number;
    height: number;
    type: number;
    position: {
        x: number;
        y: number;
    };
    constructor({
        name = "",
        id = generateUniqueId(),
        old = 0,
        width = 0,
        height = 0,
        type = -1,
        position = { x: 0, y: 0 },
    }: CoreObjectType) {
        this.name = name;
        this.id = id;
        this.old = old;
        this.width = width;
        this.height = height;
        this.type = type;
        this.position = position;
    }
    create() {}
    update() {}
    remove() {}
}

export { type CoreObjectType };
export default CoreObject;
