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
      <div className="bg-graydark">
             <div className="md:p-12 md:mt- text-[36px] sm:p-10 mx-auto text-center max-w-screen-2xl text-logoBlue bg-graydark ">
           {dictionary.events.header}
                  </div>
          
             <div className="p-3 mx-auto md:container sm:pt-10 ">
          <div className="flex  md:flex-row sm:flex-col mx-auto  md:space-y-0 sm:space-y-10   md:space-x-10  ">
              <div className="  border-t-4 border-logoBlue shadow-xl sm:p-3 bg-white shadow-2xl">
               <div className="flex flex-row justify-between sm:">
                    <p>Top Stories</p>
                    <p className="text-logoBlue font-bold">More</p>
               </div>
               <div className="flex sm:flex-col md:flex-row">
                    <div>
                    <Image className="sm:min-h-[250px] md:min-h-[100px] w-full object-cover sm:pt-6" width={500} height={300} src={immigration} alt=""/>
                    </div>
                    <div className="md:p-5 sm:p-0 md:flex-col">
                        <h2 className="font-bold tracking-wide pt-5">Exploring Asylum and Refugee Status: Eligibility and Application Process</h2>
                        <p className="pt-2">PUBLISHED OCTOBER 25, 2023</p>
                        <p className="pt-2">Explain the criteria for obtaining asylum or refugee status, including the application process, and the importance of legal representation in these cases</p>
                        <p className="pt-2 text-logoBlue font-bold">Read More</p>
                    </div>
               </div>
               <div className="flex sm:flex-col md:flex-row">
                    <div>
                    <Image className="sm:min-h-[250px] w-full object-cover sm:pt-6" width={500} height={300} src={law} alt=""/>
                    </div>
                    <div className="md:p-5 sm:p-0 md:flex-col">
                        <h2 className="font-bold tracking-wide pt-5">Exploring Asylum and Refugee Status: Eligibility and Application Process</h2>
                        <p className="pt-2">PUBLISHED OCTOBER 25, 2023</p>
                        <p className="pt-2">Explain the criteria for obtaining asylum or refugee status, including the application process, and the importance of legal representation in these cases</p>
                        <p className="pt-2 text-logoBlue font-bold">Read More</p>
                    </div>
               </div>
               <div className="flex sm:flex-col md:flex-row">
                    <div>
                    <Image className="  w-full object-cover sm:pt-6" width={500} height={300} src={passport} alt=""/>
                    </div>
                    <div className="md:p-5 sm:p-0 md:flex-col">
                        <h2 className="font-bold tracking-wide pt-5">Exploring Asylum and Refugee Status: Eligibility and Application Process</h2>
                        <p className="pt-2">PUBLISHED OCTOBER 25, 2023</p>
                        <p className="pt-2">Explain the criteria for obtaining asylum or refugee status, including the application process, and the importance of legal representation in these cases</p>
                        <p className="pt-2 text-logoBlue font-bold">Read More</p>
                    </div>
               </div>
              
              </div>
              <div className="  border-t-4 border-logoBlue shadow-xl sm:p-3 bg-white">
               <div className="flex flex-row justify-between sm:">
                    <p>Upcoming Events</p>
                    <p className="text-logoBlue font-bold">More</p>
               </div>
               <div className="flex flex-col md:min-w-[300px]">
                
                      <p className="sm:text-[32px] pt-4">Nov 4 @ 12PM</p>
                      <p className="text-logoBlue font-bold">Immigration FAQ Seminar</p>
                      <p className="pt-3">Come and learn about the most recent Immigration reforms</p>
                      <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5">Learn More</p>
               </div>
               <div className="flex flex-col md:min-w-[200px]">
                
                <p className="sm:text-[32px] pt-4">Nov 4 @ 12PM</p>
                <p className="text-logoBlue font-bold">Immigration FAQ Seminar</p>
                <p className="pt-3">Come and learn about the most recent Immigration reforms</p>
                <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5">Learn More</p>
         </div>
         <div className="flex flex-col md:min-w-[200px]">
                
                <p className="sm:text-[32px] pt-4">Nov 4 @ 12PM</p>
                <p className="text-logoBlue font-bold">Immigration FAQ Seminar</p>
                <p className="pt-3">Come and learn about the most recent Immigration reforms</p>
                <p className="pt-2 text-logoBlue font-bold border-b-2 pb-5">Learn More</p>
         </div>
               
              
              </div>
          </div>
      </div>
      </div>
      
  )
}

export default HomeBlog
 