import logo from './logo.svg';
import './App.css';
import hero from './home_banner.89da2f166bc70828ce27.jpg'
import credit from './credit.svg'
import { useState } from 'react';


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


     
      <div className={`absolute right-0  ${isOpen ? "top-[60px]":"top-[1000px]"} bg-white lg:bg-transparent w-full h-screen z-50 pt-8 lg:w-[715px] lg:-top-[10px]`}>

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
        <i class="toggle-btn fa-solid fa-bars text-white"></i>
        </div>
            
      <div className=' font-bold text-4xl mt-[-170px] text-gray-300 absolute text-center w-full font-Sato pr-8 pl-8 bottom-24 '>The Christian Co-operative Credit Union Ltd., Dhaka
      <p className=' text-sm font-normal mt-4'>Employment Creation is Our Goal; Self-Reliant Community is Our Dream.</p>
      </div>


      <span className=' absolute top-[26px] left-[140px] font-semibold text-[23px] text-white font-Sato'>Dhaka Credit</span>
      <div className=' w-[82px] h-20 absolute top-3 left-12'><img src='data:image/png;base64,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'></img> </div>

      </div>

      <h2 className=' mt-20 font-extrabold font-Sato text-3xl text-[#474747] text-center'>What we do..?</h2>


      <div className=' h-[300px] items'>
         
      </div>

    






















    </div>
  );
}

export default App;
