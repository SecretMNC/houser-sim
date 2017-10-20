const express=require('express'),
     bodyParser=require('body-parser'),
     massive=require('massive'),
     session=require('express-session'),
     cors = require('cors'),
     app=express(),
     port=8080

app.use(bodyParser.json());
app.use(cors);






app.listen(port,()=>console.log(`I can hear you on port: ${port}`))







     