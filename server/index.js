require("dotenv").config()

const express=require('express'),
      bodyParser=require('body-parser'),
      massive=require('massive'),
      session=require('express-session'),
      cors = require('cors'),
      port=8080,
      pc=require("./controllers/properties_controller")


const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(middleware.isAuthed);
// app.use(session({
//     secret: 'ksdhfjklsdhfkldsfksdfkklfsfwewefvinivne',
//     resave: false,
//     saveUninitialized: true
// }))



massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db)
    })


app.get("/api/test", function(req, res) {
    (app.get("db").test().then(test => {
        res.send(test)
    })
)})


// app.get("/api/:shelf", shelfcontrol.getBins)

// app.get("/api/:shelf/:bin", shelfcontrol.getBin)

// app.put("/api/:shelf/:bin", shelfcontrol.updateBin)

// app.delete("/api/:shelf/:bin", shelfcontrol.deleteBin)

// app.post("/api/:shelf/:bin", shelfcontrol.createBin)


///////// AUTH ENDPOINTS //////////

// app.post()
// app.post()
// app.post()



///////// PROP ENDPOINTS //////////

app.post("/api/properties", pc.create);
app.get("/api/properties", pc.getAll);
app.delete("/api/properties/:id", pc.delete);
// app.get("/api/properties/filter", pc.filter)



app.listen(port,()=>console.log(`I can hear you on port: ${port}`))







     