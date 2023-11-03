import Image from 'next/image'
import headerbg from '../../../public/assets/img-city.png'
import {Service_Card} from '../../../DUMMY_DATA'
import lawyerpic from '../../../public/assets/lawyerpic.jpg' 
import ServiceCard from '@frontComponents/ServiceCard'
import Testimonials from '@frontComponents/Testimonials'
import {getDictionary} from '../../../lib/getDictionary'
import lawyer2 from '../../../public/assets/lawyer2.png' 
import Faq3 from '../../../frontComponents/Faq3'
 


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
           className="object-center object-cover pointer-events-none"
           src={lawyerpic}
           alt="header pic"
           priority
           
       />
       <div className="relative z-1 md:min-h-[450px]  sm:min-h-[300px]">
               <p className="flex items-center justify-center inset-0 absolute md:text-5xl lg:text-6xl tracking-tight text-white tracking-wide sm:text-[28px]">Personal Injury</p>
 
       </div>
   </div>

<div className="bg-logoBlue p-10">
   <div className="flex sm:flex-col md:flex-row md:container md:mx-auto ">
        <div className="md:flex">
                <Image className=" sm:h-full md:min-h-[300px] shadow-2xl md:w-9/10" width={3000} height={2000} src={lawyer2} alt=""/>
        </div>
        <div>
                <p className="sm:text-center text-[28px] text-white sm:pt-5">Our Expertise</p>
                <p className="sm:p-2 md:p-10 text-white text-[22px] sm:text-center md:text-left">At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama and Florida who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.

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