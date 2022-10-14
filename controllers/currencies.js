// import fetch from 'request'
const Coin = require('../models/Currency')
const request = require('request')

module.exports = {
    index,
    archiveIndex,
    updateCoins
}
async function index(req,res){
    quote = 'USDT'
    res.status(200).json(quote)
    

}
function archiveIndex(req,res){}
async function updateCoins(req,res){
    const options = {
        url:'https://api.exchange.coinbase.com/products',
        headers: {
            'User-Agent': 'something',
          }
    }
    request (options,function(err, response,body){
        let coins =JSON.parse(response.body)
        console.log(coins)
        coinList={}
        coinList.id = coins.map(e=>e.id);
        coinList.base= coins.map(e=>e.base_currency)
        coinList.quote= coins.map(e=>e.quote_currency)
        coinList.display = coins.map(e=>e.display_name)
        
    })
    let coins = await Coin.create(coinList)



}