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
        <p>ayuhsi.tomar987@gmail.com</p>
      </div>

      <aside>
        <h2>Contact</h2>

        <article>
          <a href="https://www.linkedin.com/in/ayushi-tomar-83523b280/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/_aayushitomar/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ayushiitomar" target={"blank"}>
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