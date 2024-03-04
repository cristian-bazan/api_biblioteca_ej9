const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const ClientesSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String
}, { collection: 'clientes' });

const Clientes = mongoose.model('Clientes', ClientesSchema);

module.exports = Clientes