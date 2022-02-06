const express = require('express');
const Partner = './partnerRouter.js';
const partnerRouter = express.Router();
const authenticate = require('../authenticate');
const { verifyAdmin } = require('../authenticate');


partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.delete(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end('Deleting all partners');
});

module.exports = partnerRouter;