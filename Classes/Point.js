import Line from './Line.js';

export default class Point{
    constructor(id,y,x,z,description){
        this.id = id;
        this.y = y;
        this.x = x;
        this.z = z;
        this.description = description;
    }
    getShortestDistToLine(toLine){
        //!Should i move this to another function and just add a call to that function from here?
        const pStart = toLine.startPoint;
        const pEnd = toLine.endPoint;
          
        const t = ((-pEnd.x*pStart.x)+(pEnd.x*this.x)-(pEnd.y*pStart.y)+(pEnd.y * this.y))/((pEnd.x*pEnd.x)+(pEnd.y*pEnd.y));//magnitude constant
        const x = pStart.x + (t*pEnd.x); //X on line at perpendicular
        const y = pStart.y + (t*pEnd.y);// y on line at perpendicular
        const perpendicularPoint = new Point(1,y,x,'newPoint');
        const newLine = new Line(this,perpendicularPoint);
        return newLine.getLength();
    }

    offsetSideFromLine(line){
        const a = line.startPoint;
        const b = line.endPoint;
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