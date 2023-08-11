import React from 'react'
import { motion} from "framer-motion";
import "../styles/home.scss";
import  Typewriter from 'typewriter-effect';
const Home = () => {
    

    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:"0",
                opacity:"1",
            } ,  
        },
        button:{
            initial:{
                x:"100%",
                opacity:0,
            },
            whileInView:{
                x:"0",
                opacity:"1",
            } ,  
        },        
    };
  return (
    <div id='home'>
        
        <motion.h1 {...animations.h1} >
                Hello , I am  Ayushi Tomar
            </motion.h1>
        
        <motion.div {...animations.button}>
         <Typewriter style={{"color":"red"}} options={{
        strings: ['Web', 'MERN' ,'Blockchain'],
        autoStart: true,
        loop: true,
        cursor:"",
        wrapperClassName:'hero'
        
    }} ></Typewriter> <h2>  <span>Developer</span></h2>
        </motion.div>
            
    </div>
    
  );
}

export default Home;