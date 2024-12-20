//h1234
//mongodb+srv://hellyvirugama:h1234@cluster0.8txxwvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//db
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://hellyvirugama:h1234@cluster0.8txxwvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected");
})

module.exports = db;