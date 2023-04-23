import { navLinks } from '../constants';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react'; 
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <motion.nav 
        variants={navVariants} 
        initial='hidden'
        whileInView='show'
        className='flex flex-row justify-between items-center animations_'
    >
        <h1
            className='text-[26px]'
        >O_O</h1>
        <ul className='hidden md:flex flex-wrap md:flex-row flex-col justify-evenly justify-items-end fixed top-[48px]  md:right-[96px]'>
            {navLinks.map((nav) => (
                <li key={nav.id}
                className='pl-6 hover:underline hover:text-teal-500'
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </motion.nav>
    <motion.nav variants={navVariants} 
        initial='hidden'
        whileInView='show' className='md:hidden flex flex-col justify-around fixed top-[26px] right-[18px] '>
        <Hamburger toggled={isOpen} toggle={setOpen} size={48} rounded/>
    </motion.nav>
    </>
  )
}

export default Navbar