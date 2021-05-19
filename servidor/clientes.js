const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let db = req.app.locals.db;
    db.collection('clientes').find().toArray(function(err, datos){
        if(err!==null){
            console.log(err);
            res.send({mensaje: "error:" + err});
        }else {
            console.log(datos);
            res.send(datos);
        }
    });
});

router.post('/nuevo', function (req, res) {
    let db = req.app.locals.db;

    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;

    let cliente = {
        nombre: nombre,
        email: email,
        password: password
    }
    db.collection('clientes').insertOne(cliente, function(err, datos){
        if(err!==null){
            console.log(err);
            res.send({mensaje: "error:" + err});
        }else {
            res.send(datos);
            console.log('El cliente se ha añadido');
        }
    })
});

router.put('/modificar', function (req, res) {
    let db = req.app.locals.db;

    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;

    let cliente = {
        nombre: nombre,
        email: email,
        password: password
    }
    db.collection('clientes').updateOne({dni: dni}, 
                                        {$set:
                                        {nombre: nombre,
                                        email: email,
                                        password: password}},
                                        function(err, datos){
        if(err!==null){
            console.log(err);
            res.send({mensaje: "error:" + err});
        }else {
            res.send(datos);
            console.log('El cliente se ha modificado correctamente');
        }
    })
});


module.exports = router;