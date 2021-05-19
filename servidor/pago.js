const express = require('express');
const { default: Stripe } = require('stripe');
const router = express.Router();

router.post('/', function (req, res) {
    console.log(req.body);
    const { id, amount } = req.body;
    const payment = stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Servicio de Mensajería Urgente",
        payment_method: id,
        confirm: true 
    });

    console.log(payment);

    res.send({message: "Pago efectuado correctamente"});
   
});

module.exports = router;