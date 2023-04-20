
const Footer = () => {
  return (
    <section className="mt-[64px]">
      <div className="w-full bg-teal-500 h-[148px] flex md:flex-row flex-col items-center justify-between">
        <div className="px-8 text-white">
          <ul className="flex flex-row flex-wrap justify-evenly">
            <li className="px-4 hover:underline">
              <a href="#" target="_blank">Linkedin</a>
            </li>
            <li className="px-4 hover:underline">
              <a href="#" target="_blank">Github</a>
            </li>
            <li className="px-4 hover:underline">
              <a href="#" target="_blank">Twitter</a>
            </li>
            <li className="px-4 hover:underline">
              <a href="#" target="_blank">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="px-8">
          <ul className="flex flex-row flex-wrap justify-evenly text-white text-right">
            <li className="px-4">
              <a href="#">Developed with 🖤 ©️sivasai</a>
            </li>
            <li className="px-4">
              <a href="#">credits</a>
            </li>
            <li className="px-4">
              <a href="#home">back to top</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer