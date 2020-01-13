export default class Point{
    constructor(id,y,x,z,description){
        this.id = id;
        this.y = y;
        this.x = x;
        this.z = z;
        this.description = description;
    }

    get2DdistToPoint(point){
        let dx = (point.x - this.x)
        let dy = (point.y - this.y)
        return Math.sqrt((dx*dx) + (dy*dy))
    }
}