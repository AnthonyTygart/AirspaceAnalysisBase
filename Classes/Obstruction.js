import Point from './Point';

export default class Obstruction extends Point{
  
    constructor(id,y,x,z,description){
      super(id,y,x,z,description);
      this.penetrationHeight = '';
      this.surfaceZ = '';
      this.station = '';
      this.offset = '';
      this.offsetSide = '';
    }

    setOffset(line){
      offset = super.getShortestDistToLine(line);
    }
  
  }