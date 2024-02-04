const express = require("express")
const mongoose = require("mongoose") 
const productRoutes = require('./routes/productRoutes')
const bodyParser = require('body-parser')
const cors = require ('cors')
const app = express();
app.use(cors())
 app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/e_commerce',
{
     useNewUrlParser: true, useUnifiedTopology: true 

});


app.use('/api',productRoutes)

const PORT = 5000;
app.listen(PORT,()=>{
    try {
        console.log(`server running on ${PORT}`);
    } catch (error) {
        console.log("have a error")
    }
})