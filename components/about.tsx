"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Computer Programming</span>, I decided to
        channel my enthusiasm for software development into a professional
        career. As a <span className="font-medium">Frontend Developer</span>, I
        create complex web applications using{" "}
        <span className="font-medium">Angular, JavaScript, and TypeScript</span>
        . <span className="italic">I enjoy solving challenging problems</span>{" "}
        through innovative solutions. My core stack includes{" "}
        <span className="font-medium">
          Angular, RxJS, NGRX, and TailwindCSS
        </span>
        . I am always looking to learn new technologies and am currently seeking
        a{" "}
        <span className="font-medium">
          full-time Frontend Developer position
        </span>{" "}
        where I can apply my skills and contribute to exciting projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
