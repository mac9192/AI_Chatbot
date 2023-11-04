import React from 'react'
import Image from 'next/image'
import immigration from '../public/assets/img-immigrationnews.webp'
import law from '../public/assets/img-law.webp'
import passport from '../public/assets/img-passport.webp'
import lady from '../public/assets/img-lady.webp'
import justice from '../public/assets/img-justice.png'
import museum from '../public/assets/img-immigration2.webp'

const HomeBlog = ({dictionary}:{dictionary:any}) => {
  return (
      <div className=" ">
             <div className="md:p-12 md:mt- text-[36px] sm:p-10 mx-auto text-center max-w-screen-2xl text-logoBlue   ">
           {dictionary.events.header}
                  </div>
          
             <div className="p-3 mx-auto md:container sm:pt-10 ">
          <div className="flex  md:flex-row sm:flex-col mx-auto  md:space-y-0 sm:space-y-10   md:space-x-10  ">
              <div className="  border-t-4 border-logoBlue shadow-xl sm:p-3 bg-white shadow-2xl ">
               <div className="flex flex-row justify-between md:pl-[40px] md:pr-[40px] pt-5">
                    <p className="text-[24px]">Top Stories</p>
                    <p className="text-logoBlue font-bold">More</p>
               </div>
               <div className="flex sm:flex-col md:flex-row p-10 border-b-2 ">
                    <div>
                    <Image className=" " width={500} height={300} src={immigration} alt=""/>
                    </div>
                    <div className="md:pl-5 sm:p-0 md:flex-col">
                        <h2 className="font-bold tracking-wide sm:pt-5 md:pt-0 md:text-[24px] ">Exploring Asylum and Refugee Status: Eligibility and Application Process</h2>
                        <p className="pt-2">PUBLISHED OCTOBER 25, 2023</p>
                        <p className="pt-2">Explain the criteria for obtaining asylum or refugee status, including the application process, and the importance of legal representation in these cases</p>
                        <p className="pt-2 text-logoBlue font-bold">Read More</p>
                    </div>
               </div>
               <div className="flex sm:flex-col md:flex-row  p-10 border-b-2 ">
                    <div>
                    <Image className=" " width={500} height={300} src={law} alt=""/>
                    </div>
                    <div className="md:pl-5  sm:p-0 md:flex-col">
                        <h2 className="font-bold tracking-wide sm:pt-5 md:pt-0 md:text-[24px]">Exploring Asylum and Refugee Status: Eligibility and Application Process</h2>
                        <p className="pt-2">PUBLISHED OCTOBER 25, 2023</p>
                        <p className="pt-2">Explain the criteria for obtaining asylum or refugee status, including the application process, and the importance of legal representation in these cases</p>
                        <p className="pt-2 text-logoBlue font-bold ">Read More</p>
                        
                    </div>
               </div>
               <div className="flex sm:flex-col md:flex-row  p-10 border-b-2 ">
                    <div>
                    <Image className="   " width={500} height={300} src={passport} alt=""/>
                    </div>
                    <div className="md:pl-5  sm:p-0 md:flex-col">
                        <h2 className="font-bold tracking-wide sm:pt-5 md:pt-0 md:text-[24px]">Exploring Asylum and Refugee Status: Eligibility and Application Process</h2>
                        <p className="pt-2">PUBLISHED OCTOBER 25, 2023</p>
                        <p className="pt-2">Explain the criteria for obtaining asylum or refugee status, including the application process, and the importance of legal representation in these cases</p>
                        <p className="pt-2 text-logoBlue font-bold">Read More</p>
                    </div>
               </div>
              
              </div>
              <div className="  border-t-4 border-logoBlue shadow-xl sm:p-3 bg-white ">
               <div className="flex flex-row justify-between p-2">
                    <p className="mt-5">Upcoming Events</p>
                    <p className="text-logoBlue font-bold mt-5">More</p>
               </div>
               <div className="flex flex-col md:min-w-[300px]">
                
                      <p className="sm:text-[32px] pt-4  p-2">Nov 4 @ 12PM</p>
                      <p className="text-logoBlue font-bold  p-2">Immigration FAQ Seminar</p>
                      <p className="pt-3  p-2">Come and learn about the most recent Immigration reforms</p>
                      <p className="pt-2  p-2 text-logoBlue font-bold border-b-2 pb-5">Learn More</p>
               </div>
               <div className="flex flex-col md:min-w-[200px]">
                
                <p className="sm:text-[32px] pt-4  p-2">Nov 4 @ 12PM</p>
                <p className="text-logoBlue font-bold  p-2">Immigration FAQ Seminar</p>
                <p className="pt-3  p-2">Come and learn about the most recent Immigration reforms</p>
                <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5  p-2">Learn More</p>
         </div>
         <div className="flex flex-col md:min-w-[200px]">
                
                <p className="sm:text-[32px] pt-4  p-2">Nov 4 @ 12PM</p>
                <p className="text-logoBlue font-bold  p-2">Immigration FAQ Seminar</p>
                <p className="pt-3  p-2">Come and learn about the most recent Immigration reforms</p>
                <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5  p-2">Learn More</p>
         </div>
               
              
              </div>
          </div>
      </div>
      </div>
      
  )
}

export default HomeBlog
 