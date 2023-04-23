import '../App.css';
import { motion } from 'framer-motion';
import { textVariant,staggerContainer } from '../utils/motion';
const Hero = () => {
  return (
    <section id="home" className="text-left">
      <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>

        <motion.h1 variants={textVariant(1.1)} className="md:text-[150px] text-[58px] mt-[64px]">Hello<span className="text-teal-500">,</span> <br /> I am <br className='md:hidden'/>Siva Sai</motion.h1>
        <motion.p variants={textVariant(1.2)} className="mt-10 md:ml-[550px] ml-0 max-w-[700px] text-right md:text-[28px] text-[20px]">   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design, Develop simple and functional user interfaces and Web Applications.</motion.p>
        <div className='md:text-left text-right'>
          <motion.button variants={textVariant(1.3)} type="button" className="lg:ml-[1024px] md:ml-[720px] text-[28px] md:mt-[80px] hero-btn rounded-full border-2 md:p-[30px] py-[10px] px-[15px] border-black hover:bg-teal-500 md:m-0 mt-8 text-right">Resume</motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero