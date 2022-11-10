import React from 'react'
import { Link } from 'react-router-dom';
import { homeConfig } from "../config/index.js"
import '../styles/home.css'

function Home() {
  
  return (
    <>

      <div className='home'>

          <div className='stars'></div>
            <div className='personal'>
                <h2>{homeConfig.greeting}</h2>
                <h1 className='fullname'><strong>{homeConfig.name}</strong></h1>
                <div className="message">{homeConfig.message}</div>
                <div className='icons'>
                  <Link to={"https://github.com/sidoelz123"}><i className="fab fa-github socialicons"></i></Link>
                  <Link to={"https://www.instagram.com/ijaa212"}><i className="fab fa-instagram socialicons"></i></Link>
                  <Link to={"https://www.linkedin.com/in/ihza-maulana-zakiya-11b326222"}><i className="fab fa-linkedin socialicons"></i></Link>
                </div>
                <div>
                  <Link to={"/about"} className='btn btn-home btn-lg' >About</Link>
                  <Link to={"/project"} className='btn btn-home btn-lg' style={{margin:"0 1rem"}}>Projects</Link>
                  <Link to={"/blog"} className='btn btn-home btn-lg' >Blog</Link>
                </div>
                <Link to={"#"} className='btn btn-home btn-cv btn-lg' >Download CV</Link>
            </div>
      </div>
    </>
  )
}

export default Home