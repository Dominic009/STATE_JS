import logo from './logo.svg';
import './App.css';
import hero from './home_banner.89da2f166bc70828ce27.jpg'
import credit from './credit.svg'
import { useState } from 'react';
import SVGcomponent from './SVGcomponent';


function App() {

  const  [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <nav className="w-full h-12 bg-white flex justify-between align-middle fixed top-0 ">
       

       
       {/* left side  */}
        <div className="w-48 h-12 flex-1 items-center flex gap-4 text-[#474747] text-sm font-extrabold ml-10 font-Lato ">
          <span className= "cursor-pointer hover:scale-110 hover:text-[#e74c3c]">Office Bearer's</span>
          <span className= "cursor-pointer hover:scale-110 hover:text-[#e74c3c]">Board of Director's</span>
          <span className= "cursor-pointer hover:scale-110 hover:text-[#e74c3c]">Credit Committee</span>
          <span className= "cursor-pointer hover:scale-110 hover:text-[#e74c3c]">Supervision Committee</span>
        </div>

        {/* right side */}
        <div className=" w-[266px] h-12 mr-10 flex items-center justify-between gap-3">

          <span className="text-[#474747] text-sm font-extrabold font-Lato cursor-pointer hover:scale-110 hover:text-[#e74c3c]">President's Message</span>

          <div className=" w-24 h-12 flex-1 flex items-center gap-2 justify-center">

              <div className=' w-8 h-8 p-1 rounded-full bg-[#DBEAFE] shadow-md transition-all duration-200 hover:scale-125 hover:text-primary cursor-pointer'> 
              <i className="fa-brands fa-facebook-f fa-lg text-[#242269] hover:text-[#e74c3c] "></i> </div>
              <div className=' w-8 h-8 p-1 rounded-full bg-[#DBEAFE] flex justify-center items-center shadow-md transition-all duration-200 hover:scale-125 hover:text-primary cursor-pointer'> 
              <i class="fa-solid fa-phone-volume fa-lg text-[#242269] hover:text-[#e74c3c] "></i> </div>
              <div className=' w-8 h-8 p-1 rounded-full bg-[#DBEAFE] flex justify-center items-center shadow-md transition-all duration-200 hover:scale-125 hover:text-primary cursor-pointer'> 
              <i className="fa-solid fa-envelope-open-text fa-lg text-[#242269] hover:text-[#e74c3c] "></i> </div>
              


          </div>
        </div>
      </nav>




      <div className=" relative top-0 md:top-12 w-full h-[335px] bg-no-repeat bg-cover bg-center bg-[url(https://www.cccul.com/static/media/home_banner.89da2f166bc70828ce27.jpg)]">
      <div className='w-full h-[335px] backdrop-brightness-50 backdrop-saturate-100 backdrop-blur-[2px] bg-[rgba(36,34,105,0.2)]'></div>


     
      <div className={`absolute right-0  ${isOpen ? "top-[0px]":"top-[1000px]"} bg-[#eff5fc] lg:bg-transparent w-full h-screen z-30 pt-8 lg:w-[715px] lg:-top-[10px]`}>

        <ul className='flex p-2 text-black text-[14px] font-Lato font-extrabold flex-col gap-6
        md:flex-col lg:flex-row md:gap-6 md:bg-transparent
        md:text-black lg:text-white'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Loans</a></li>
          <li><a href='#'>Deposit</a></li>
          <li><a href='#'>Career</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Notice</a></li>
          <li><a href='#'>FAQs</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>

  {/* menu icon  */}
        <div onClick={
          () => {
            if(isOpen){
              setIsOpen(false)
            } else {
              setIsOpen(true)
            }
          }
        } className="z-40 absolute right-0 top-[13px] p-4 lg:hidden">
        <i class="toggle-btn fa-solid fa-bars text-red-500"></i>
        </div>
            
      <div className=' font-bold text-4xl mt-[-170px] text-gray-300 absolute text-center w-full font-Sato pr-8 pl-8 bottom-24 '>The Christian Co-operative Credit Union Ltd., Dhaka
      <p className=' text-sm font-normal mt-4'>Employment Creation is Our Goal; Self-Reliant Community is Our Dream.</p>
      </div>


      <span className=' absolute top-[26px] left-[140px] font-semibold text-[23px] text-white font-Sato'>Dhaka Credit</span>
      < SVGcomponent/>

      </div>

      <h2 className=' mt-20 font-extrabold font-Sato text-3xl text-[#474747] text-center'>What we do..?</h2>

      <div className=' h-[300px] items'>
         
      </div>

    






















    </div>
  );
}

export default App;
