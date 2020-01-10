import Point from './Point.js';
import Line from './Line.js';

export default class Obstruction extends Point{
  
    constructor(id,y,x,z,description){
      super(id,y,x,z,description);
      this.penetrationHeight = '';
      this.surfaceZ = '';
      this.station = '';
      this.offset = '';
      this.offsetDirection = '';
    }

    setOffset(line){
      this.offset = super.getShortestDistToLine(line);
      this.offset = super.offsetSideFromLine(line);
    }
    
  }