const { default: mongoose } = require("mongoose")

    
exports.dbConnect = ()=>{
    mongoose.connect('mongodb+srv://nitinkalal01:HDV9cd8dNs2T70uL@cluster0.hcbvq.mongodb.net/rnw')
    .then(()=>console.log("db connected...."))
    .catch((err)=>console.log(err))
}

