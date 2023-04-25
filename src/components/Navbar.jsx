import { navLinks } from '../constants';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react'; 
import { motion } from 'framer-motion';
import { navVariants, slideIn, staggerContainer } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <motion.nav 
        variants={navVariants} 
        initial='hidden'
        whileInView='show'
        className='flex flex-row justify-between items-center animations_ mb-0 fixed top-[56px] right-[96px]'
    >
        <ul className='hidden md:flex flex-wrap md:flex-row flex-col justify-evenly justify-items-end'>
            {navLinks.map((nav) => (
                <li key={nav.id}
                className='pl-6'
                >
                    <a className='group transition-all duration-300 ease-in-out ' href={`#${nav.id}`}>
                        <span className='bg-left-bottom bg-gradient-to-r from-teal-500 to-teal-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-teal-500'>{nav.title}</span>
                    </a>
                </li>
            ))}
        </ul>
    </motion.nav>


    {/* mobile nav */}
    <motion.nav 
       
        className='fixed top-[28px] right-[18px] md:hidden z-[87564553]'
    >
        <div className='z-[41232313]'>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded size={48}  
        />
        </div>
        <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0.25}}
            className={`${!isOpen ? 'hidden':'flex'}`}
        >
            
            <motion.ul
                variants={slideIn('right','tween',0.1 ,0.1)}
                className='h-[40vh] fixed top-[12px] right-[0px] flex flex-col justify-center items-center w-[95%]  bg-teal-500  duration-1000  z-[-1] text-[28px] mr-[10px]'>
                {navLinks.map((link) => (
                    <li key={link.id} className='py-[10px]'>
                        <a href={`#${link.id}`} onClick={() => openNav()}>{link.title}</a>
                    </li>
                ))}

            </motion.ul>  
        </motion.div>
    </motion.nav>
    </>
  )
}

export default Navbar