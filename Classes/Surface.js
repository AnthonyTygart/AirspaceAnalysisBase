
import PointLineFunctions from './PointLineFunctions.js';
import SurfaceDimension from './SurfaceDimension.js';

export default class Surface{
    constructor(type,ali,surfaceDims){
        this.type = type;
        this.ali = ali
        this.dimensions = surfaceDims;
        this.points = [];
    }

    addObstructionsToSurface(allPoints){
        if(this.dimensions === undefined) throw 'Dimensions are not defined';

        let tempPoints = [];
        //Add All Points to this surface
        for (let i = 0; i < allPoints.length; i++){
           tempPoints.push(allPoints[i]);
        }

        PointLineFunctions.setStationOffsetAllPoints(tempPoints,this.ali)

        switch(this.type){
            case 'VisualA':
            case 'VisualB':
            case 'CatA':
            case 'CatB':
            case 'CatC':
            case 'CatD':

                for (let i = 0; i < tempPoints.length; i++){
                    // let pointStation = PointLineFunctions.getStation(allPoints[i],this.ali);
                    
                    let pointStation =tempPoints[i].station;
                    let pointOffset = Math.abs(tempPoints[i].offset);
                    let boundOffset = this.getApproachBoundaryOffset(pointStation);
                    //if stationing falls on the surface ali add point to point list.
                    if(pointStation > 0 + this.dimensions.DimA
                        && pointStation < this.ali.getLength()
                        && boundOffset > pointOffset){
                    this.points.push(tempPoints[i]);
                    }
                }
                this.setObstructionElevations();
                break;
        }

    }

    getApproachBoundaryOffset(pointStation){
        const boundarySlope = ((this.dimensions.DimC/2) - (this.dimensions.DimB/2)) / this.dimensions.DimD //Boundary Line Flare Slope (Rise over Run)
        return (boundarySlope * (pointStation - this.dimensions.DimA)) + (this.dimensions.DimB/2) //returns Distance from centerline to surface boundary
    }

    setObstructionElevations(){
        for(let i = 0; i < this.points.length; i++){
            let surfSlope = 1/this.dimensions.slope;
            let station = this.points[i].station;

            this.points[i].surfaceZ = this.ali.startPoint.z + (station * surfSlope);
            this.points[i].penetrationHeight =  this.points[i].z - this.points[i].surfaceZ;
        }
    }
}