const express = require("express");
const app = express();

const mongoose  = require("mongoose");

let bodyParser = require("body-parser");

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI,{UseNewUrlParser:true});
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use('/api/auth', require('./routes/authRoutes'));



app.listen(5000 || process.env.PORT, function(){
console.log("Server started on port 5000");
});
