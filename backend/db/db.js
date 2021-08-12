const mongoose = require("mongoose");
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser : true,
            useFindAndModify : false,
            useCreateIndex : true,
            useUnifiedTopology : true,
        });
        console.log("The connection is sucefill : ON");
    } catch(e){
        console.log("Error connection to MongoDB: ",e);
        throw new Error("Error connection to MongoDB");
    }
}

module.exports= {dbConnection};