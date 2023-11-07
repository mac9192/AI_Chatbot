import Image from 'next/image'
import headerbg from '../../../public/assets/img-city.png'
import {Service_Card} from '../../../DUMMY_DATA'
import lawyerpic from '../../../public/assets/lawyerpic.jpg' 
import ServiceCard from '@frontComponents/ServiceCard'
import Testimonials from '@frontComponents/Testimonials'
import {getDictionary} from '../../../lib/getDictionary'
import lawyer2 from '../../../public/assets/lawyer2.png' 
import Faq3 from '../../../frontComponents/Faq3'
import Iframe from 'react-iframe'
 
 
import injury from '../../../public/assets/icon-injury.svg'
 


const PersonalInjury = async ({
    params,
  }: {
    params: {
      lang: string;
      };
  }) => {

    const locale = params.lang

    const dictionary = await getDictionary(locale)
    
    return (
 

        <div>

        
         
 <div className="relative   ">
       <Image 
           layout="fill"
           className="object-center object-cover pointer-events-none md:min-h-[650px] bg-fixed "
           src={'/assets/lawyerpic.jpg'}
           alt="header pic"
           priority
           quality={80}
           
       />
       <div className="relative z-1 md:min-h-[450px]  sm:min-h-[300px]">
                
 
       </div>
        
  

   </div>  
 <div>
     <div className="md:hidden sm:block p-6">
                     <p className="text-logoBlue   sm:text-[28px] text-[32px] font-bold track-leading ">COMPASSIONATE ADVOCATES FOR PERSONAL INJURY VICTIMS</p>
                     <p className="text-black track-leading pt-5 ">At our personal injury law firm, we are dedicated to providing unwavering support and expert legal representation to those who have been injured due to the negligence of others. With a deep commitment to justice and a track record of successful outcomes, our team of compassionate advocates is here to help you secure the compensation you deserve.</p>
     </div>
 </div>

   <div className="relative container   sm:hidden md:block h-32 w-32 mx-auto md:min-h-[225px] md:min-w-[1000px] lg:min-w-[1200px] md:mt-[-363px] lg:mt-[-340px]   mb-[160px] ...">
            <div className="absolute inset-x-5 bottom-0 h-16  text-white mx-auto     opacity-80">
                <div className="flex flex-row  border-l-4 border-logoBlue ">
                    <div className="w-4/5 flex flex-col bg-white min-h-[229px] p-5">
                        <p className="text-logoBlue    text-[32px] font-bold track-leading ">COMPASSIONATE ADVOCATES FOR PERSONAL INJURY VICTIMS</p>
                        <p className="text-black track-leading pt-5 ">At our personal injury law firm, we are dedicated to providing unwavering support and expert legal representation to those who have been injured due to the negligence of others. With a deep commitment to justice and a track record of successful outcomes, our team of compassionate advocates is here to help you secure the compensation you deserve.</p>
                        <span className="border-dotted border-b-2 border-logoBlue pt-10 mb-10">

                            
                        </span>
          
                                <button className="w-1/5 flex text-left text-white bg-logoBlue  border-0 py-2 px-9 focus:outline-none hover:bg-gray rounded text-lg">Book</button>
                            
                            
                
                      
                    </div>
                    

                    <div className="w-2/5 p-9 flex flex-col bg-logoBlue min-h-[280px]  ">
                        <div className="flex flex-row inline-block align-top space-x-5">
                           
                                     <Image className="   " width={20} height={10} src={injury} alt=""/>
                          
                        
                              <p className="text-[20px]"> PERSONAL INJURY</p>
                              
                        </div>
                           <span className="border-dotted border-b-2 border-white pt-10  "></span>
                        <p className="text-logoBlue pt-10 text-white  "> Our team of experienced attorneys is committed to securing the compensation and justice our clients deserve, ensuring they can focus on their recovery with confidence.</p>
                   
                        <p className="text-[18px] pt-12"> Explore More</p>
                       
                    </div>
                </div>
      
            </div>
       </div>

<div className="bg-logoBlue p-10 md:mt-[338px] lg:mt-[315px] sm:mt-[0px]">
   <div className="flex sm:flex-col md:flex-row md:container md:mx-auto  space-x-10">
        <div className="md:flex">
         
        </div>
        <div>
                <p className="sm:text-center text-[28px] text-white sm:pt-5 md:pt-0">Our Expertise</p>
                <p className="sm:p-2 md:p- text-white text-[22px] sm:text-center md:text-left">At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama and Florida who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.

                                                              A Georgia personal injury lawyer from Cheves Briceno is prepared to negotiate a settlement or go to trial for the fair and just compensation that you deserve.</p>
        </div>

   </div>
  </div>
            

            <div className=" text-center ">

               <div className="flex-col space-y-3 md:p-[120px] sm:p-[50px]  ">
             <p className="flex items-center justify-center  md:text-5xl lg:text-6xl tracking-tight text-logoBlue">Personal Injury Services</p>
          
                   <div className="flex md:flex-row sm:flex-col text-center  sm:space-y-3 md:space-y-0  ">

            
                        <div className="md:w-1/3   text-center md:mx-auto  "> 
                        <ServiceCard card={Service_Card[0]}/>
                        </div>
                        <div className="md:w-1/3   text-center md:mx-auto     "> 
                        <ServiceCard card={Service_Card[1]} />
                        </div>
                        <div className="md:w-1/3   text-center md:mx-auto   "> 
                        <ServiceCard card={Service_Card[2]}/>
                        </div>

                   </div>
                   <div className="flex md:flex-row sm:flex-col text-center sm:space-y-3 md:space-y-0 min-h-[300px]">
                        <div className="md:w-1/3 mr-5  text-center md:mx-auto sm:w-full   "> 
                        <ServiceCard card={Service_Card[3]}/>
                        </div>
                        <div className="md:w-1/3 mr-5 text-center md:mx-auto sm:w-full   "> 
                        <ServiceCard card={Service_Card[4]}/>
                        </div>
                        <div className="md:w-1/3 mr-5 text-center md:mx-auto sm:w-full   "> 
                        <ServiceCard card={Service_Card[5]}/>
                        </div>
          
                   </div>
    
               </div>

               <div className="bg-graydark ">
                   <Faq3 dictionary={dictionary} />
               </div>

                <div>

               <Testimonials  dictionary={dictionary}/>
                </div>
            </div>
        </div>
    )
}

export default PersonalInjury

/*

 <div className="md:container md:mx-auto text-center  ">
                <div className="flex flex-col space-y-10">
                    <div className="flex md:flex-row sm:flex-col space-y-10 ">
                        <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue">1</p>
                    </div>
                    <div className="flex md:flex-row sm:flex-col space-y-10 ">
                    <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue">1</p>
                    </div>
                    
                     </div>

            </div>


/*

  <div className=" md:mx-auto md:p-[80px] sm:pt-8">
           
                <div className="flex md:flex-row sm:flex-col mx-auto w-full">
            

            <div className="md:w-1/2 md:min-w-[80px] sm:w-full">
                    <Image className=" h-full md:min-h-[300px] shadow-2xl w-full " width={2000} height={2000} src={lawyer2} alt=""/>
            </div>
                  
             
              


                
                <div className="flex flex-col p-10  text-left">

                          <p className="   md:w-1/3 text-left  text-[24px] text-white tracking-wide    sm:pb-3 md:text-left sm:text-center">Our Expertise</p>
                          <div className=" w-16 h-1 rounded-full bg-amber-500 inline-flex inline sm:text-center md:block sm:hidden "></div>
                <p className="md:p-10 w-full md:text-left max-w-[800px] text-white tracking-wide text-[20px] sm:pt-6 sm:text-center ">At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama and Florida who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.

                    A Georgia personal injury lawyer from Cheves Briceno is prepared to negotiate a settlement or go to trial for the fair and just compensation that you deserve.</p>
                </div>
          
                </div>
            </div>
*/