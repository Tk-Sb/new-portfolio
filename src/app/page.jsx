
import FeatureCards from "@/components/feature-cards/feature-cards";
import Home from "@/components/home";
import Navbar from "@/components/nav/navbar";
import Services from "@/components/services";

export default function App() {
  return (
    <>
      
      <main dir="rtl" className="flex justify-start items-start md:items-center flex-col gap-[50px]">
        <nav className="w-[100vw] h-[75px] z-10">
          <Navbar></Navbar>
        </nav>
        <section>
          <Home/>
        </section>

        <div className="hidden md:block h-[2px] w-[85%] mt-[80px] bg-[#00000040]"/>
        
        <section>
          <Services/>
        </section>
        {/* <section>
          
          </section> */}
        
        {/* it will be sections */}
      </main> 
    </>   
  );
}