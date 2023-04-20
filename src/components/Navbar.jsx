import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center'>
        <h1 className='text-[40px]'>👨🏽‍💻</h1>
        <ul className='flex flex-wrap flex-row justify-evenly justify-items-end'>
            {navLinks.map((nav) => (
                <li key={nav.id}
                    className='pl-6'
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar