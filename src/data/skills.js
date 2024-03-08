import responsibility from "../assets/responsibility.png";
import teamWork from "../assets/team-work.png";
import crisis from "../assets/crisis.png";
import communication from "../assets/communication.png";
import organization from "../assets/organization.png";
import selfLearning from "../assets/self-learning.png";
import timeManagement from "../assets/time-management.png";
import openMusic from "../assets/videos/open-music.mp4";
import institutionalWebsite from "../assets/videos/Institutional-Website.mp4";
import genericPortifolio from "../assets/videos/Generic-Portifolio.mp4";
import burguerKenzie from "../assets/videos/Burguer-Kenzie.mp4";
import kenzieHub from "../assets/videos/Kenzie-Hub.mp4";

export const hardSkills = [
  { name: "HTML5", img: "https://img.icons8.com/color/144/html-5--v1.png" },
  { name: "CSS3", img: "https://img.icons8.com/stickers/200/css3.png" },
  { name: "Javascript", img: "https://img.icons8.com/color/144/javascript--v1.png" },
  { name: "React", img: "https://img.icons8.com/plasticine/200/react.png" },
  { name: "SASS", img: "https://img.icons8.com/color/144/sass-avatar.png" },
  { name: "Typescript", img: "https://img.icons8.com/color/144/typescript.png" },
  { name: "Git", img: "https://img.icons8.com/color/144/git.png" },
  { name: "Github", img: "https://img.icons8.com/color-glass/240/github--v1.png" },
  { name: "Node JS", img: "https://img.icons8.com/fluency/144/express-js.png" },
  { name: "Express", img: "https://img.icons8.com/fluency/144/express-js.png" },
  { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
  { name: "Figma", img: "https://img.icons8.com/color/144/figma--v1.png" },
  { name: "Solidity", img: "https://img.icons8.com/color/144/solidity.png" },
];

export const softSkills = [
  { name: "Responsibility", img: responsibility },
  { name: "Time Management", img: timeManagement },
  { name: "Team Work", img: teamWork },
  { name: "Crisis Management", img: crisis },
  { name: "Communication", img: communication },
  { name: "Organization", img: organization },
  { name: "Self and Life long-learning", img: selfLearning },
];

export const projects = [
  { 
    media: kenzieHub,
    name: "Kenzie Hub",
    description: "Frontend Developed in ReactJS for certification at Kenzie Academy Brasil, with implementation of CRUD, Hooks Form, Router Dom, autologin, Route porting, useContext, contextAPI, Axios, Componentization, useState, Zod.",
    href: "https://react-entrega-kenzie-hub-woliveira1728-1r9cqp3c5.vercel.app/"
  },

  {
    media: burguerKenzie,
    name: "Burguer Kenzie",
    description: "Burger restaurant project developed in React to apply the concepts of SASS, Figma layout fidelity, responsiveness, Modal, localStorage, Good practices and Product listing.",
    href: "https://react-entrega-s3-template-hamburgueria-woliveira1728-lorm3aqfl.vercel.app/"
  },

  { 
    media: genericPortifolio,
    name: "Generic Portfolio",
    description: "Generic portfolio developed to apply knowledge in React, Figma Layout, Componentization and Good Practices.",
    href: "https://m3-s1-entrega-portfolio-template-woliveira1728-3p405rkt6.vercel.app/"
  },

  {
    media: openMusic,
    name: "Open Music",
    description: "Project developed in HTML5, CSS3 and Javascript to implement DarkMode concepts, modules, methods, animation and commits.",
    href: "https://kenzie-academy-brasil-developers.github.io/m2-open-music-template-woliveira1728/"
  },

  { 
    media: institutionalWebsite,
    name: "Generic Institutional Website",
    description: "Institutional website project developed to apply knowledge of HTML5 and CSS3 including responsiveness between desktop and mobile.",
    href: "https://kenzie-academy-brasil-developers.github.io/m2-site-instituciona-generico-woliveira1728/"
  },
  
];
