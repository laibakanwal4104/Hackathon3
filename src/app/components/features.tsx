import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
const Features = () => {
  return (
    <div>
        <div className='w-[1440px] h-[355px]  '>
        
            <h3 className=' mx-[529px] flex w-[366px] h-[34px] text-[#2A254B] '>What makes our brand different</h3>
       
       <div className='flex space-x-20 mx-[80px] pt-8'>

       <div className='   w-[270px] h-[124px] text-[#2A254B]'>
       <div className='  w-[24px] h-[24px]'>
       <TbTruckDelivery className=' w-[21px] h-[17px]' />
       </div>
       <div className=' w-[270px] h-[84px]'>
       <h4 className=' w-[199px] h-[28px]'>Next day as standard</h4>
          
          <p className='pt-2 w-[270px] h-[48px]' >Order before 3pm and get your order
          the next day as standard</p>
        
          </div>
          
       </div>
        
        <div className='  w-[266px] h-[124px] text-[#2A254B]'>
        <div className='w-[24px] h-[24px]'>
        <IoIosCheckmarkCircleOutline  className='w-[21px] h-[21px]'/>
        </div>
        <div className=' w-[266px] h-[84px]'> 
            <h4 className='  w-[205px] h-[28px]'>Made by true artisans</h4>
          
            <p className='pt-2   w-[266px] h-[48px]'>Handmade crafted goods made
                 with real passion and craftmanship
           </p>
        </div>
        </div>

        
        <div className='   w-[235px] h-[124px] text-[#2A254B]'>
        <div className='w-[24px] h-[24px]'>
        <TbTruckDelivery className='w-[21px] h-[15px]' />
        </div>
        <div className='w-[235px] h-[84px]'>
            <h4 className=' w-[196px] h-[28px]'>Unbeatable prices</h4>
          
            <p className=' w-[235px] h-[84px]'>For our materials and quality you
                 won’t find better prices anywhere
            </p>
           
            </div>
        </div>

        <div className='   w-[265px] h-[124px] text-[#2A254B]'>
        <div className='w-[24px] h-[24px]'>
        <LuSprout  className='w-[17px] h-[21px] ' />
        </div>
        <div className='  w-[265px] h-[87px]'>
            <h4 className='w-[196px] h-[28px]'>Recycled packaging</h4>
          
            <p className=' w-[265px] h-[48px]'>We use 100% recycled packaging to
                 ensure our footprint is manageable
            </p>
           
            </div>
        </div>

        </div>

            


         
         </div>
    </div>
  )
}

export default Features

