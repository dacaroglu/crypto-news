
function new_tab_show_callback() {
    console.log('')
}

var instance_tabs




window.addEventListener('hashchange', () => {
    console.log('The hash has changed!')
  }, false);  

let msg = {
    "type": "subscribe",
    "product_ids": [
        "ETH-USD",
        "BTC-USD",
        "BAND-USDT",
        "MANA-USD",
        "ALICE-USD",
        "DOGE-USD",
        "SAND-USD",
        "ADA-USD"
    ],
    "channels": [
        {
            "name": "ticker",
            "product_ids": [
                "ETH-USD",
                "BTC-USD",
                "BAND-USD",
                "MANA-USD",
                "ALICE-USD",
                "DOGE-USD",
                "SAND-USD",
                "ADA-USD"
            ]
        }
    ]
};

// const socket = new WebSocket('wss://ws-feed.exchange.coinbase.com')
// socket.addEventListener('open',function(event){
//     socket.send(JSON.stringify(msg))

// })
// socket.addEventListener('message',function(event){
//     let priceData = JSON.parse(event.data);
//     if(document.querySelector('.table')!=''){
//     switch(priceData.product_id) {
//     case 'BTC-USD':
//         // console.log('price of btc is: ' , priceData)
//         let btc = document.querySelector('.btc')
//         btc.querySelector('.highest').innerHTML=priceData.high_24h
//         btc.querySelector('.lowest').innerHTML=priceData.low_24h
//         btc.querySelector('.volume').innerHTML=priceData.volume_24h
//         btc.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?btc.querySelector('.current').className='current red':btc.querySelector('.current').className='current green'
//         break;
//     case 'ETH-USD':
//         let eth = document.querySelector('.eth')
//         eth.querySelector('.highest').innerHTML=priceData.high_24h
//         eth.querySelector('.lowest').innerHTML=priceData.low_24h
//         eth.querySelector('.volume').innerHTML=priceData.volume_24h
//         eth.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?eth.querySelector('.current').className='current red':eth.querySelector('.current').className='current green'

//         break;
//     case 'BAND-USD':
//         let band = document.querySelector('.band')
//         band.querySelector('.highest').innerHTML=priceData.high_24h
//         band.querySelector('.lowest').innerHTML=priceData.low_24h
//         band.querySelector('.volume').innerHTML=priceData.volume_24h
//         band.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?band.querySelector('.current').className='current red':band.querySelector('.current').className='current green'

//         break;
//     case 'MANA-USD':
//         let mana = document.querySelector('.mana')
//         mana.querySelector('.highest').innerHTML=priceData.high_24h
//         mana.querySelector('.lowest').innerHTML=priceData.low_24h
//         mana.querySelector('.volume').innerHTML=priceData.volume_24h
//         mana.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?mana.querySelector('.current').className='current red':mana.querySelector('.current').className='current green'

//         break;
//     case 'ALICE-USD':
//         let alice = document.querySelector('.alice')
//         alice.querySelector('.highest').innerHTML=priceData.high_24h
//         alice.querySelector('.lowest').innerHTML=priceData.low_24h
//         alice.querySelector('.volume').innerHTML=priceData.volume_24h
//         alice.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?alice.querySelector('.current').className='current red':alice.querySelector('.current').className='current green'

//         break;
//     case 'DOGE-USD':
//         let luna = document.querySelector('.doge')
//         luna.querySelector('.highest').innerHTML=priceData.high_24h
//         luna.querySelector('.lowest').innerHTML=priceData.low_24h
//         luna.querySelector('.volume').innerHTML=priceData.volume_24h
//         luna.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?luna.querySelector('.current').className='current red':luna.querySelector('.current').className='current green'

//         break;
//     case 'SAND-USD':
//         let sand = document.querySelector('.sand')
//         sand.querySelector('.highest').innerHTML=priceData.high_24h
//         sand.querySelector('.lowest').innerHTML=priceData.low_24h
//         sand.querySelector('.volume').innerHTML=priceData.volume_24h
//         sand.querySelector('.current').innerHTML=priceData.price
//         priceData.high_24h<priceData.price ?sand.querySelector('.current').className='current red':sand.querySelector('.current').className='current green'

//         break;
//         case 'ADA-USD':
//             let ada = document.querySelector('.ada')
//             ada.querySelector('.highest').innerHTML=priceData.high_24h
//             ada.querySelector('.lowest').innerHTML=priceData.low_24h
//             ada.querySelector('.volume').innerHTML=priceData.volume_24h
//             ada.querySelector('.current').innerHTML=priceData.price
//             priceData.high_24h<priceData.price ?ada.querySelector('.current').className='current red':ada.querySelector('.current').className='current green'
    
//             break;
            
//     }}

// })
