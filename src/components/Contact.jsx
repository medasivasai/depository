import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <section id="contact" className="mt-[150px] md:text-[150px] max-w-[1440px] text-[2.75rem]">
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.1)}>
          I&apos;m always
        </motion.h1>
      </motion.div>
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.2)}>
          interested 
        </motion.h1> 
      </motion.div>
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.3)}>
          about cool 
        </motion.h1> 
      </motion.div> 
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.4)}> 
          stuff.
        </motion.h1>
      </motion.div>
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.5)}>
          Are you 
        </motion.h1>
      </motion.div>
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.6)}>
          minding a 
        </motion.h1> 
      </motion.div>
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.7)}>
          project?
        </motion.h1>
      </motion.div>
      <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
        <motion.h1 variants={textVariant(0.8)}>
          <a href="#" className="group transition-all duration-300 ease-in-out text-teal-500">
            <span className='bg-left-bottom bg-gradient-to-r from-teal-500 to-teal-500 bg-[length:0%_12px] bg-no-repeat group-hover:bg-[length:100%_12px] transition-all duration-500 ease-out hover:text-teal-500'>
              Lets talk.
            </span>
          </a>
        </motion.h1>
      </motion.div>
    </section>
  )
}

export default Contact