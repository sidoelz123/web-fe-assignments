import React from "react";
import { projects } from "../config";
import "../styles/project.css"

export default function Project() {
  return (
    <div className="main">
      <section className="projects">
        <div>
          <h1 className="heading">Projects</h1>
          <p className="sub-heading">
            Front-End Web development projects and other projects
          </p>
        </div>


        <div>
          <ul className="cards">
            {projects.map((project, index) => (
            <li key={`project-${index}`}>
              <a href={project.link} className="card">
                <img src={project.imgProject} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc">
                      <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                    </svg>
                    <div className="card__header-text">
                      <h3 className="card__title">{project.title}</h3>
                      <div className="card__tags">
                      { project.tags.map((tag,id) => (
                        <p key={id } className="card__tag">{tag}</p> 
                        ))}

                      </div>
                    </div>
                  </div>
                  <p className="card__description">{project.desc}</p>
                </div>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
