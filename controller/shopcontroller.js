const bodyParser= require('body-parser');
const urlEncodeParser = bodyParser.urlencoded({extended :false});
var cart = [];

var products = [
    {
        title: 'Guitar',
        price: '200',
        category: 'music',
        image_url: '/assets/i4.jpg'
    }, 
    {
        title: 'Membranophone',
        price: '100',
        category: 'music',
        image_url: '/assets/i2.jpg'
    },
    {   
        title: 'Piano',
        price: '2100',
        category: 'music',
        image_url: '/assets/i3.jpg'
    }
    
]

module.exports = function(app){
    app.get('/shop',(req,resp) => {
       resp.render('index',{ items : cart, products: products });
    });

    app.post('/shop/:id',urlEncodeParser,(req,resp) => {
       var i =req.params.id
        cart.push(i);
       resp.render('index',{ items :cart, products: products });
    });

    app.delete('/shop/:id',(req,resp) => {
        var item = req.params.id;
        var index =cart.indexOf(item);
        cart.splice(index,1);
        resp.render('index',{ items :cart, products: products });
    });

    app.get('/shop/checkout',(req,resp) => {
        resp.render('checkout',{items:cart});
    });

    app.get('/shop/checkout/payment',(req,resp) => {
        resp.render('payment');
    })
 };

