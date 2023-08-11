import React from 'react'
import {motion} from "framer-motion";

const Header = () => {
    const animation = {
        h1:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:"0",
                opacity:"1",
            }, 
        },
    }
  return (
    <>
    
    <motion.div {...animation.h1} id="header">
        <nav>
            <h1>Ayushi Tomar</h1>
            <div >
            <a href="#projects"> Projects </a>
            
            <a href="#Resume"> Resume </a>
            <a href="#Contact"> Contact</a>
            
            </div>
            
        </nav>
    </motion.div>
    </>
  )
}

export default Header
