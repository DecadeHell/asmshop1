const mongoose = require('mongoose');
//mongodb+srv://truongphatdat2002ct:<password>@cluster0.igwt55s.mongodb.net/test

const url = "mongodb+srv://truongphatdat2002ct:phatdat0202@cluster0.igwt55s.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./toy.model');
