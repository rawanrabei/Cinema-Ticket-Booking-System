import { HiOutlineFilm } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { FiAward } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { LuAward } from "react-icons/lu";
import { IoShieldOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";



const AboutUs = () => {
  return (
    <div>
       {/* top about */}
      
            <div className=" bg-gradient-to-t from-black to-gray-500 py-10  ">
            <div className="m-5 flex flex-col gap-5 text-center" >
                    <h1 className="text-5xl ">
                    About <span className="text-[#FF0800]">StarView</span></h1>
                    <p className="text-gray-400">Where stories come to life on the big screen. 
                       We've been bringing the magic of cinema to audiences since 2015,<br />creating unforgettable moments one film at a time.</p>
            </div>
            </div>
             
        
        {/* Icons */}
         <div className="flex flex-row justify-evenly mt-9">
          <div className="flex flex-col items-center text-center gap-2">
           <div className=" p-4 bg-red-200/20 rounded-full mb-6">
             <HiOutlineFilm className="text-5xl text-[#FF0800]" />
           </div>
            <p className="text-5xl"> 10+ </p>
            <p className="text-gray-500" >Premium Screens</p>
          </div>

           <div className="flex flex-col items-center text-center gap-2">
            <div className=" p-4 bg-red-200/20 rounded-full mb-6">
             <GoPeople className="text-5xl text-[#FF0800]"/>
            </div>
            <p className="text-5xl"> 1M+ </p>
            <p className="text-gray-500">Happy Customers</p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className=" p-4 bg-red-200/20 rounded-full mb-6 ">
            <FiAward className="text-5xl text-[#FF0800]"/>
            </div>
            <p className="text-5xl"> 50+ </p>
            <p className="text-gray-500">Awards Won</p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className=" p-4 bg-red-200/20 rounded-full mb-6">
            <FaRegStar className="text-5xl text-[#FF0800]"/>
            </div>
            <p className="text-5xl"> 4.8 </p>
            <p className="text-gray-500">Average Rating </p>
          </div>
         </div>

         {/* Our story title */}

         <div className="mt-36">
          <div className="m-5 flex flex-col gap-5 text-center" >
                    <h1 className="text-5xl ">
                    Our <span className="text-[#FF0800]">Story</span></h1>
            </div>
            <div className="flex justify-center">
              <div className="text-gray-500 flex flex-col gap-5 text-left text-lg">
                      <p>Founded in 2015, CineMax began with a simple vision: to create a cinema experience that goes beyond just watching movies.
                    <br />We wanted to build a place where people could escape, dream, and connect through the power of storytelling.</p>

                    <p>Over the years, we've grown from a single screen to a network of premium theaters, but our commitment remains the same. <br />
                         We invest in the latest technology, from crystal-clear 4K projection to immersive Dolby Atmos sound systems, ensuring that <br />
                          every frame and every note reaches you exactly as the filmmakers intended.</p>

                    <p> Today, CineMax is more than just a cinema—it's a destination. Whether you're here for the latest blockbuster, an indie gem, or <br />
                          a special event screening, we're dedicated to making your visit exceptional from the moment you book your ticket to the final credits.</p>
                  </div>

            </div>
         </div>
           
           {/* Our Values */}
           
           <div className="bg-gray-400 mt-20">
           <div className="text-center pt-14 flex flex-col gap-2">
             <h1 className="text-5xl ">
                    Our <span className="text-[#FF0800]"> Values</span></h1>
                    <p className="text-gray-600"> The principles that guide everything we do</p>
           </div>

           <div className="flex flex-row justify-evenly  py-11">

              <div className="bg-black p-8 rounded-xl w-72 h-74 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:scale-105
               hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer">
              <div className=" p-4 bg-red-900/20 rounded-full mb-6">
               <FaRegHeart className="text-5xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
               </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]">Customer First </h1>
              <p className="text-gray-400">We prioritize your comfort and entertainment, ensuring every visit is memorable.</p>
            </div>   
            
            
            <div className="bg-black p-8 rounded-xl w-72 h-74 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer">
              <div className=" p-4 bg-red-900/20 rounded-full mb-6">
             < LuAward className="text-5xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
             </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]" > Quality Experience </h1>
              <p className="text-gray-400">State-of-the-art technology and premium amenities for the best cinema experience.</p>
            </div>

            <div className="bg-black p-8 rounded-xl w-72 h-74 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer ">
              <div className=" p-4 bg-red-900/20 rounded-full mb-6">
             <IoMdTime className="text-5xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
              </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]" > Convenience </h1>
              <p className="text-gray-400">Easy online booking, flexible showtimes, and hassle-free ticket management.</p>
            </div>

             <div className="bg-black p-8 rounded-xl w-72 h-74 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer">
              <div className=" p-4 bg-red-900/20 rounded-full mb-6">
              <IoShieldOutline className="text-5xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
              </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]" >Safety & Security</h1>
              <p className="text-gray-400">Your safety is paramount. We maintain the highest standards of hygiene and security.</p>
            </div>

           </div>
           </div>
            

            {/* Why choose */}
            <div className="bg-White-400 mt-20">
           <div className="text-center pt-14 flex flex-col gap-2">
             <h1 className="text-5xl ">
                    Why Choose <span className="text-[#FF0800]">  StarView</span></h1>
                    <p className="text-gray-600"> The principles that guide everything we do</p>
           </div>

           <div className="flex flex-row justify-evenly  py-11">

              <div className="bg-black p-8 rounded-xl w-72 h-64 flex flex-col justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer">
              <div className= "rounded-full ">
               <SlEnergy  className="text-4xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
               </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]">Latest Technology </h1>
              <p className="text-gray-400">Experience movies with cutting-edge projection systems, Dolby Atmos sound, and comfortable seating.</p>
            </div>   
            
            
            <div className="bg-black p-8 rounded-xl w-72 h-64 flex flex-col  justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer">
              <div className= " rounded-full ">
             < HiOutlineFilm  className="text-4xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
             </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]" > Diverse Selection </h1>
              <p className="text-gray-400">From Hollywood blockbusters to independent films, we offer a wide range of cinematic experiences.</p>
            </div>

            <div className="bg-black p-8 rounded-xl w-72 h-64 flex flex-col justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/30 group cursor-pointer ">
              <div className=   "rounded-full ">
             <GoPeople className="text-4xl text-[#FF0800] transition-all duration-500
                           group-hover:drop-shadow-[0_0_20px_rgba(255,8,0,0.8)]" />
              </div>
              <h1 className="text-2xl text-white transition-colors duration-300 
                   group-hover:text-[#FF0800]" > Community Focus </h1>
              <p className="text-gray-400">Building a community of film lovers through special screenings, events, and exclusive offers.</p>
            </div>
           </div>

           {/* Ready */}

           <div className=" bg-gradient-to-t from-black to-gray-500 py-10 mt-10 ">
            <div className="flex flex-col text-center gap-5">
              <h1 className="text-5xl text-">Ready to Experience the <span className="text-[#FF0800]">Magic?</span> </h1>
              <p className="text-gray-400">Join millions of movie lovers who trust CineMax for their entertainment. Book your tickets today <br />
              and discover why we're the preferred choice for cinema experiences.</p>
            </div>

              <div className="flex gap-6 justify-center p-8 h-20">
             <button className="flex items-center justify-center rounded-xl bg-[#FF0800] px-8 py-5 border border-transparent text-xl text-black transition-all shadow-md hover:bg-red-700 hover:scale-105">
                Browse Movies
             </button>
             <button className="flex items-center justify-center rounded-xl border border-[#FF0800] bg-red-600/10  px-3 py-5 transition-all shadow-sm text-[#FF0800] text-xl hover:scale-105" >
            View Our cinemas
           </button>
           </div>
           </div>
           </div>
          
         
          




         

  
    
    </div>
  )
}

export default AboutUs
