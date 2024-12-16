
import React from 'react'
import {Inter} from "next/font/google"
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";


// for google fonts 
const inter = Inter({subsets:['latin']})

const Navbar = () => {
    // navbar items here
    let navItems =[
        { 
            name: "Ceramics",
            link:"#",
          },
          { 
            name: "Tables",
            link:"#",
          },
          { 
            name: "Chairs",
            link:"#",
          },
          { 
            name: "Crockery",
            link:"#",
          },
           { 
            name: "Tableware",
            link:"#",
          },
          { 
            name: "Cutlery",
            link:"#",
          },



]
  return (
   
    
    <div className={` ${inter.className} w-[1440px] h-[132px]` }>
      <div className='  flex justify-evenly w-[16px] h-[16px]'>
        <div className='mx-[28px] pt-4'>
      <IoSearch className=' w-[14px] h-[14px]' />
 

      </div>

      <div className=' flex gap-4 mx-[1396px] my-[20px] '>
      <MdOutlineShoppingCart  className=' w-[15px] h-[14px]' />
      
      
      <FaRegCircleUser className='w-[14px] h-[14px]' />
      </div>

      
      </div>
      


      <h3 className=' mx-[687px]  font-bold regular flex w-[57px] h-[30px]'>Avion</h3>
      <div className='mx-[28px]  w-[1386px]'>
        <hr/>
        </div>
         <ul className="space-x-12 text-[#726E8D] flex items-ceter justify-center h-[22px] my-[16px] ">
           
           {navItems.map((item, i) => (
            <li key={i}>
            <Link href={item.link}>{item.name}</Link>
            </li>
           ))}
         </ul>
    </div>

    
   
  )
}

export default Navbar