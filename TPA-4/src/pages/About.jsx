import React from 'react'
import { about } from '../config'
import '../styles/about.css'


export default function About() {
  return (
    <div className='main'>
      <section>
          <h1 className="heading">About me</h1>
          <p className="sub-heading"></p>
          <div className="hero">
              <div>
                  <div className="content">
                      <h1 className="say">Hi there, i'm Ihza Maulana 👋 </h1>
                      <h1 className="intro">{about.intro}</h1>
                  </div>
                  <div className="content" style={{marginTop:"1rem"}}>
                      <h1 className="say">Why make this website? </h1>
                      <h1 className="intro">{about.message}</h1>
                  </div>
              </div>
              <div>
                  <img src={about.imgProfile} className="img-profile" />
              </div>
          </div>
      </section>
    </div>
  )
}