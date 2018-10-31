const ParteLeve = require('../models/parteLeve.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Parte Vacio..." 
        });
    }

    const parteLeve = new ParteLeve({
        nombreAlumno: req.body.nombreAlumno || "Sin Nombre",
        grupoAlumno: req.body.grupoAlumno || "Sin Grupo",
        profesor: req.body.profesor || "Sin Profesor",
        horaAtencion: req.body.horaAtencion || "Sin Hora de Atencion",
        fecha: req.body.fecha || "Sin Fecha",
        hora: req.body.hora || "Sin Hora",
        lugar: req.body.lugar || "Sin Lugar",
        descripcionIncidente: req.body.descripcionIncidente || "Sin Descripción del Incidente",
        
    })

    parteLeve.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating investigador"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req,res) => {

        ParteLeve.find().then(partes=>{
            res.send(partes);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un investigador por Id
exports.findOne = (req,res) => {
    ParteLeve.findById(req.params.parteLeveId)
    .then(parteLeve=>{
        if (!parteLeve){
            return res.status(404).send({
                message: "Investigador NOT FOUND con ID " +req.params.parteLeveId
            });
            }
            res.send(parteLeve);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" +req.params.parteLeveId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.parteLeveId
             });
        });
    };




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Parte leve vacio"
        });
    }

    // Find note and update it with the request body
    ParteLeve.findByIdAndUpdate(req.params.parteLeveId, {
        nombreAlumno: req.body.nombreAlumno || "Sin Nombre",
        grupoAlumno: req.body.grupoAlumno || "Sin Grupo",
        profesor: req.body.profesor || "Sin Profesor",
        horaAtencion: req.body.horaAtencion || "Sin Hora de Atencion",
        fecha: req.body.fecha || "Sin Fecha",
        hora: req.body.hora || "Sin Hora",
        lugar: req.body.lugar || "Sin Lugar",
        descripcionIncidente: req.body.descripcionIncidente || "Sin Descripción del Incidente",
    }, {new: true})
    .then(parteLeve => {
        if(!parteLeve) {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.parteLeveId
            });
        }
        res.send(parteLeve);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.parteLeveId
            });                
        }
        return res.status(500).send({
            message: "Error updating Investigador with id " + req.params.parteLeveId
        });
    });
};

// Borrar un investigador 
exports.delete = (req,res)=>{
    Investigador.findByIdAndRemove(req.params.parteLeveId)
    .then(parteLeve => {
        if(!parteLeve) {
            return res.status(404).send({
                message: "Investigador no encontrado " + req.params.parteLeveId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Investigador not found with id " + req.params.parteLeveId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Investigador with id " + req.params.parteLeveId
        });
    });
};