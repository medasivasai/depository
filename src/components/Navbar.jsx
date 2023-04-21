import { navLinks } from '../constants';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <nav className=' md:block hidden flex flex-row justify-between items-center fixed top-[48px]  md:right-[96px]'>
        <h1 className='text-[40px]'></h1>
        <ul className='flex flex-wrap md:flex-row flex-col justify-evenly justify-items-end'>
            {navLinks.map((nav) => (
                <li key={nav.id}
                className='pl-6 hover:underline hover:text-teal-500'
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </nav>
    <nav className='md:hidden flex flex-col justify-around fixed top-[20px] right-[26px] '>
        <Hamburger toggled={isOpen} toggle={setOpen} size={48} rounded/>
    </nav>
    </>
  )
}

export default Navbar