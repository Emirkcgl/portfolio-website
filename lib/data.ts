import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import mateBotPromoImg from "@/public/matersp.png";
import mateBotPlatformImg from "@/public/mate.png";
import asyncBotImg from "@/public/async.png";
import hrImg from "@/public/hr.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer (Intern)",
    location: "AKIM METAL AR-GE",
    description:
      "Received training in HTML, CSS, Angular, JavaScript, and TypeScript during the internship. Developed responsive designs and reinforced technical knowledge by working on small projects. Advanced front-end development skills through practical experience on various projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Tem 2022 - Tem 2023",
  },

  {
    title: "Frontend Developer",
    location: "AKIM METAL AR-GE",
    description:
      "Performed API integrations using Angular, enhancing user experience by increasing data accessibility and functionality. Developed reusable UI components using Angular libraries, ensuring consistency across projects. Built mobile-friendly and responsive web applications to ensure seamless operation across different devices. Collaborated with UX/UI designers to adapt designs for projects and integrate them into applications. Facilitated team collaboration by effectively utilizing version control systems like Git and GitHub.",
    icon: React.createElement(CgWorkAlt),
    date: "Tem 2023",
  },
] as const;

export const projectsData = [
  {
    title: "MateBot",
    description:
      "Developed a process tracking software aimed at preventing potential work accidents within the scope of occupational health and safety legislation",
    tags: ["Angular", "PrimeNG", "Apexcharts", "Tailwind", "Responsive Design"],
    imageUrl: mateBotPromoImg,
  },
  {
    title: "MateBot Promotional Website",
    description:
      "Showcases MateBot's features and benefits, helping businesses improve productivity and efficiency.",
    tags: ["Angular", "PrimeNG", "Tailwind", "Responsive Design"],
    imageUrl: mateBotPlatformImg,
  },

  {
    title: "AI Project",
    description:
      "Enables users to upload documents and get fast, accurate answers to their questions with AI support.",
    tags: ["Angular", "PrimeNG", "Tailwind", "Responsive Design"],
    imageUrl: asyncBotImg,
  },

  {
    title: "Human Resources Project",
    description:
      "Built to streamline employee management, task assignments, and notification processes.",
    tags: ["Angular", "PrimeNG", "Tailwind", "Responsive Design"],
    imageUrl: hrImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Git",
  "Tailwind",
  "NGRX",
  "RxJS",
  "RESTful API",
  "Responsive Design",
] as const;
