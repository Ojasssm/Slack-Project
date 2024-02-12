import React from 'react'

export default function SignUp() {
  return (
    <div className="signin-page">
        <div className="navbar">
            <div className="logo">SLACK</div>
            <div className="navbar-left">
                <p>Already using Slack?</p>
                <p><a href="/signin">Sign in to an existing workspace</a></p>
            </div>
        </div>
        <div className="signin-content">
            <h1>First of all, enter your email address</h1>
            <p className='signin-content-p1'>We suggest using the <b>email address that you use at work</b></p>
            <input className='signup-content-input' placeholder='name@work-email.com' />
            <button className="signup-btn signup-btn2">Sign up with email</button>
            <p className='signin-content-p2'>OR</p>
            <button className="signup-btn signup-btn1">Sign up with google</button>
        </div>
    </div>
  )
}
