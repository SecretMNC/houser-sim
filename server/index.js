const express=require('express'),
      bodyParser=require('body-parser'),
      massive=require('massive'),
      session=require('express-session'),
      cors = require('cors'),
      port=8080;

require("dotenv").config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db)
    })


app.get("/api/test", function(req, res) {
    (app.get("db").test().then(test => {
        res.send(test)
    })
)})




app.listen(port,()=>console.log(`I can hear you on port: ${port}`))







     