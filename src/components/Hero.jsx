import '../App.css';
const Hero = () => {
  return (
    <section id="home" className="text-left">
        <h1 className="md:text-[150px] text-[58px] mt-[64px]">Hello<span className="text-teal-500">,</span> <br /> I am <br className='md:hidden'/>Siva Sai</h1>
        <p className="mt-10 md:ml-[550px] ml-0 max-w-[700px] text-right md:text-[28px] text-[20px]">   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design, Develop simple and functional user interfaces and Web Applications.</p>
        <div className='md:text-left text-right'>
          <button type="button" className="md:ml-[1024px] text-[28px] md:mt-[80px] hero-btn rounded-full border-2 md:p-[30px] py-[10px] px-[15px] border-black hover:bg-teal-500 md:m-0 mt-8 text-right">Resume</button>
        </div>
    </section>
  )
}

export default Hero