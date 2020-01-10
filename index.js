import Point from './Classes/Point.js';
import ObstructionPoint from './Classes/Obstruction.js';
import Line from './Classes/Line.js';
// import './index.css';

let startNorthing = '';
let startEasting = '';
let endNorthing = '';
let endEasting = '';
let rwStart = '';
let rwEnd = '';

document.getElementById("Btn").onclick = () => {
    //Get Input
    startNorthing = document.getElementById('rw-start-y-input').value;
    startEasting = document.getElementById('rw-start-x-input').value;
    endNorthing = document.getElementById('rw-end-y-input').value;
    endEasting = document.getElementById('rw-end-x-input').value;
    let otherNorthing = document.getElementById('other-y-input').value;
    let otherEasting = document.getElementById('other-x-input').value;

    //Create RW End Points
    rwStart = new Point(1,startNorthing,startEasting,0,'RwStart');
    rwEnd = new Point(2,endNorthing,endEasting,0,'RwEndPoint');
    const otherPoint = new ObstructionPoint(3,otherNorthing,otherEasting,0,'tree1');
    
    
    //Create runway Ali
    let ali = new Line(rwStart,rwEnd);

    otherPoint.setOffset(ali);
    console.log(otherPoint.offset);
    console.log(otherPoint.offsetSideFromLine(ali));

    console.log(otherPoint.distToSegment(ali));
    
    //create New Ali by extending rw Ali
    //let newALI = ali.extend(2000,-ali.getLength());
}

function ShortestDistToLine(point,startPoint,endPoint){
    let lineLength = GetLineLength(startPoint,endPoint);

    if(lineLength === 0) return lineLength;
}



