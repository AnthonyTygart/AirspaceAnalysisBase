import Point from './Point.js';

export default class PointManager{
    const(points){
        this.points = points;

    }
    
    setStationOffsetAllPoints(line){
        for (let i = 0; i < this.points.length; i++){
            this.points[i].setStationAndOffset(line);
        }
    }

}