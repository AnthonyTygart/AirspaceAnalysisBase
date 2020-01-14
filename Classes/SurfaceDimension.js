export default class SurfaceDimension{
    constructor(type, dimA, dimB, dimC, dimD, slope, dimE, precisionDimD, precisionSlope, boundarySlope1, boundarySlope2){
        this.type = type;
        this.DimA = dimA;
        this.DimB = dimB
        this.DimC = dimC;
        this.DimD = dimD;
        this.slope = slope;
        this.DimE = dimE;
        this.precisionDimD = precisionDimD;
        this.precisionSlope = precisionSlope;
        this.boundarySlope1 = boundarySlope1;
        this.boundarySlope2 = boundarySlope2;
    } 
}