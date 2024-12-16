import React from 'react'

const SignUp = () => {
  return (
    
        <div className=' bg-[#F9F9F9] w-[1440px] h-[481px]'>
       
          
         <div className='  w-[1073px] h-[300px] gap-y-6 pt-8 mx-[93px] ' >

             <div className=' mx-[351px] pt-20px w-[571px] h-[114px] items-center font-mono text-[#2A254B]'>
                <h1 className='w-[571px] my-[4px] h-[50px]'>Join the club and get the benefits</h1>
                <p className='  w-[470px] h-[48px]'>Sign up for our newsletter and receive exclusive offers on new ranges,
                     sales, pop up stores and more</p>
            </div> 
            <div className='mx-[351px] w-[472px] h-[56px] flex '>
                <label>
                    <input type="text" name="" placeholder='your@email.com' className='bg-[#FFFF] pt-3 pb-3 pl-6 pr-0 w-[354px] h-[56px] text-[#FFFF]'>
                    </input><button className='bg-[#2A254B] text-white  pt-3 pb-3 pr-3'>Sign up</button>
                    </label>   
                
                </div> 
         </div>
        </div>
   
  )
}

export default SignUp