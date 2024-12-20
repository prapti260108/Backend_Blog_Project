const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    ProductUrl: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: String
    }
});

const adminmodel = mongoose.model("new", schema);

module.exports = adminmodel;
