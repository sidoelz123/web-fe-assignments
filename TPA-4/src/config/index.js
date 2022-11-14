import {imgProfile, reactLogo,imgProject, imgProject2} from "./images"

const home = {
  greeting: "Hello, my name is",
  name: "Ihza Maulana Zakiya",
  message: " i'm a Front-End Developer.",
  icons: [
    {
      img: "fa-github",
      url: "https://github.com/sidoelz123"
    },{
      img: "fa-instagram",
      url: "https://www.instagram.com/ijaa212"
    },{
      img:"fa-linkedin",
      url:"https://www.linkedin.com/in/ihza-maulana-zakiya-11b326222"
    },
  ]
};

const about = {
  imgProfile: '/src/assets/ijaa.jpeg',
  intro:"I'm a descrmatics student at Politeknik Harapan Bersama Tegal. In my free time, I study front-end development with React. My goal is to write useful apps and contribute to open source projects while working a part-time job.",
  message:"I made this website to learn what actually goes into web development. From planning, design, development, launch, and maintenance. For sure there are other things that I have yet to encounter, and Im ready to learn them. This also serves a motivation for me to continue making projects because now I finally have a place to showcase them"
}

const blogs=[
  {
    title:"How I Migrated from Gatsby to Next.js",
    date:"21 Desember 2021",
    desc:"Migration to Next.js, Typescript, and other plugins.",
    link:"#"
  },{
    title:"Never Trust the Client",
    date:"10 November 2021",
    desc:"A postmortem on a recent engineering mistake I made at work",
    link:"#"
  },{
    title:"How to Dark Mode in React and Tailwind CSS",
    date:"12 September 2021",
    desc:"Add dark mode using CSS variables and Context API",
    link:"#"
  },{
    title:"Welcome to My Portfolio",
    date:"01 September 2021",
    desc:"Introduction and why I created this site",
    link:"#"
  },
]

const projects=[
  {
    imgProject: imgProject,
    title:"BMI Calculator",
    desc:" Cek berat badan ideal dengan kalkulator BMI. Dapat digunakan untuk memeriksa massa tubuh seseorang",
    link:"#",
    tags:["HTML", "CSS"],
  },
  {
    imgProject:imgProject2,
    title:"Resik Project",
    desc:"RESIK atau Recycle Sampah Apik merupakan suatu website yang membantu masyarakat untuk menangani sampah",
    link:"#",
    tags:["Bootstrap", "HTML", "CSS"],
  },
  {
    imgProject:"#",
    title:"To Do List",
    desc:"Aplikasi yang berguna untuk mencatat semua daftar tugas maupun kegiatan yang akan dilakukan",
    link:"#",
    tags:["Reactjs", "HTML", "CSS", "Redux"],
  },
]

export {home,about,blogs,projects} ;