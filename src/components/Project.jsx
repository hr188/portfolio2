import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import "../styles/projects.scss";


const Project = () => {
   
  return (
    <div id="projects">
      <h1>Projects</h1>
      <motion.div >
        {data.projects.map((i,index) => (
          <div key={i.title} className="workItem">
            <motion.div   className="Card"  >
              <h2>{"0" + (index+1)}   {i.title}</h2>
              <motion.img  src={i.imgSrc} alt={i.title} />
              <p>{i.description}</p>
              <a target={"blank"} href={i.url}>
                View Demo
              </a>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
