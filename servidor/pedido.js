const express = require('express');
const router = express.Router();



router.post('/', function (req, res) {
    let db = req.app.locals.db;

    let nombreRemite = req.body.nombreRemite;
    let movilRemite = req.body.movilRemite;
    let nombreDestino = req.body.nombreDestino;
    let direccionRemite = req.body.direccionRemite;
    let direccionEntrega = req.body.direccionEntrega;
    let comentario = req.body.comentario;
    
    let pedido = {
        nombreRemite: nombreRemite,
        movilRemite: movilRemite,
        nombreDestino: nombreDestino,
        direccionRemite: direccionRemite,
        direccionEntrega: direccionEntrega,
        comentario: comentario
    }

    db.collection('pedido').insertOne(pedido, function(err, datos){
        if(err!==null){
            console.log(err);
            res.send({mensaje: "error:" + err});
        }else {
            res.send(datos);
            console.log('Pedido guardado. Gracias.');
        }
    })
});

module.exports = router;