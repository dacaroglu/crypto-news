const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const userSchema = new Schema({
    name: String,
    username:String,
    email:String,
    icon:String,
    password:String,
    desc:String,
    favCoins: Array,
    },{
        timestamps: true,
        toJSON: {
          transform: function(doc, ret) {
            delete ret.password;
            return ret;
          }
        }
      })

module.exports = mongoose.model('User',userSchema)
