import React from 'react'
import { section } from '../data'
import {motion} from 'framer-motion'
const About = () => {
  const slider = {
    initial:{
      
      opacity:0,
    },
    animate:{
      
       opacity:1,
       transition:{
        duration : 2,
        
        staggerChildren:0.1,
       }
    }

}
const sliders = {
  initial:{
    
    opacity:0,
  },
  animate:{
    
     opacity:1,
     transition:{
      
      duration : 2,
      staggerChildren:0.1,
     }
  }

}
  return (
    <section>


    <div id='about' className=' h-auto  mt-36   color flex flex-col   '>
  
       <div className=' text-center p-3  lg:mt-5 '>
            <h1 className='  text-2xl  lg:text-3xl font-bold'> About me </h1>
            <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
        </div>
   <div className=' mt-8 lg:mt-0 p-8  lg:p-20  '>
        <h1 className=' text-white text-pretty text-base lg:text-lg '>
        Hello,Hello! I'm Ayushi Atlasiya, a passionate Computer Science graduate with a keen interest in web development. Over the years, I’ve honed my skills in technologies like React.js, Java, and Node.js, focusing on building user-centric web applications that are both visually appealing and highly functional. 
        I have hands-on experience in developing and implementing user interface components, collaborating with back-end teams, and integrating services and APIs into dynamic platforms. My recent work at Walkover Web Solutions, along with internships and academic projects, has provided me with the opportunity to contribute 
        to impactful technology solutions. I’m always excited to learn and embrace new challenges, continuously aiming to improve my skills and stay up-to-date with the latest industry trends. In addition to development, I’m passionate about creating clean, efficient code and delivering solutions that offer an optimal user experience across various devices.</h1>
   </div> 
     </div>


     <div  className=' h-auto  mt-36  flex flex-col pb-10  border-b-[1px] border-[#2995b2]    '>
  
  <div className=' text-center p-3  lg:mt-5 '>
       <h1 className='  text-2xl text-white  lg:text-3xl font-bold'> Education </h1>
       <div className=' mx-auto mt-1 w-20 h-1 bg-[#2995b2]'></div>
   </div>
<div className=' mt-8 lg:mt-0 p-8  lg:p-20  '>
   <h1 className=' text-white text-pretty  text-3xl  lg:text-5xl text-center '>
   Shri Vaishnav Vidyapeeth Vishwavidyalaya 
    </h1>
    <h1 className=' text-gray-400 font-semibold text-xl text-center'>
      B.Tech in Computer Science June 2019 - May 2023
    </h1>
    <div className=' mt-1   '>
       <h1 className='  text-white font-semibold text-2xl text-center'>Course Work.</h1>
      <div className=' flex justify-center flex-wrap gap-3'>

       <motion.button variants={slider} whileInView="animate" initial="initial"  className=' border-2 text-white border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                      Object Oriented Progamming
                    </motion.button>
                    <motion.button variants={slider} whileInView="animate" initial="initial" className=' text-white border-2 border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                   Data Structure & Algorithm
                    </motion.button>
                    <motion.button  variants={sliders} whileInView="animate" initial="initial" className=' text-white border-2 border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                      Operating System
                    </motion.button>
                    <motion.button  variants={sliders} whileInView="animate" initial="initial" className=' text-white border-2 border-white mt-4 p-2 rounded-xl font-normal hover:bg-[#2995b2] hover:text-white   transition-all duration-200'> 
                   Database Management System
                    </motion.button>
      </div>
    </div>
</div> 
</div>
    </section>
  
  )
}

export default About