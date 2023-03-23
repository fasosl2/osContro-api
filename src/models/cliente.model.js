/**
 * Arquivo: models/cliente.js
 * Descrição: Responsável pelo modelo da classe 'Cliente' da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nomeCliente: {
        type: String,
        required: true,
        maxlength: 100
    },
    estado: {
        type: String,
        required: true,
        maxlength: 50
    },
    cnpj: {
        type: String,
        required: true,
        maxlength: 100
    }
}, {
    timestamps: true,
    collection: 'clientes'
});


module.exports = mongoose.model('cliente', clienteSchema);
