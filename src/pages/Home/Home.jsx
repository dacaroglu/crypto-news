import React from 'react'
import { Component } from 'react'
import Banner from '../../components/Banner/Banner'
import CoinList from '../../components/CoinList/CoinList'
export default class Home extends Component {
     favAdder = async (evt)=>{
        let fav = evt.target.attributes[0]
        fav = fav['value']
        console.log('we are going',typeof fav)
        
        try {
            const fetchResponse = await fetch ('/api/users/favorite',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                   fav:fav,
                   user: this.props.user._id
                })
                
            })
            
            if(!fetchResponse.ok) throw new Error('fetch failed')

        } catch (err) {
           console.log('error happened', err) 
        }

   }
    render(){
        
  return (
    <div className='container'>
        <div className='row'>
        <CoinList/>
            </div>
    </div>
  )
}}
