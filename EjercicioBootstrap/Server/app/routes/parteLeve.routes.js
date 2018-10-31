module.exports = (app) => {
    const parteLeve = require('../controllers/parteLeve.controller.js');

    // Create a new parte Leve
    app.post('/parteLeve', parteLeve.create);

    // Retrieve all parte Leve
    app.get('/parteLeve', parteLeve.findAll);

    // Retrieve a single investigadores with parteLeveId
    app.get('/parteLeve/:parteLeveId', parteLeve.findOne);
    
    // Update a investigadores with parteLeveId
    app.put('/investigadores/:parteLeveId', parteLeve.update);

    // Delete a investigadores with parteLeveId
    app.delete('/investigadores/:parteLeveId', parteLeve.delete);

}