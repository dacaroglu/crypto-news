const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const currencySchema = new Schema({
    name:String,
    desc:String,
    url:String,
    photo:String,
    date:Date,
    isarchive:Boolean,
})