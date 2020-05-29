const express = require('express');
const routes = express.Router();

/*
routes.get('/', (req, res) => {  
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send('Hello World Atualizado!');
});
*/

const productController = require('./controllers/ProductController');

routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

module.exports = routes;
