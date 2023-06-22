const mongoose = require("mongoose");


const mongoConnect = () => {
    const connectionparams = { useNewUrlParser: true };
    mongoose.connect(process.env.MONGO, connectionparams);
    mongoose.set("runValidators", true);
    mongoose.connection.on('error', (err) => {
        console.log(`Error connecting to MongoDB server: ${err.message}`);
    });

    mongoose.connection.on("connected", () => {
        console.log("connected to mongoose server")
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongoDB disconnected");
    });
}

module.exports = mongoConnect;

