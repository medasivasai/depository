import '../App.css';
import { motion } from 'framer-motion';
import { textVariant,staggerContainer } from '../utils/motion';
const Hero = () => {
  return (
    <section id='home'  className="text-left mt-0">
      <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.1}}>
    
        <motion.h1 variants={textVariant(0.4)} className="md:text-[150px] text-[58px] ">Hello<span className="text-teal-500">,</span> <br /> I am <br className='md:hidden'/>Siva Sai</motion.h1>
        <motion.p 
          variants={textVariant(0.5)} 
          className=" md:ml-[550px] ml-0 max-w-[700px] text-right md:text-[28px] text-[20px]"
        >   
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design, Develop simple and functional user interfaces and Web Applications.
        <br />
        <motion.button 
          variants={textVariant(0.6)} 
          className='mt-8 mb-[64px] border-2 border-black  px-[28px] py-[20px]  hover:bg-teal-500  md:text-[32px] text-[26px] hero-btn text-[28px]'
        >
          <a href="https://drive.google.com/file/d/1Mj5VAI5I92brv34YFP-hxKP-y6-s0MMj/view?usp=sharing" target='_blank' rel="noreferrer">
          Resume
          </a>
        </motion.button>
        </motion.p>
        <div className='marquee md:text-[48px] text-[32px]  pt-0 hero-btn text-transparent '>
          <div className='marquee_group'>
            <h1>Canva</h1><span>-</span>
            <h1>Nodejs</h1><span>-</span>
            <h1>HTML</h1><span>-</span>
            <h1>CSS</h1><span>-</span>
            <h1>Threejs</h1><span>-</span>
            <h1>Nextjs</h1><span>-</span>
            <h1>Tailwinscss</h1><span>-</span>
            <h1>Figma</h1><span>-</span>
            <h1>Vscode</h1><span>-</span>
            <h1>Git</h1><span>-</span>
            <h1>JavaScript</h1><span>-</span>
            <h1>Reactjs</h1><span>-</span>
          </div>
          <div className='marquee_group' aria-hidden='true'>
            <h1>Canva</h1><span>-</span>
            <h1>Nodejs</h1><span>-</span>
            <h1>HTML</h1><span>-</span>
            <h1>CSS</h1><span>-</span>
            <h1>Threejs</h1><span>-</span>
            <h1>Nextjs</h1><span>-</span>
            <h1>Tailwinscss</h1><span>-</span>
            <h1>Figma</h1><span>-</span>
            <h1>Vscode</h1><span>-</span>
            <h1>Git</h1><span>-</span>
            <h1>JavaScript</h1><span>-</span>
            <h1>Reactjs</h1><span>-</span>
          </div>
          
        </div>
        <div className='marquee md:text-[48px] marquee_reverse text-[32px] mt-0 pt-0 '>
          <div className='marquee_group'>
            <h1>HTML</h1><span>-</span>
            <h1>CSS</h1><span>-</span>
            <h1>JavaScript</h1><span>-</span>
            <h1>Reactjs</h1><span>-</span>
            <h1>Tailwinscss</h1><span>-</span>
            <h1>Figma</h1><span>-</span>
            <h1>Vscode</h1><span>-</span>
            <h1>Canva</h1><span>-</span>
            <h1>Nodejs</h1><span>-</span>
            <h1>Git</h1><span>-</span>
            <h1>Threejs</h1><span>-</span>
            <h1>Nextjs</h1><span>-</span>
          </div>
          <div className='marquee_group' aria-hidden='true'>
            <h1>HTML</h1><span>-</span>
            <h1>CSS</h1><span>-</span>
            <h1>JavaScript</h1><span>-</span>
            <h1>Reactjs</h1><span>-</span>
            <h1>Tailwinscss</h1><span>-</span>
            <h1>Figma</h1><span>-</span>
            <h1>Vscode</h1><span>-</span>
            <h1>Canva</h1><span>-</span>
            <h1>Nodejs</h1><span>-</span>
            <h1>Git</h1><span>-</span>
            <h1>Threejs</h1><span>-</span>
            <h1>Nextjs</h1><span>-</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero