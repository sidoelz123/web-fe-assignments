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
                <h3>{homeConfig.greeting}</h3>
                <h1><strong>{homeConfig.name}</strong></h1>
                <div className="message">{homeConfig.message}</div>
                <div className='container'>
                  <Link to={"https://github.com/sidoelz123"}><i className="fab fa-github fa-3x socialicons"></i></Link>
                  <Link to={"https://www.instagram.com/ijaa212"}><i className="fab fa-instagram fa-3x socialicons"></i></Link>
                  <Link to={"https://www.linkedin.com/in/ihza-maulana-zakiya-11b326222"}><i className="fab fa-linkedin fa-3x socialicons"></i></Link>
                </div>
                <div>
                  <Link to={"/about"} className='btn btn-home'>About</Link>
                  <Link to={"/project"} className='btn btn-home'>Projects</Link>
                  <Link to={"/blog"} className='btn btn-home'>Blog</Link>
                </div>
                <Link to={"#"} className='btn btn-cv'>Download CV</Link>
            </div>
      </div>
    </>
  )
}

export default Home