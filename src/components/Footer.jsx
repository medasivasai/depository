
const Footer = () => {
  return (
    <section className="mt-[64px] ">
      <div className="w-full bg-teal-500 md:h-[180px] h-[480px] flex md:flex-row flex-col items-center md:justify-between justify-around">
        <div className="md:px-8 text-white md:text-[24px] text-[20px]">
          <ul className="flex md:flex-row flex-col items-center flex-wrap md:justify-evenly justify-around py-8">
            <li className="px-4 py-3 hover:underline">
              <a href="#" target="_blank">Linkedin</a>
            </li>
            <li className="px-4 py-3 hover:underline">
              <a href="#" target="_blank">Github</a>
            </li>
            <li className="px-4 py-3 hover:underline">
              <a href="#" target="_blank">Twitter</a>
            </li>
            <li className="px-4 py-3 hover:underline">
              <a href="#" target="_blank">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="md:px-8">
          <ul className="flex md:flex-row flex-col items-center flex-wrap justify-evenly text-white text-right md:py-0 py-8">
            <li className="md:px-4 py-2">
              <a href="#">Developed with 🖤 ©️sivasai</a>
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
    </section>
  )
}

export default Footer