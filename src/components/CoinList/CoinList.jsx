import React, { Component } from 'react'

export default class CoinList extends Component {
  socket = new WebSocket('wss://ws-feed.exchange.coinbase.com')
  
  coinLister = (status,socket)=>{
    
    if(status){socket.close();return}
    console.log('were')
    socket.addEventListener('open',function(event){
      socket.send(JSON.stringify(msg))
  
  })
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
  
  this.socket.addEventListener('message',function(event){
      console.log('asd')
    let priceData = JSON.parse(event.data);
      if(document.querySelector('.table')!=''){
      switch(priceData.product_id) {
      case 'BTC-USD':
          // console.log('price of btc is: ' , priceData)
          let btc = document.querySelector('.btc')
          if(btc){
          btc.querySelector('.highest').innerHTML=priceData.high_24h
          btc.querySelector('.lowest').innerHTML=priceData.low_24h
          btc.querySelector('.volume').innerHTML=priceData.volume_24h
          btc.querySelector('.current').innerHTML=priceData.price
          priceData.high_24h<priceData.price ?btc.querySelector('.current').className='current red':btc.querySelector('.current').className='current green'}
          break;
      case 'ETH-USD':
          let eth = document.querySelector('.eth')
          if(eth){
          eth.querySelector('.highest').innerHTML=priceData.high_24h
          eth.querySelector('.lowest').innerHTML=priceData.low_24h
          eth.querySelector('.volume').innerHTML=priceData.volume_24h
          eth.querySelector('.current').innerHTML=priceData.price
          
          priceData.high_24h<priceData.price ?eth.querySelector('.current').className='current red':eth.querySelector('.current').className='current green'}
  
          break;
      case 'BAND-USD':
          let band = document.querySelector('.band')
          if(band){
          band.querySelector('.highest').innerHTML=priceData.high_24h
          band.querySelector('.lowest').innerHTML=priceData.low_24h
          band.querySelector('.volume').innerHTML=priceData.volume_24h
          band.querySelector('.current').innerHTML=priceData.price
          
          priceData.high_24h<priceData.price ?band.querySelector('.current').className='current red':band.querySelector('.current').className='current green'}
  
          break;
      case 'MANA-USD':
          let mana = document.querySelector('.mana')
          if(mana){
          mana.querySelector('.highest').innerHTML=priceData.high_24h
          mana.querySelector('.lowest').innerHTML=priceData.low_24h
          mana.querySelector('.volume').innerHTML=priceData.volume_24h
          mana.querySelector('.current').innerHTML=priceData.price
          
          priceData.high_24h<priceData.price ?mana.querySelector('.current').className='current red':mana.querySelector('.current').className='current green'}
  
          break;
      case 'ALICE-USD':
          
          let alice = document.querySelector('.alice')
          if(alice){
          alice.querySelector('.highest').innerHTML=priceData.high_24h
          alice.querySelector('.lowest').innerHTML=priceData.low_24h
          alice.querySelector('.volume').innerHTML=priceData.volume_24h
          alice.querySelector('.current').innerHTML=priceData.price
          
          priceData.high_24h<priceData.price ?alice.querySelector('.current').className='current red':alice.querySelector('.current').className='current green'}
  
          break;
      case 'DOGE-USD':
          let luna = document.querySelector('.doge')
          if(luna){
          luna.querySelector('.highest').innerHTML=priceData.high_24h
          luna.querySelector('.lowest').innerHTML=priceData.low_24h
          luna.querySelector('.volume').innerHTML=priceData.volume_24h
          luna.querySelector('.current').innerHTML=priceData.price
          
          priceData.high_24h<priceData.price ?luna.querySelector('.current').className='current red':luna.querySelector('.current').className='current green'}
  
          break;
      case 'SAND-USD':
          let sand = document.querySelector('.sand')
          if(sand){
          sand.querySelector('.highest').innerHTML=priceData.high_24h
          sand.querySelector('.lowest').innerHTML=priceData.low_24h
          sand.querySelector('.volume').innerHTML=priceData.volume_24h
          sand.querySelector('.current').innerHTML=priceData.price
          
          priceData.high_24h<priceData.price ?sand.querySelector('.current').className='current red':sand.querySelector('.current').className='current green'}
  
          break;
          case 'ADA-USD':
              let ada = document.querySelector('.ada')
              if(ada){
              ada.querySelector('.highest').innerHTML=priceData.high_24h
              ada.querySelector('.lowest').innerHTML=priceData.low_24h
              ada.querySelector('.volume').innerHTML=priceData.volume_24h
              ada.querySelector('.current').innerHTML=priceData.price
              
              priceData.high_24h<priceData.price ?ada.querySelector('.current').className='current red':ada.querySelector('.current').className='current green'}
      
              break;
              
      }}
      

  })
  }
  componentWillMount(){
    console.log('mounting')
    this.coinLister('',this.socket)
  }
  componentWillUnmount(){
    console.log('unmounting')
    this.socket.close()

  }
  
  render(){
    
  return (
    <div>
        
            <table className='highlight'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Volume 24h</th>
                    <th>Last Highest 24h</th>
                    <th>Last Lowest 24h</th>
                    <th>Current Price</th>
                </tr>
                

            </thead>
            <tbody className='table'>
                <tr id = 'btc' className='btc'>
                    <td className='name'>Bitcoin</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' >
                        <i onClick={this.favAdder} value= 'BTC-USD' name= 'BTC-USD'className="material-icons emptyfav">favorite_border</i>
                        </td>
                </tr>
                <tr className='eth'>
                    <td className='name'>Ethereum</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' ><i onClick={this.favAdder} value= 'ETH-USD'className="material-icons emptyfav">favorite_border</i></td>
                </tr>
                <tr className='doge'>
                    <td className='name'>Doge</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' ><i onClick={this.favAdder} value= 'DOGE-USD' className="material-icons emptyfav">favorite_border</i></td>
                </tr>
                <tr className='band'>
                    <td className='name'>Band</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' ><i onClick={this.favAdder} value= 'BAND-USD' className="material-icons emptyfav">favorite_border</i></td>
                </tr>
                <tr className='alice'>
                    <td className='name'>Alice</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' ><i onClick={this.favAdder} value= 'ALICE-USD'className="material-icons emptyfav">favorite_border</i></td>
                </tr>
                <tr className='sand'>
                    <td className='name'>Sand</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' ><i onClick={this.favAdder} value= 'SAND-USD' className="material-icons emptyfav">favorite_border</i></td>
                </tr>
                <tr className='mana'>
                    
                    <td className='name'>Mana</td>
                    <td className='volume' ></td>
                    <td className='highest' ></td>
                    <td className='lowest' ></td>
                    <td className='current' ></td>
                    <td className='current' ><i onClick={this.favAdder} value= 'MANA-USD' className="material-icons emptyfav">favorite_border</i></td>
                </tr>
                <tr className='ada'>
                    
                    <td className='name'>Ada</td>
                    <td className='volume' >0</td>
                    <td className='highest' >0</td>
                    <td className='lowest' >0</td>
                    <td className='current' >0</td>
                    <td className='current' ><i onClick={this.favAdder} value= 'ADA-USD' className="material-icons emptyfav">favorite_border</i></td>
                </tr>
            </tbody>
        </table>
        </div>
    
  )
}}
