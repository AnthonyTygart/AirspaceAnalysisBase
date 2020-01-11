import Line from './Line.js';

export default class Point{
    constructor(id,y,x,z,description){
        this.id = id;
        this.y = y;
        this.x = x;
        this.z = z;
        this.description = description;
        this.station = '';
        this.offset = '';
        this.offsetSide = '';
    }
}