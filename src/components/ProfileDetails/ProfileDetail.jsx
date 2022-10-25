import React from 'react'
import { Component } from 'react'
import M from 'materialize-css'
import CoinList from '../CoinList/CoinList'
export default class ProfileDetail extends Component {
    state={
        usern:{favCoins:''}
    }
    user= this.props.user
    
    componentWillMount(){
        fetch('/api/users/user',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                user:this.user._id
    
            })
        }).then((res)=> res.json())
        .then((json)=>{
            console.log(json)
            this.setState({usern:json})
        })
        
    }
    componentDidMount(){
        
        const options={}
        var elem = document.querySelectorAll('.modal');
        M.Modal.init(elem, options);
        
        
    }
    handleChange= (evt)=>{
            this.user.desc=evt.target.value
        }
    handleSubmit = async (evt) =>{
    evt.preventDefault()

        try {
            
            const fetchResponse = await fetch('/api/users/update',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    desc:this.user.desc,
                    email:this.user.email
                })
            })
            if(!fetchResponse.ok) throw new Error('Fetch Failed')
        } catch (err) {
            console.log('form error before trying',err)
        }
    }
    render(){
    
  return (
    
    <div className="container">    
		<div id="account" className="row">
            <div className='row'>
                <div className='col s8'>
                   User Name:  
                </div>
                <div className='col s4'>{this.user.username}</div>
            </div>
            <div className='row'>
                <div className='col s8'>
                    Email: 
                </div>
                <div className='col s4'>{this.user.email}</div>
            </div>
            <div className='row'>
                <div className='col s8'>
                    Profile Icon:
                </div><div className='col s4'>{this.user.icon?this.user.icon:'Please select an icon'}</div>
            </div>
            <div className='row'>
                <div className='col s8'>
                    Favorite coins:
                </div><div className='col s4'>{this.state.usern.favCoins}</div>
            </div>
            <div className='row'>
                <div className='col s8'>
                    About Me: 
                </div>
                <div className='col s4'>
                <p>{this.state.usern.desc} &nbsp;
                <a className="waves-effect waves-light modal-trigger" href="#modal2"> Update</a>
                </p></div>
            </div>
		</div>

		<div id="coins" className="row">
			<div className='favCoins'></div>
		</div>
        <div id="modal2" className="modal">
    
    <div className="modal-content">
      <div className='row'>
        <div className='col s12 l12'>
        <form method='POST' onSubmit={this.handleSubmit}>
                            <textarea value={this.state.usern.desc} onChange={this.handleChange} name="desc"/>
                            <button  type="submit">Save</button>
                        </form>
        
        </div>
    </div>
    </div>
    
  </div>
</div>
    

)}
}
