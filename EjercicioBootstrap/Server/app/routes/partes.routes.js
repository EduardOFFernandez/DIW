module.exports = (app) => {
    const parte = require('../controllers/partes.controller.js');

    // Create a new parte Leve
    app.post('/parte', parte.create);

    // Retrieve all parte Leve
    app.get('/parte', parte.findAll);

    // Retrieve a single investigadores with parteLeveId
    app.get('/parte/:parteId', parte.findOne);
    
    // Update a investigadores with parteLeveId
    app.put('/parte/:parteId', parte.update);

    // Delete a investigadores with parteLeveId
    app.delete('/parte/:parteId', parte.delete);

}