const querystring = require('querystring');
const index = (req, res) => {
    const query = querystring.stringify(req.query);

    fetch('https://fakestoreapi.com/products?' + query)
        .then(response => response.json())
        .then(productos => {
            res.render('productos', { productos }); // Use 'res' instead of 'response'
        });
}

module.exports = {
    index
}