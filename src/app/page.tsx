import Navbar from "./components/Navbar";

import Ceramics from "./components/ceramics";
import Features from "./components/features";
import Features2 from "./components/features2";
import Hero from "./components/hero"
import Popular from "./components/popular";
import SignUp from "./components/signUp";
import Footer from "./components/Footer";

export default function Home(){
  return(
    <div className="w-[1440px] h-[4160px]">
     <Navbar />
     <Hero/>
     <Features/>
     <Ceramics/>
    <Popular/>
   <SignUp/>
   <Features2/>
   <Footer/>
    </div>
  );
}