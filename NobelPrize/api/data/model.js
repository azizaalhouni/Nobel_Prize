const mongoose = require("mongoose");


const prizeSchema = new mongoose.Schema({
        firstname : String,
        surname: String,
        born: Date,
        died : Date,
        bornCountry : String,
        bornCountryCode : String,
        bornCity : String,
        diedCountry : String,
        diedCountryCode : String,
        diedCity : String,
        gender : String,
        year : Number,
        category : String,
        motivation : String,
        affiliation : String   
});

mongoose.model("Prize", prizeSchema,"laureates");