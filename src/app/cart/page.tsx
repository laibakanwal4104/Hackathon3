import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function  cart () {
    return(
        <div>
            <div className="w-[1440px] h-[1261px]">
                <div>
                <Navbar/>
                </div>

                <div className="w-[1440px] h-[749px] text-[#494565] bg-[#F9F9F9]">
                       <h1 className="w-[328px] h-[50px] mx-[188px] py-14 font-mono font-extralight text-2xl ">Your shopping cart</h1>
                       
                       <div className="w-[55px] h-[20px]  mx-[188px] my-[14px]  font-mono  flex">
                       <h6>Product</h6>
                       <h6 className="mx-[502px] ">Quantity</h6>
                       <h6>Total</h6>

                        </div>
                       <div className="mx-[304px] my-[10px] w-[1064px]">
                       <hr/>
                       </div>
                       <div className="w=[309px] h-[139px]">

                <div className="mx-[188px] flex space-x-5 ">
                
                <Image src={"/assests/Product Image.png"} alt='marble pot' width={109} height={134} />
                  <div className="w-[179px] h-[110px] px-3 "> 
                    <h1 className=" text-xl h-[28px] my-[4px]">Graystone vase</h1> 
                    <p className=" h-[42px] my-[6px] ">A timeless ceramic vase with 
                         a tri color grey glaze.</p>
                    <h4 className=" h-[24px] my-[30px]">£85</h4>
                    
                    </div>
                </div>
                <div className="mx-[1340px]">
                    <h6 className="">£85</h6>
                </div>
                </div>

<br/>
                <div className="mx-[188px] flex space-x-5 ">
                <Image src={"/assests/Product Image 2.png"} alt='marble pot' width={109} height={134} />
                  <div className="w-[179px] h-[110px] px-3 "> 
                    <h1 className=" text-xl h-[28px] my-[4px]">Basic white vase</h1> 
                    <p className=" h-[42px] my-[6px] ">Beautiful and simple this is
                    one for the classics
                       </p>
                    <h4 className=" h-[24px] my-[30px]">£85</h4>
                    </div>
                </div>


                
                </div>

             



                </div>

                
                    <Footer/>
               
            </div>
        
    )
}