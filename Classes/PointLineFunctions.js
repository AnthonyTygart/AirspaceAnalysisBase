import Line from './Line.js';
import Point from './Point.js';

//!Research How to add this to Point and Obstruction Point instead of a seperate Class
export default class PointLineFunctions{

    static getShortestDistToLine(point,line){
        const p1 = this.getPerpendicularPointOnLine(point,line)
        return p1.get2DdistToPoint(point);
    }

    static getPerpendicularPointOnLine(point, line) {

        const A = point.x - line.startPoint.x; //dx of vector from line start point to point 
        const B = point.y - line.startPoint.y; //dy of vector from line start point to point
        const C = line.endPoint.x - line.startPoint.x;//dx
        const D = line.endPoint.y - line.startPoint.y;//dy
      
        const dot = A * C + B * D; //dot product determines resultant vector
        const len_sq = C * C + D * D; //line length squared
        let param = -1; //instantiation of param variable
        if (len_sq != 0) //in case of 0 length line
            param = dot / len_sq; // set value of param
      
        let xx, yy;
      
        if (param < 0) {
          xx = line.startPoint.x;
          yy = line.startPoint.y;
        }
        else if (param > 1) {
          xx = line.endPoint.x;
          yy = line.endPoint.y;
        }
        else {
          xx = x1 + param * C;
          yy = y1 + param * D;
        }

        return new Point(1,xx,yy,'pPoint')

        /*
        let's call our point p0 and the points that define the line as p1 and p2. 
        Then you get the vectors A = p0 - p1 and B = p2 - p1. Param is the scalar 
        value that when multiplied to B gives you the point on the line closest to p0. 
        If param <= 0, the closest point is p1. If param >= 1, the closest point is p1. 
        If it's between 0 and 1, it's somewhere between p1 and p2 so we interpolate. 
        XX and YY is then the closest point on the line segment, dx/dy is the vector 
        from p0 to that point, and finally we return the length that vector.
        */

      }

    static getOffsetSideFromLine(point,line){
        const a = line.startPoint;
        const b = line.endPoint;
        const check = (b.x - a.x)*(point.y - a.y) - (b.y - a.y)*(point.x - a.x)
        let value = 0;

        if(check > 0){
            value = 1 //Left Side
        }else if(check < 0){
            value = -1 //Right Side
        }
        return (value);
    }

    static pointIsOnLine(point,line){
        if (this.getShortestDistanceToLine(point,line) !== 0){
            return false;
        } else {
            return true;
        }
    }


}