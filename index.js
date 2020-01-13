import Point from './Classes/Point.js';
import ObstructionPoint from './Classes/Obstruction.js';
import Line from './Classes/Line.js';

let startNorthing = Number(document.getElementById('rw-start-y-input').value = 2182986.3969);
let startEasting = Number(document.getElementById('rw-start-x-input').value = 1078468.2678);
let endNorthing = Number(document.getElementById('rw-end-y-input').value = 2183031.4846);
let endEasting = Number(document.getElementById('rw-end-x-input').value = 1083971.0033);
let rwStart = '';
let rwEnd = '';

document.getElementById("Btn").onclick = () => {
    //Get Input
    startNorthing = Number(document.getElementById('rw-start-y-input').value);
    startEasting = Number(document.getElementById('rw-start-x-input').value);
    endNorthing = Number(document.getElementById('rw-end-y-input').value);
    endEasting = Number(document.getElementById('rw-end-x-input').value);

    const obstructions = [
        new Point(1,2184312.9635,1078088.775,435,'STR.1'),
        new Point(2,2184322.739,1077614.6066,430,'STR.1A'),
        new Point(3,2184262.2303,1077163.8697,429,'STR.1B'),
        new Point(4,2184233.5763,1076689.7089,433,'STR.1C'),
        new Point(5,2184208.4449,1076241.3047,442,'STR.1D'),
        new Point(6,2184184.3308,1075841.8828,437,'STR.1E'),
        new Point(7,2184074.8571,1075509.722,433,'STR.1F'),
        new Point(8,2183964.3761,1075177.5375,428,'STR.1G'),
        new Point(9,2183838.7164,1074796.8752,428,'STR.1H'),
        new Point(10,2183713.0454,1074417.0116,425,'STR.1I'),
        new Point(11,2183600.7217,1074076.7527,423,'STR.2'),
        new Point(12,2183308.2108,1074067.1053,423,'STR.2A'),
        new Point(13,2183009.2457,1074057.245,423,'STR.2B'),
        new Point(14,2182706.9543,1074046.9576,423,'STR.2C'),
        new Point(15,2182407.6969,1074036.7332,424,'STR.3'),
        new Point(16,2182410.0317,1074460.6161,426.5,'STR.3A'),
        new Point(17,2182412.3564,1074885.3013,426,'STR.3B'),
        new Point(18,2182417.2486,1075285.1631,423,'STR.3C'),
        new Point(19,2182420.1191,1075635.2064,423,'STR.3D'),
        new Point(20,2182419.9427,1076034.9546,425,'STR.3E'),
        new Point(21,2182426.8012,1076486.2217,426.5,'STR.4')        
    ]

    //Create RW End Points and ALI
    rwStart = new Point(1,startNorthing,startEasting,0,'RwStart');
    rwEnd = new Point(2,endNorthing,endEasting,0,'RwEndPoint');
    const ali = new Line(rwStart,rwEnd);
    const surfaceAli = ali.extend(1600,-ali.getLength() - 1600 - 10200);
    console.log(ali.startPoint,ali.endPoint);
    console.log(surfaceAli.startPoint,surfaceAli.endPoint);

    //Assign Station from Runway Ali to all points
    for (let i = 0; i < obstructions.length; i++){
            obstructions[i].setStationAndOffset(ali);
        }

    let surfaceObstructions = [];

    for (let i = 0; i < obstructions.length; i++){
        let pointStation = obstructions[i].station;
        //if stationing is between start point and 
        if(pointStation < -1600 && pointStation > -surfaceAli.getLength()){
            surfaceObstructions.push(obstructions[i]);
            obstructions[i].setStationAndOffset(surfaceAli);
        }
    }
    console.log(surfaceObstructions);



}



