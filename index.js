import Point from './Classes/Point.js';
import ObstructionPoint from './Classes/Obstruction.js';
import Line from './Classes/Line.js';

let startNorthing = Number(document.getElementById('rw-start-y-input').value = 7762.2951);
let startEasting = Number(document.getElementById('rw-start-x-input').value = 3004.7541);
let endNorthing = Number(document.getElementById('rw-end-y-input').value = 2560);
let endEasting = Number(document.getElementById('rw-end-x-input').value = 7340);
let rwStart = '';
let rwEnd = '';

let otherNorthing = Number(document.getElementById('other-y-input').value = 2543.7229)
let otherEasting = Number(document.getElementById('other-x-input').value = 1896.0052)

document.getElementById("Btn").onclick = () => {
    //Get Input
    startNorthing = Number(document.getElementById('rw-start-y-input').value);
    startEasting = Number(document.getElementById('rw-start-x-input').value);
    endNorthing = Number(document.getElementById('rw-end-y-input').value);
    endEasting = Number(document.getElementById('rw-end-x-input').value);
    otherNorthing = Number(document.getElementById('other-y-input').value);
    otherEasting = Number(document.getElementById('other-x-input').value);

    //Create RW End Points and ALI
    rwStart = new Point(1,startNorthing,startEasting,0,'RwStart');
    rwEnd = new Point(2,endNorthing,endEasting,0,'RwEndPoint');
    const ali = new Line(rwStart,rwEnd);

    //Build Array of Obstruction Points, This will build array of all points and assign Station Offset to these points 
    const otherPoint = new ObstructionPoint(3,otherNorthing,otherEasting,0,'tree1');


}



