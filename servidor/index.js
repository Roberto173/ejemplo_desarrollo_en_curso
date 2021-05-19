const express = require("express");



const app = express();


const { response } = require('express');

const cors = require('cors');
const Stripe = require('stripe');

const mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;


const stripe = new Stripe("sk_test_51I85EDEn45cDTiqW4FdrpIqN2JdLn4Ju9taMW4CvBAPRaK6QMAHCEC1x437HiTSFUOMudReBOg4wQhdzxBYpyt3v00MpeGyiD7");


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const clientes = require('./clientes.js');
const envios = require('./pedido.js');
const pago = require('./pago.js');

let db;

MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client){
    if (err!==null) {
        console.log(err);
    }else {
        db=client.db('ongoing');
        app.locals.db = client.db('ongoing');
    }
})
const passport = require("passport");
const session = require("express-session");

app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
    })
  );
  
app.use(passport.initialize());
app.use(passport.session());

const LocalStrategy = require("passport-local").Strategy;

passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      function (email, password, done) {
        db.collection("users")
          .find({ email: email })
          .toArray(function (err, users) {
              console.log(users);
            if (users.length === 0) {
              done(null, false);
            }
            const user = users[0];
            if (password === user.password) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
      }
    )
  );
  
  passport.serializeUser(function (user, done) {
    done(null, user.email);
  });
  
  passport.deserializeUser(function (id, done) {
    db.collection("users")
      .find({ email: id })
      .toArray(function (err, users) {
        if (users.length === 0) {
          done(null, null);
        }
        done(null, users[0]);
      });
  });

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/fail",
  })
);

app.get("/fail", function (req, res) {
  res.status(401).send({ mensaje: "denegado" });
});

app.get("/", function (req, res) {
  if (req.isAuthenticated() === false) {
    return res.status(401).send({ mensaje: "necesitas loguearte" });
  }
  res.send({ mensaje: "logueado correctamente" });
});

app.post("/register", function (req, res) {
  let db = req.app.locals.db;
  db.collection("users").insertOne(
    {
      name: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send({ mensaje: "Registrado" });
      }
    }
  );
});

app.get("/user", function (req, res) {
  if (req.isAuthenticated()) {
    return res.send({ nombre: req.user.name });
  }
  res.send({ nombre: "No logueado" });
});

app.use('/ongoing/clientes', clientes);
app.use('/ongoing/pedido', envios);
app.use('/ongoing/pago', pago);

app.listen(3000);


