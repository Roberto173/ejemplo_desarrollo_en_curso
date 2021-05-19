const express = require("express");
const router = express.Router();

const passport = require("passport");
const session = require("express-session");

const app = express();

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
        let db = req.app.locals.db;
        db.collection("users")
          .find({ email: email })
          .toArray(function (err, users) {
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
    let db = req.app.locals.db;
    db.collection("users")
      .find({ email: id })
      .toArray(function (err, users) {
        if (users.length === 0) {
          done(null, null);
        }
        done(null, users[0]);
      });
  });

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/fail",
  })
);

router.get("/fail", function (req, res) {
  res.status(401).send({ mensaje: "denegado" });
});

router.get("/", function (req, res) {
  if (req.isAuthenticated() === false) {
    return res.status(401).send({ mensaje: "necesitas loguearte" });
  }
  res.send({ mensaje: "logueado correctamente" });
});

router.post("/register", function (req, res) {
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

router.get("/user", function (req, res) {
  if (req.isAuthenticated()) {
    return res.send({ nombre: req.user.name });
  }
  res.send({ nombre: "No logueado" });
});

module.exports = router;