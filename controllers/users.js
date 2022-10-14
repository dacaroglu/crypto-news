const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6
module.exports= {
    create,
    login,
    update,
    addFav,
    user
}

async function create(req,res){

    try {
        console.log('we are here tryin')
        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        const user = await User.create({
            name:req.body.name,
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword})
        
            const token = jwt.sign({user}, process.env.SECRET,{expiresIn:'24h'})
            res.json(token)
    } catch (err) {
        console.log('Something went wrong',err)
        res.status(400).json(err)
    }
}

async function login(req,res){
    try {
        const user = await User.findOne({email: req.body.email})
        if(!(await bcrypt.compare(req.body.password, user.password))) throw new Error()

        const token = jwt.sign({user}, process.env.SECRET,{expiresIn:'24h'})
        res.json(token)
    } catch (err) {
        res.status(400).json('Bad Credentials')
    }
}
async function update (req,res){
    const user = await User.findOne({email: req.body.email})
    console.log(req.body,'this is req')
    console.log(user)
    user.desc=req.body.desc
    await user.save()   
}
async function addFav(req,res){
    const user = await User.findOne({_id:req.body.user})
    const fav = req.body.fav
    console.log(fav,'this is fav')
        let idx = user.favCoins.indexOf(fav)
        if(idx>=0){
           console.log(idx,'this is idx')
           user.favCoins.splice(idx,1)
        }
        else{ 
        user.favCoins=[...user.favCoins,fav]    }
        await user.save()
}
async function user (req,res){
    const user = await User.findOne({_id:req.body.user})
    console.log(user,' i am null')  
    res.json(user)  
    
    


}