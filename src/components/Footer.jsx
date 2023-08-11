import React from "react";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  
  AiOutlineArrowUp,
} from "react-icons/ai";

import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        
        <h2>Ayushi Tomar</h2>
        <p>ayushitomar987@gmail.com</p>
      </div>

      <aside>
        <h2>Contact</h2>

        <article>
          <a href="https://www.linkedin.com/in/himanshu-ray-60ab02243/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/hr_liftts/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/hr188" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;