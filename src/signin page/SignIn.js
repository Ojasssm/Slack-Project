import React from 'react'

export default function SignIn() {
  return (
    <div className="signin-page">
        <div className="navbar">
            <div className="logo">SLACK</div>
            <div className="left">
                <p>New to Slack?</p>
                <p><a href="/signup">Create an account</a></p>
            </div>
        </div>
        <div className="signin-content">
            <h1>Sign in to Slack</h1>
            <p className='signin-content-p1'>We suggest using the <b>email address that you use at work</b></p>
            <button className="signin-btn signin-btn1">Sign in with google</button>
            <p className='signin-content-p2'>OR</p>
            <input className='signin-content-input' placeholder='name@work-email.com' />
            <button className="signin-btn signin-btn2">Sign in with email</button>
        </div>
    </div>
  )
}
