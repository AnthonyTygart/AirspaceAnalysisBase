import Point from './Point.js';
import PointLineFunctions from './PointLineFunctions.js';

export default class Line{
    constructor(startPoint, endPoint){
        // this.id = id
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        // this.description = description;
    }
    extend(distExtendStart, distExtendEnd){
        //This accounts for direction
        let startExtension = -distExtendStart;
        let endExtension = distExtendEnd;

        //Get changeRate of this line
        const dx = (this.endPoint.x - this.startPoint.x)/this.getLength();
        const dy = (this.endPoint.y - this.startPoint.y)/this.getLength();
        
        //Determine new Point Coordinates
        const newStartX = (Number(this.startPoint.x)) + (startExtension*dx);
        const newStartY = (Number(this.startPoint.y)) + (startExtension*dy);
        const newStartZ = this.startPoint.z;

        const newEndX = (Number(this.endPoint.x)) + (endExtension*dx);
        const newEndY = (Number(this.endPoint.y)) + (endExtension*dy);
        const newEndZ = this.startPoint.z;

        //Create New Points
        const newStartPoint = new Point(10,newStartY,newStartX,newStartZ,'p1');
        const newEndPoint = new Point(11,newEndY,newEndX,newEndZ,'p2');

        //Return New Line
        return new Line(newStartPoint, newEndPoint);
    }
    getLength(){
        return PointLineFunctions.get2DdistToPoint(this.startPoint,this.endPoint);
    }
}