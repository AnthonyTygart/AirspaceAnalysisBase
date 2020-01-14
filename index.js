import Point from './Classes/Point.js';
import ObstructionPoint from './Classes/Obstruction.js';
import Line from './Classes/Line.js';
import PointManager from './Classes/PointManager.js';
import Surface from './Classes/Surface.js';
import SurfaceDimension from './Classes/SurfaceDimension.js';

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



    //Create RW End Points and ALI
    rwStart = new Point(1,startNorthing,startEasting,384.2,'RwStart');
    rwEnd = new Point(2,endNorthing,endEasting,384.2,'RwEndPoint');

    const ali = new Line(rwStart,rwEnd);
    ali.extend()

    const pointManager = new PointManager();
    pointManager.points = [
        new ObstructionPoint(1,2184312.9635,1078088.775,435,'STR.1'),
        new ObstructionPoint(2,2184322.739,1077614.6066,430,'STR.1A'),
        new ObstructionPoint(3,2184262.2303,1077163.8697,429,'STR.1B'),
        new ObstructionPoint(4,2184233.5763,1076689.7089,433,'STR.1C'),
        new ObstructionPoint(5,2184208.4449,1076241.3047,442,'STR.1D'),
        new ObstructionPoint(6,2184184.3308,1075841.8828,437,'STR.1E'),
        new ObstructionPoint(7,2184074.8571,1075509.722,433,'STR.1F'),
        new ObstructionPoint(8,2183964.3761,1075177.5375,428,'STR.1G'),
        new ObstructionPoint(9,2183838.7164,1074796.8752,428,'STR.1H'),
        new ObstructionPoint(10,2183713.0454,1074417.0116,425,'STR.1I'),
        new ObstructionPoint(11,2183600.7217,1074076.7527,423,'STR.2'),
        new ObstructionPoint(12,2183308.2108,1074067.1053,423,'STR.2A'),
        new ObstructionPoint(13,2183009.2457,1074057.245,423,'STR.2B'),
        new ObstructionPoint(14,2182706.9543,1074046.9576,423,'STR.2C'),
        new ObstructionPoint(15,2182407.6969,1074036.7332,424,'STR.3'),
        new ObstructionPoint(16,2182410.0317,1074460.6161,426.5,'STR.3A'),
        new ObstructionPoint(17,2182412.3564,1074885.3013,426,'STR.3B'),
        new ObstructionPoint(18,2182417.2486,1075285.1631,423,'STR.3C'),
        new ObstructionPoint(19,2182420.1191,1075635.2064,423,'STR.3D'),
        new ObstructionPoint(20,2182419.9427,1076034.9546,425,'STR.3E'),
        new ObstructionPoint(21,2182426.8012,1076486.2217,426.5,'STR.4')   
    ];

    const surfaceDims = new SurfaceDimension('CatD',0,1000,6466,10200,50);
    const surfaceAli = ali.extend(1600,-ali.getLength() - surfaceDims.DimD - 1600); //!need to account for which runway end

    const newSurface = new Surface('CatD',surfaceAli,surfaceDims);
    newSurface.addObstructionsToSurface(pointManager.points)
    console.log(newSurface.points);
}



