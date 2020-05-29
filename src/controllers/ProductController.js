const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) { 
        const { page = 1 } = req.query;     // controlador de paginas.
        const products = await Product.paginate({}, { page, limit: 10 }); // { page: 1, limit: 10 } configuracao de paginacao.
        return res.json(products);
    },
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) // { new: true } => para que os dados retornados à variavel 'product' sejam as mais recentes (atualizadas), caso contrario retornara as inf. antes da atualizacao.
        return res.json(product);
    },
    async destroy(req, res) {
        await Product.findOneAndRemove(req.params.id);
        return res.send();
    }
};
