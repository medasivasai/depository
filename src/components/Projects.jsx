import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";
import "../App.css"
const Projects = () => {
  return (
    <section id="projects" className="mt-[100px]">
        <motion.div
         variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}>
            <motion.h1 variants={textVariant(0.1)} className="md:text-[150px] text-[48px]">selected_<br />projects<span className="text-teal-500">:</span></motion.h1>
        </motion.div>


            <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}} className="mt-[128px] flex flex-col lg:flex-row justify-center items-center">
                <div>
                <motion.h1 variants={textVariant(0.1)} className="md:text-[32px]">Portfolio_<br />website(V2)</motion.h1>
                <motion.h2 variants={textVariant(0.2)} className="max-w-[1024px] md:text-[24px] text-right">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;A personal website to showcase my projects and connect with people.<br />
                <motion.button variants={textVariant(0.3)}  className="border-2 border-black px-[18px] py-[12px] md:hero-btn mt-[10px] md:text-[24px]  hover:bg-teal-500 "><a href="https://github.com/medasivasai/depository" target="_blank" rel="noreferrer">More Details</a></motion.button>
                </motion.h2>
                
                </div>
                <motion.div variants={textVariant(0.4)} className="md:w-[40%] md:m-0 mt-[20px] md:ml-[30px] brightness-95 grayscale blur-[0.5px]  drop-shadow-lg text-right">
                    <img src="https://cdn.discordapp.com/attachments/1100469371740094494/1100469523565531206/portfolio-1.png" alt="portfolio banner"/>
                </motion.div>
            </motion.div>
            <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}} className="mt-[128px] flex flex-col lg:flex-row justify-center items-center">
                <div>
                <motion.h1 variants={textVariant(0.1)} className="md:text-[32px]">Portfolio_<br />website(V1)</motion.h1>
                <motion.h2 variants={textVariant(0.2)} className="max-w-[1024px] text-right md:text-[24px]">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;A 3D personal website to showcase my projects and connect with people.<br />
                <motion.button variants={textVariant(0.3)}  className="border-2 border-black px-[18px] py-[12px] md:hero-btn mt-[10px] md:text-[24px]  hover:bg-teal-500 "><a href="https://github.com/medasivasai/3d-portfolio" target="_blank" rel="noreferrer">More Details</a></motion.button></motion.h2>
                </div>
                <motion.div variants={textVariant(0.4)} className="md:w-[40%] md:m-0 mt-[20px] md:ml-[30px] brightness-95 grayscale blur-[0.5px]  drop-shadow-lg  ">
                    <img src="https://media.discordapp.net/attachments/1100469371740094494/1100475626986684508/portfolio-2.png?width=1368&height=701" alt="portfolio banner"/>
                </motion.div>
            </motion.div>
            <motion.div  variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}} className="mt-[128px] flex flex-col lg:flex-row justify-center items-center">
                <div>
                <motion.h1 variants={textVariant(0.1)} className="md:text-[32px]">Landing_<br />Page</motion.h1>
                <motion.h2 variants={textVariant(0.2)} className="max-w-[1024px] text-right md:text-[24px]">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;A modren landing page website to increase the converstion rate of visitors. <br />
                <motion.button variants={textVariant(0.3)}  className="border-2 border-black px-[18px] py-[12px] md:hero-btn mt-[10px] md:text-[24px]  hover:bg-teal-500 "><a href="https://github.com/medasivasai/ModernBankApp" target="_blank" rel="noreferrer">More Details</a></motion.button></motion.h2>
                </div>
                <motion.div variants={textVariant(0.4)} className="md:w-[40%] md:m-0 mt-[20px] md:ml-[30px] brightness-95 grayscale blur-[0.5px]  drop-shadow-lg ">
                    <img src="https://media.discordapp.net/attachments/1100469371740094494/1100475627645186149/portfolio-4.png?width=1368&height=701" alt="portfolio banner"/>
                </motion.div>
            </motion.div>
            <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}} className="mt-[128px] flex flex-col lg:flex-row justify-center items-center">
                <div>
                <motion.h1 variants={textVariant(0.1)} className="md:text-[32px]">Metaverse_<br />website</motion.h1>
                <motion.h2 variants={textVariant(0.2)} className="max-w-[1024px] text-right md:text-[24px]">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;A experimental modern website to showcase features of metaverse. <br />
                <motion.button variants={textVariant(0.3)}  className="border-2 border-black px-[18px] py-[12px] md:hero-btn mt-[10px] md:text-[24px]  hover:bg-teal-500 "><a href="https://github.com/medasivasai/metaverse-landingpage" target="_blank" rel="noreferrer">More Details</a></motion.button></motion.h2>
                </div>
                <motion.div variants={textVariant(0.4)} className="md:w-[40%] md:m-0 mt-[20px] md:ml-[30px] brightness-95 grayscale blur-[0.5px]  drop-shadow-lg">
                    <img src="https://media.discordapp.net/attachments/1100469371740094494/1100475627313827930/portfolio-3.png?width=1368&height=701" alt="portfolio banner"/>
                </motion.div>
            </motion.div>


            {/* button */}
            <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false,amount:0.25}}
            className="text-center">
            <motion.button variants={textVariant(0.2)} type="button" className="border-2 border-black p-[20px] hero-btn md:text-[32px] text-[26px] hover:bg-teal-500  mt-[128px]">
                <a href="https://github.com/medasivasai" rel="noreferrer" target="_blank">
                More Side Projects
                </a>
            </motion.button>
            </motion.div>
    </section>
  )
}

export default Projects
