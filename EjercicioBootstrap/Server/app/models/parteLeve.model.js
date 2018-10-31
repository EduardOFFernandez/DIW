const mongoose= require('mongoose');

const IncidenciaLeveSchema = mongoose.Schema({
    nombreAlumno:String,
    grupoAlumno:String,
    profesor:String,
    horaAtencion:Date,
    fecha:Date,
    hora:Date,
    lugar:Date,
    descripcionIncidente:String,
    importancia:String,
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
    qTipificacio:String,
    rTipificacio:String,
    sTipificacio:String,
    
},{
    timestamps:true
});


module.exports = mongoose.model('parteLeve',IncidenciaLeveSchema);