const mongoose = require('mongoose');
//mongodb+srv://truongphatdat2002ct:<password>@cluster0.igwt55s.mongodb.net/test

const url = "mongodb+srv://gjsdsdfsda:Sb2ocYmbHi2uV0mT@cluster0.civgvpv.mongodb.net/test"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./toy.model');
