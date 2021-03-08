const Service = require('../models/service');

exports.postAddService = (req, res, next) => {
    const service = new Service(req.body.title);
    service.save();
    res.redirect('/');
};

exports.getServices = (req, res, next) => {
    Service.fetchAll(services => {
        res.render('rates', {
            prods: services,
            pageTitle: 'Postal Rates',
            path: '/',
            hasServices: services.length > 0,
            activeRates: true
        });
    });
};

exports.getRates = (req, res, next) => {
    const serviceId = req.params.serviceId;
    Service.fetchById( serviceId, service => {
        res.json(service)        
    })
}

exports.postPurchase = (req, res, next) => {
    const serviceId = req.body.serviceId
    console.log(serviceId)
    const itemWeight = req.body.itemWeight
    Service.fetchById( serviceId, service => {
        const purchase = {
            "name": service.name,
            "weight": itemWeight,
            "price": service.weight.itemWeight
        }
        res.json(purchase)        
    })
}