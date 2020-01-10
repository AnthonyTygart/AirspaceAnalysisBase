import Line from './Line.js';

export default class Point{
    constructor(id,y,x,description){
        this.id = id
        this.y = y;
        this.x = x;
        this.description = description;
    }
    getShortestDistToLine(toLine){
        const pStart = line.startPoint;
        const pEnd = line.endPoint;
          
        const t = ((-pEnd.x*pStart.x)+(pEnd.x*this.x)-(pEnd.y*pStart.y)+(pEnd.y * this.y))/((pEnd.x*pEnd.x)+(pEnd.y*pEnd.y));//magnitude constant
        const x = line.startPoint.x + (t*pEnd.x); //X on line at perpendicular
        const y = line.startPoint.y + (t*pEnd.y);// y on line at perpendicular
        const perpendicularPoint = new Point(1,y,x,'newPoint');
        const newLine = new Line(this,perpendicularPoint);
        return newLine.getLength();
        
    }

    offsetSideFromLine(line){
        const a = line.startPoint;
        const b = line.endPoint;
        console.log(this.y, this.x);
        const check = (b.x - a.x)*(this.y - a.y) - (b.y - a.y)*(this.x - a.x)
        let value = 0;

        if(check > 0){
            value = 1
        }else if(check < 0){
            value = -1
        }

        return (value);
    }
}