import React from 'react'
import { Link } from 'react-router-dom';
import { home } from "../config/index.js"
import '../styles/home.css'

function Home() {
  
  return (
    <>

      <div className='home'>

          <div className='stars'></div>
            <div className='personal'>
              
                <h2>{home.greeting}</h2>
                <h1 className='fullname'><strong>{home.name}</strong></h1>
                <div className="message">{home.message}</div>
                <div className='icons'>
                  {home.icons.map((icon,index)=>(
                    <a key={`social-icon-${index}`} href={icon.url}><i className={`fab ${icon.img} socialicons`}></i></a>
                  ))}
                </div>
                <div>
                  <Link to={"/about"} className='btn btn-home btn-lg' >About</Link>
                  <Link to={"/project"} className='btn btn-home btn-lg' style={{margin:"0 1rem"}}>Projects</Link>
                  <Link to={"/blog"} className='btn btn-home btn-lg' >Blog</Link>
                </div>
                <a href="https://drive.google.com/file/d/1QTWDgjfmsQObUnvEFNc2wh6Xo8oWmEp4/view?usp=sharing" className='btn btn-home btn-cv btn-lg' >Download CV</a>
            </div>
      </div>
    </>
  )
}

export default Home