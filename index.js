import Point from './Classes/Point.js';
import ObstructionPoint from './Classes/Obstruction.js';
import Line from './Classes/Line.js';
import PointLineFunctions from './Classes/PointLineFunctions.js';

let startNorthing = '';
let startEasting = '';
let endNorthing = '';
let endEasting = '';
let rwStart = '';
let rwEnd = '';

document.getElementById("Btn").onclick = () => {
    //Get Input
    startNorthing = Number(document.getElementById('rw-start-y-input').value);
    startEasting = Number(document.getElementById('rw-start-x-input').value);
    endNorthing = Number(document.getElementById('rw-end-y-input').value);
    endEasting = Number(document.getElementById('rw-end-x-input').value);
    let otherNorthing = Number(document.getElementById('other-y-input').value);
    let otherEasting = Number(document.getElementById('other-x-input').value);

    //Create RW End Points
    rwStart = new Point(1,startNorthing,startEasting,0,'RwStart');
    rwEnd = new Point(2,endNorthing,endEasting,0,'RwEndPoint');
    const ali = new Line(rwStart,rwEnd);

    const otherPoint = new ObstructionPoint(3,otherNorthing,otherEasting,0,'tree1');
    // otherPoint.pointOnAli = PointLineFunctions.getPerpendicularPointOnLine(otherPoint,ali);
    // otherPoint.offset = PointLineFunctions.getShortestDistToLine(otherPoint);

    const newEngineer = new Engineer('bob',true,true);
    console.log(JSON.stringify(newEngineer));

    console.log(PointLineFunctions.Get)
}



