const mongoose= require('mongoose');

const IncidenciaGraveSchema = mongoose.Schema({
    nombreAlumno:String,
    grupoAlumno:String,
    profesor:String,
    horaAtencion:Date,
    fecha:Date,
    hora:Date,
    lugar:Date,
    descripcionIncidente:String,
    importancia:String,
    aTipificacio:String,
    bTipificacio:String,
    cTipificacio:String,
    dTipificacio:String,
    eTipificacio:String,
    fTipificacio:String,
    gTipificacio:String,
    hTipificacio:String,
    iTipificacio:String,
    jTipificacio:String,
    kTipificacio:String,
    lTipificacio:String,
    mTipificacio:String,
    nTipificacio:String,
    oTipificacio:String,
    pTipificacio:String,
    
    
},{
    timestamps:true
});


module.exports = mongoose.model('parteGrave',IncidenciaGraveSchema);