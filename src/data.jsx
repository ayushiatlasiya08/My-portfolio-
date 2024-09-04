import {SiJavascript , SiRedux , SiHtml5 , SiMongodb ,    SiTailwindcss, SiMysql} from 'react-icons/si'
import { FaGithubSquare , FaJava , FaNodeJs , FaReact} from 'react-icons/fa'

import { SiPostman } from "react-icons/si";
import {IoLogoCss3} from 'react-icons/io'
import { nanoid } from "nanoid"
export const section = [
     { id:nanoid(),href:'#home',text:'Home' },
     { id:nanoid(),href:'#about',text:'About' },
     { id:nanoid(),href:'#skill',text:'Skills' },
     { id:nanoid(),href:'#project',text:'Projects' },
     { id:nanoid(),href:'#certificate',text:'Certificates' }
]

export const data =  [
     {
       name:[
          1,2,3
       ]
     }
]
export const skills = [
   {  id:nanoid(),
      name: 'languages',
      languages: [
         { id:nanoid(), name : 'Core Java' , logo:<FaJava  color='white'  className='h-8 w-8 md:h-10 md:w-10 '/>},
         { id:nanoid(), name : 'Javascript', logo : <SiJavascript color='yellow'  className='h-8 w-8 md:h-8 md:w-8 '/> },
         { id:nanoid(), name : 'HTML',logo:<SiHtml5  color='red' className='h-8 w-8 md:h-10 md:w-10 '/> },
         { id:nanoid(), name : 'CSS', logo:<IoLogoCss3  color='blue' className='h-8 w-8 md:h-10 md:w-10 '/>},
         

      ]
   },
   { id:nanoid(),
    name: 'Tools & Databases',
    languages: [
       { id:nanoid(), name : 'Git' , url:'/git.webp'},
       { id:nanoid(), name : 'Github', logo : <FaGithubSquare  color='black' className='h-8 w-8 md:h-10 md:w-10 '/> },
       { id:nanoid(), name : 'MySQL',logo:<SiMysql color='white'  className='h-8 w-8 md:h-10 md:w-10 '/> },
       { id:nanoid(), name : 'postman',logo:<SiPostman color='orange'  className='h-7 w-7 md:h-9 md:w-9 '/> },
      
    ]
 },

{ id:nanoid(),
    name:' Library & Framework',
    languages: [
       { id:nanoid(), name : 'React.Js' , logo:<FaReact color='skyblue'  className='h-8 w-8 md:h-10 md:w-10 animate-spin '/>},
       { id:nanoid(), name : 'Node.Js / Express.js', logo : <FaNodeJs color='green'  className='h-8 w-8 md:h-10 md:w-10 '/> },
       {  id:nanoid(),name : 'Redux Toolkit',logo:<SiRedux color='purple'  className='h-8 w-8 md:h-10 md:w-10  '/> },
       {  id:nanoid(),name : 'Tailwind CSS', logo:<SiTailwindcss color='skyblue' className='h-8 w-8 md:h-10 md:w-10 '/>},

    ]
 }
]

export const projects = [
   {
      id: nanoid(),
      img: '/image.png',
      title:'Worlflow Automation Tool (Viasocket)',
      data:'A live web application designed to automate daily tasks using webhooks, triggers, and cron jobs. Developed with React.js, HTML, CSS, and JavaScript, featuring reusable components and responsive design. Integrated with a Node.js backend for seamless collaboration between front-end and back-end, ensuring optimal UI/UX performance.'
      ,tech:['React','Node','Mongodb','Material UI']
   },
   {
         id: nanoid(),
         img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        
         title:'TODO List',
         data:'Created a user-friendly TODO List app—just jot down tasks and tick them off. Simple and effective for staying organized. Tech meets practicality for a seamless task management experience '
         ,tech:['React','Mterial UI']
   },
   
{
   id: nanoid(),
   img: 'https://imgs.search.brave.com/JOPrkyNt4y3B-oAVZqHJdMr7rxq9IXRPooQZy8peYrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcm9pZGF1dGhv/cml0eS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDMv/VG9kYXktV2VhdGhl/ci1zY3JlZW5zaG90/LTIwMjAuanBn?auto=compress&cs=tinysrgb&w=800',
   title:'Weather Application',
   data:'Developed a weather application using React and integrated a third-party weather API to provide real-time weather updates. The app features a clean, user-friendly interface with responsive design, displaying current conditions, forecasts, and location-based weather data. Ensured efficient API calls and seamless user experience across devices.'
   ,tech:['React','Mterial UI']
},   
{
   id: nanoid(),
   img: 'https://imgs.search.brave.com/7emdQ1dC6eQla6ewIWkhUG4PVzNIzGGjyBfcVfD9oPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzMwNDE0/NTYvc2NyZWVuc2hv/dHMvODk4NjAxMi9t/ZWRpYS9lYjU0NjBk/MzQyNmY0YzY5YWJm/YTg2NjMwMmI3NmI2/Mi5wbmc_cmVzaXpl/PTQwMHgw?auto=compress&cs=tinysrgb&w=800',
   title:'Bike Rental System',
   data:'Designed and implemented a Bike Rental System using Java and JSP for backend, with HTML/CSS for frontend. Managed backend development, design, and documentation, contributing to functional specifications and meeting user requirement'
   ,tech:['React','Mterial UI']
}, 

]

export const certificate = [

   { id:nanoid(),
      image:'/advance-java.png',
      url:'https://drive.google.com/file/d/1SjLTnuSbOfVRmRCPOJBtWMuXe386-8tA/view?usp=sharing'   
   },
 { id:nanoid(),
   image:'/qa.png',
   url:'https://drive.google.com/file/d/1blMYHrm0A9bKlM8v73ESXZaxP-3WbtCU/view?usp=sharing'   
},
{ id:nanoid(),
   image:'/py.png',
   url:'https://drive.google.com/file/d/1blMYHrm0A9bKlM8v73ESXZaxP-3WbtCU/view?usp=sharing'   
}
]