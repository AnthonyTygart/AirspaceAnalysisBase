import PointLineFunctions from './PointLineFunctions.js';

export default class Point{
    constructor(id,y,x,z,description){
        this.id = id;
        this.y = y;
        this.x = x;
        this.z = z;
        this.description = description;
        this.station = '';
        this.offset = '';
    }
    isOnLine(line){
        return PointLineFunctions.isOnLine(this,line);
    }

    setStation(line){
        this.station = PointLineFunctions.getStation(this,line);
    }

    setOffset(line){
        this.offset = PointLineFunctions.getShortestDistToLine(this,line);
        this.offset *= PointLineFunctions.getOffsetSideFromLine(this,line);
    }

    setStationAndOffset(line){
        this.setStation(line);
        this.setOffset(line);
    }

}