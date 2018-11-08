
const Partes = require('../models/partes.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el partes
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"partes Vacio..." 
        });
    }

    const partes = new Partes({
        nombreAlumno: req.body.nombreAlumno || "Sin Nombre",
        grupoAlumno: req.body.grupoAlumno || "Sin Grupo",
        profesor: req.body.profesor || "Sin Profesor",
        lugar: req.body.lugar || "Sin Lugar",
        descripcionIncidente: req.body.descripcionIncidente || "Sin Descripción del Incidente",
        horaAtencion: req.body.horaAtencion,
        fecha: req.body.fecha,
        hora: req.body.hora,
        leve: req.body.leve,
        grave: req.body.grave,
        a: req.body.a,
        b: req.body.b,
        c: req.body.b,
        diasD: req.body.diasD,
        d: req.body.d,
        e: req.body.e,
        tareas: req.body.tareas,
        dia: req.body.dia,
        f: req.body.f,
        horari: req.body.horari,
        dias: req.body.dias,
        dias2: req.body.dias,
        g: req.body.g,
        aTipificacio: req.body.aTipificacio,
        bTipificacio: req.body.bTipificacio,
        cTipificacio: req.body.cTipificacio,
        dTipificacio: req.body.dTipificacio,
        eTipificacio: req.body.eTipificacio,
        fTipificacio: req.body.fTipificacio,
        gTipificacio: req.body.gTipificacio,
        hTipificacio: req.body.hTipificacio,
        iTipificacio: req.body.iTipificacio,
        jTipificacio: req.body.jTipificacio,
        kTipificacio: req.body.kTipificacio,
        lTipificacio: req.body.lTipificacio,
        mTipificacio: req.body.mTipificacio,
        nTipificacio: req.body.nTipificacio,
        oTipificacio: req.body.oTipificacio,
        pTipificacio: req.body.pTipificacio,
        
        
    })

    partes.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating partes"
        });
    });
};



// Obtener todos los parteses
exports.findAll = (req,res) => {

        Partes.find().then(parteses=>{
            res.send(parteses);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un partes por Id
exports.findOne = (req,res) => {
    Partes.findById(req.params.partesId)
    .then(partes=>{
        if (!partes){
            return res.status(404).send({
                message: "partes NOT FOUND con ID " +req.params.partesId
            });
            }
            res.send(partes);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "partes no encontrado con ese id :" +req.params.partesId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.partesId
             });
        });
    };




// Actualizar un partes
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "partes vacio"
        });
    }

    // Find note and update it with the request body
    Partes.findByIdAndUpdate(req.params.partesId, {
        nombre: req.body.nombre|| 'Sin nombre',
        grup: req.body.grup || 'Sin grupo',
        professor: req.body.professor || 'Sin profesor',
        atencio: req.body.atencio || 'Sin atencion',
        incident: req.body.incident || 'Sin incidente',
        horari: req.body.horari || 'Sin horario',
        lloc: req.body.lloc || 'Sin lugar'
        
    }, {new: true})
    .then(partes => {
        if(!partes) {
            return res.status(404).send({
                message: "partes not found with id " + req.params.partesId
            });
        }
        res.send(partes);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "partes not found with id " + req.params.partesId
            });                
        }
        return res.status(500).send({
            message: "Error updating partes with id " + req.params.partesId
        });
    });
};

// Borrar un partes 
exports.delete = (req,res)=>{
    Partes.findByIdAndRemove(req.params.partesId)
    .then(partes => {
        if(!partes) {
            return res.status(404).send({
                message: "partes no encontrado " + req.params.partesId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "partes not found with id " + req.params.partesId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese partes with id " + req.params.partesId
        });
    });
};
