import React from 'react'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="navbar">
        <div className="logo">SLACK</div>
        <div className="navbar-functions">
            <img src= "./images/SearchIcon.png" alt="" />
            <div className='sign-in'><a href="/signin">Sign In</a></div>
            <div className="btns">
                <button className="btn btn1">EXPLORE</button>
            </div>
        </div>
      </div>
      <div className="herosec-left">
        <h1>Made for people.</h1>
        <h1>Built for productivity.</h1>
        <p className='p1'>Connect the right people, find anything that you need and automate the rest. That’s work in Slack, your productivity platform.</p>
        <div className="sec1-btns">
          <button className="sec1-btn1">SIGN UP WITH EMAIL ADDRESS</button>
          <button className="sec1-btn2">SIGN UP WITH GOOGLE</button>
        </div>
      </div>
      <p className='p2'>Slack is free to try for as long as you like</p>
    </div>
  )
}
