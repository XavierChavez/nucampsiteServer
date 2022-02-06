const express = require('express');
const promotionRouter = express.Router();
const authenticate = require('../authenticate');
const { verifyAdmin } = require('../authenticate');

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotion to you');
})
.post(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotion');
})
.delete(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end('Deleting all promotion');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotion to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.delete(authenticate.verifyUser, verifyAdmin, (req, res) => {
    res.end('Deleting all promotion');
});

module.exports = promotionRouter;