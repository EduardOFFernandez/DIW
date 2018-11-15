const mongoose= require('mongoose');

const IncidenciasSchema = mongoose.Schema({
    nombreAlumno:String,
    grupoAlumno:String,
    profesor:String,
    horaAtencion:String,
    fecha:Date,
    hora:String,
    lugar:String,
    descripcionIncidente:String,
    importancia:String,
    leve:String,
    grave:String,
    a:String,
    b:String,
    c:String,
    diasD:Number,
    d:String,
    e:String,
    tareas:String,
    dia:String,
    f:String,
    horari:Date,
    f:String,
    dias:Date,
    dias2:Date,
    g:String,
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


module.exports = mongoose.model('partes',IncidenciasSchema);