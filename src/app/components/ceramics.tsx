import React from 'react'
import Image from 'next/image'
const Ceramics = () => {
  return (
    <div className=' w-[1440px] h-[761px]'>
<div>
    <h3 className='  mx-[90px] w-[217px] h-[39px]'>New ceramics</h3>
</div>
<div className='mx-[80px] flex space-x-5'>

  <div className=' w-[305px] h-[462px]'>
  <Image src={"/assests/Photo.png"} alt='chair-image' width={305} height={375} />
  <h4 className=' w-[154px] h-[28px] font-mono text-lg  text-[#494565]'>The Dandy chair</h4>
  <h4 className=' font-mono text-lg text-[#494565]'>£250</h4>
  </div>

 <div className='w-[305px] h-[462px]'>
 <Image src={"/assests/Photo (1).png"} alt='chair-image' width={305} height={375} />
  <div className='  w-[154px] h-[63px]'>
    <h4 className=' w-[154px] h-[28px] font-mono text-lg  text-[#494565]'>Rustic Vase Set</h4>
  <h4 className=' font-mono text-lg text-[#494565]'>£155</h4>
  </div>
  </div>

  <div className='w-[305px] h-[462px] '>
    <Image src={"/assests/Photo (2).png"} alt='chair-image' width={305} height={375} />
    <h4 className=' w-[154px] h-[28px] font-mono text-lg  text-[#494565]'>The Silky Vase</h4>
    <h4 className=' font-mono text-lg text-[#494565]'>£125</h4>
    </div>
  <div className='w-[305px] h-[462px]'>
  <Image src={"/assests/Photo (3).png"} alt='chair-image' width={305} height={375} />
  <h4 className=' w-[154px] h-[28px] font-mono text-lg  text-[#494565]'>The Lucy Lamp</h4>
  <h4 className=' font-mono text-lg text-[#494565]'>£399</h4>
  
  </div>

</div>
<div className='mx-[635px] my-[649px] flex justify-center w-[170px] h-[56px] mt-4  bg-[#F9F9F9]'>
  <button className='pt-4 w-[106px] h-[24px]'>View collection</button>
</div>
    </div>
  )
}

export default Ceramics