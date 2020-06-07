var express=require('express')
var app=express();
require('dotenv').config();





if(process.env.NODE_ENV==="production"){
    port=process.env.PORT
}
else{
    port=4000;
}



app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/images"));
//app.use(express.favicon());
// app.use(express.static());

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html")
})
console.log(app.get('env'))

app.listen(port ,function(){
    console.log(`running at ${port}`)
})



