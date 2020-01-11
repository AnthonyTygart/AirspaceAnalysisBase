import Point from './Point.js';
import Line from './Line.js';

export default class Obstruction extends Point{
  
    constructor(id,y,x,z,description,station,offset,offsetSide){
      super(id,y,x,z,description,station,offset,offsetSide);
      this.penetrationHeight = '';
      this.surfaceZ = '';
    }    
  }