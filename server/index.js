require("dotenv").config();

const express = require("express"),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  session = require("express-session"),
  cors = require("cors"),
  port = 8080,
  pc = require("./controllers/properties_controller"),
  auth = require("./controllers/auth_controllers");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MIDDLEWARE (SESSIONS)

app.use(
  session({
    secret: "ksdhfjklsdhfkldsfksdfkklfsfwewefvinivne",
    resave: false,
    saveUninitialized: true
  })
);


massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/test", function(req, res) {
  app
    .get("db")
    .test()
    .then(test => {
      res.send(test);
    });
});

///////// AUTH ENDPOINTS //////////

app.post("/api/auth/login", auth.login);
app.post("/api/auth/register", auth.register);
app.post("/api/auth/logout", auth.logout);

///////// PROP ENDPOINTS //////////

app.post("/api/properties", pc.create);
app.get("/api/properties", pc.getAll);
app.delete("/api/properties/:id", pc.delete);
// app.get("/api/properties/filter", pc.filter)

app.listen(port, () => console.log(`I can hear you on port: ${port}`));
