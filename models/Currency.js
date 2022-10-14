const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const currencySchema = new Schema({
    name:String,
    baseCurrency:String,
    quoteCurrency:String,
    logo:String,
    cId: String,
    voteUp:{},
    voteDown:{},    
})
