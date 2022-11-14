import React from "react";
import { blogs } from "../config";
import "../styles/blog.css";

export default function Blog() {
  return (
    <div className="main">
      <section>
        <div>
          <h1 className="heading">Blog</h1>
          <p className="sub-heading">
            I <em className="italic">sometimes</em> write about things I learn
            in web development and also stuff that I find interesting
          </p>
        </div>
        <div>
          <ul className="blog-content">
            {blogs.map((blog,index) => (
              <li key={`blog-${index}`}  className="cardContent">
                <a href={blog.link} className="rows">
                  <div className="text-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.desc}</p>
                  </div>
                  <div className="date-content">{blog.date}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
