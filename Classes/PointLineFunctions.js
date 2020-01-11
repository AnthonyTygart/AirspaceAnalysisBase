import Line from './Line.js';
import Point from './Point.js';

export default class PointLineFunctions{

    static getPerpendicularPointOnLine(point, line){
        const pStart = line.startPoint;
        const pEnd = line.endPoint;
          
        const t = ((-pEnd.x*pStart.x)+(pEnd.x*point.x)-(pEnd.y*pStart.y)+(pEnd.y * point.y))/((pEnd.x*pEnd.x)+(pEnd.y*pEnd.y));//magnitude constant
        const x = pStart.x + (t*pEnd.x); //X on line at perpendicular
        const y = pStart.y + (t*pEnd.y);// y on line at perpendicular
    
        return new Point(1,y,x,'newPoint');
    }

    static getShortestDistToLine(point,line){
        const perpendicularPoint = this.getPerpendicularPointOnLine(point,line);
        const newLine = new Line(point,perpendicularPoint);
        return newLine.getLength();
    }

    static getOffsetSideFromLine(line){
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