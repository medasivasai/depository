import '../App.css';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
const Footer = () => {
  return (
    <>
    <motion.section variants={footerVariants} initial='hidden' whileInView='show' className="md:mt-[64px] mt-[36px]">
      <div className="w-full bg-teal-500 md:h-[180px] h-[480px] flex md:flex-row flex-col items-center md:justify-between justify-around m-0 p-0">
        <div className="md:px-8 text-white md:text-[24px] text-[20px]">
          <ul className="flex md:flex-row flex-col items-center flex-wrap md:justify-evenly justify-around py-8">
            <li className="px-4 py-3 ">
              <a href="https://www.linkedin.com/in/medasivasai/" rel="noreferrer" target="_blank" className="group transition-all duration-300 ease-in-out" >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out ">
                  Linkedin
                </span>
              </a>
            </li>
            <li className="px-4 py-3 ">
              <a href="https://github.com/medasivasai" rel="noreferrer" target="_blank" className="group transition-all duration-300 ease-in-out" >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out ">
                  Github
                </span>
              </a>
            </li>
            <li className="px-4 py-3">
              <a href="https://twitter.com/dev_sivasai/" rel="noreferrer" target="_blank" className="group transition-all duration-300 ease-in-out" >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out ">
                  Twitter
                </span>
              </a>
            </li>
            <li className="px-4 py-3"> 
              <a href="https://instagram.com/sivasaimeda/" rel="noreferrer" target="_blank" className="group transition-all duration-300 ease-in-out" >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out ">
                  Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:px-8">
          <ul className="flex md:flex-row flex-col items-center flex-wrap justify-evenly text-white text-right md:py-0 py-8">
            <li className="md:px-4 py-2">
              Developed with 🖤 ©️sivasai
            </li>
            <li className="px-4 py-2">
              <a href="#">credits</a>
            </li>
            <li className="px-4 py-2">
              <a href="#home">back to top</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default Footer