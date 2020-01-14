import Point from './Point.js';
import Line from './Line.js';

export default class Obstruction extends Point{
  
    constructor(id,y,x,z,description){
      super(id,y,x,z,description);
      this.station = '';
      this.offset = '';
      this.surfaceZ = '';
      this.penetrationHeight = '';
    }
  }