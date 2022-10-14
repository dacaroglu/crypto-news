import {Component} from 'react'
import React from 'react'
import { Route, Routes, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CoinList from './components/CoinList/CoinList'
import Banner from './components/Banner/Banner'
import M from 'materialize-css'
import SignupForm from './components/SignupForm/SignupForm'
import Login from './components/LoginForm/LoginForm'
import ProfileDetail from './components/ProfileDetails/ProfileDetail';
import Home from './pages/Home/Home';
export default class App extends Component  {
    state = {
        bets:[],
        user:null
    }
    logout() {
        localStorage.clear();
        this.setState({user:null});
        }
    setUserInState = (incomingUserData) => {
        this.setState({ user: incomingUserData})
      }
    async componentDidMount(){
        // try {
        //     // let jwt = localStorage.getItem('token')
        //     // let fetchBetResponse = await fetch('/api/bets',{headers:{'Authorization':'Bearer ' + jwt}})
        //     // let bets = await fetchBetResponse.json()
        //     //   this.setState({bets})
        // } catch (err) {
        //     console.error('ERROR: ',err)
        // }
        // let fetchCurrencies = await fetch('/api/currencies')
        
        const options={}
        var elem = document.querySelectorAll('.modal');
        M.Modal.init(elem, options);
        let token = localStorage.getItem('token')
        if (token) {
            // YOU DO: check expiry!
            let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
            this.setState({user: userDoc})      
        }    
    }
    render(){
        
    return (
        <> 
        <nav>
        <div className="nav-wrapper">
        <a href="/" className="brand-logo center">Crypto News</a>
            <ul>
              
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/crypto/news'>News</Link></li>
                <li><Link to='/crypto/market'>Market</Link></li>
                {this.state.user?
                <>
                <li><Link to='/profile'>Profile</Link></li>
                <li className='right'>
                    <a className="" onClick={this.logout} href="#">Logout</a>
                    </li>
                </>
                :
                <li className='right'>
                    <a className="waves-effect waves-light modal-trigger" href="#modal1">Login/Signup</a>
                    </li>
                }
                </ul>
        </div>
        </nav>
        <Banner />
        <Routes>
            
            <Route path='/about' element= {<Banner />} />
            <Route path='/news' element= {<Banner/>} />
            <Route path='/market' element= {<Banner/>} />
            <Route path='/profile' element= {<ProfileDetail user={this.state.user}/>} />
            <Route path='/*' element= {<Home user = {this.state.user}/>} />
        </Routes>
        
        <div><CoinList/></div>
        

        <div id="modal1" className="modal">
    
    <div className="modal-content">
      <div className='row'>
        <div className='col s12 l5'>
            <h5>Login</h5>
            <Login setUserInState={this.setUserInState}/>
            </div>
        <div className='col s0 l2'></div>
      <div className='col s12 l5'>
        <h5>Signup</h5>
        <SignupForm setUserInState={this.setUserInState}/>
        </div>
    </div>
    </div>
    
  </div>
    </>
  )
}
}
