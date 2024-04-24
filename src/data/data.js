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
import matrizTrading from "../assets/videos/matriz-trading-school.mp4";
import frontEnd from "../assets/certificates/front-end.png";
import softSkills1 from "../assets/certificates/soft-skills-1.jpeg";
import softSkills2 from "../assets/certificates/soft-skills-2.jpeg";
import softSkills3 from "../assets/certificates/soft-skills-3.jpeg";


export const hardSkills = [
  { name: "HTML5", img: "https://img.icons8.com/color/144/html-5--v1.png" },
  { name: "CSS3", img: "https://img.icons8.com/stickers/200/css3.png" },
  { name: "Javascript", img: "https://img.icons8.com/color/144/javascript--v1.png" },
  { name: "React", img: "https://img.icons8.com/plasticine/200/react.png" },
  { name: "SASS", img: "https://img.icons8.com/color/144/sass-avatar.png" },
  { name: "Typescript", img: "https://img.icons8.com/color/144/typescript.png" },
  { name: "Git", img: "https://img.icons8.com/color/144/git.png" },
  { name: "Github", img: "https://img.icons8.com/color-glass/240/github--v1.png" },
  { name: "Node JS", img: "https://img.icons8.com/color/144/nodejs.png" },
  { name: "Express", img: "https://img.icons8.com/fluency/144/express-js.png" },
  { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
  { name: "Figma", img: "https://img.icons8.com/color/144/figma--v1.png" },
  { name: "Solidity", img: "https://img.icons8.com/color/144/solidity.png" },
  { name: "PostgreSQL", img: "https://img.icons8.com/plasticine/100/postgreesql.png" },
  { name: "Prisma ORM", img: "https://img.icons8.com/color/144/prisma-orm.png" },
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
    media: matrizTrading,
    name: "Matriz Trading School",
    description: "Website developed in React for a trading school. Collaborated, as part of the team, developing the 'Soluções' and 'Sala ao Vivo' features for the front-end. Skills worked: ReactJS, Styled Components, Clean Code, Git Flow, Team Work among others.",
    href: "https://matriztradingschool.com.br/"
  },

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

export const certificates = [

  {
    certificateImg: frontEnd,
    name: "Front End Programming",
    description: "Certificate of completion for 1000 class/hours in Front End ProgrammingFront End Programming covering HTML, CSS, React.js and Typescript.",
    href: "https://kenzie.com.br/certificados/84c145d8-400f-462a-8756-a9895f0fcd4b"
  },

  {
    certificateImg: "https://hermes.dio.me/certificates/cover/B7693272.jpg",
    name: "Potência Tech Angular Developer",
    description: "DIO Bootcamp focused on Angular with courses, project challenges, code challenges and exclusive mentoring.",
    href: "https://www.dio.me/certificate/B7693272"
  },

  {
    certificateImg: "https://hermes.dio.me/certificates/cover/0CCCC742.jpg",
    name: "Bootcamp Cloud AWS",
    description: "DIO Bootcamp in partnership with AWS with exclusive courses and live mentoring that ranges from basics to preparation for certifications.",
    href: "https://www.dio.me/certificate/0CCCC742"
  },

  {
    certificateImg: softSkills3,
    name: "Soft Skills - Nível 3",
    description: "Certificate of participation in the 30 hour/class training at level 3 of Soft Skills promoted by Kenzie Academy Brasil. Skills: building new habits, protagonism, teamwork and crisis management.",
    href: "#"
  },

  {
    certificateImg: softSkills2,
    name: "Soft Skills - Nível 2",
    description: "During this Level, I was able to develop a self-assessment of my habits, evolve in my learning process, develop prioritization skills, needs analysis and worked intensively on my communication.",
    href: "#"
  },

  {
    certificateImg: softSkills1,
    name: "Soft Skills - Nível 1",
    description: "During this Level 1 I was able to develop my self-knowledge, autonomous learning and time management, skills that are so essential for my career as a Dev.",
    href: "#"
  },

];
