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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi there! 👋 I'm a tech enthusiast and developer passionate about
        creating innovative solutions and making everyday tasks simpler and smarter.  
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , but I’m also exploring new tools like Tailwind CSS and TypeScript.
      </p>

      <p className="mb-3">
        I’m the creator of the <span className="font-medium">AI Expenses Tracking App</span>, 
        a project aimed at helping users manage their finances through intelligent insights. 
        I also enjoy exploring game development, like my ongoing <span className="font-medium">password game</span> project, 
        and growing my <span className="font-medium">motivation-focused Instagram account</span>.
      </p>

      <p className="mb-3">
        <span className="italic">When I’m not coding</span>, I enjoy playing video games, 
        watching movies, and learning new skills like guitar and studying{" "}
        <span className="font-medium">history and philosophy</span>. 
        My ultimate goal is to create tools that make technology more personalized 
        and accessible for everyone.
      </p>
    </motion.section>
  );
}
