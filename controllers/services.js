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