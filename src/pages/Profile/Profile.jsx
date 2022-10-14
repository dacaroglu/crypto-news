import React from 'react'
import ProfileDetail from '../../components/ProfileDetails/ProfileDetail'
export default function Profile(props) {
  return (
    <div className='container'>
        <ProfileDetail props={props}/>
        </div>
  )
}
