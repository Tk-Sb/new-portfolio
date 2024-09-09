
import AnimatedBeam from "@/components/animated-beam/animated-beam";
import FeatureCards from "@/components/feature-cards/feature-cards";
import Home from "@/components/home";
import Navbar from "@/components/nav/navbar";
import Services from "@/components/services";
import Tools from "@/components/tools";
import Works from "@/components/works";

export default function App() {
  return (
    <>
      
      <nav dir="rtl" className="w-full h-[75px] z-10">
        <Navbar></Navbar>
      </nav>
      <main dir="rtl" className="flex flex-col justify-start gap-[100px] ">

        <section className="px-[25px] lg:px-[50px] ">
          <Home></Home>
        </section>

        <section>
          <div className="px-[25px] lg:px-[50px] ">
            <Services></Services>
          </div>
          
          <div dir="ltr">
            <FeatureCards/>
          </div>
        </section>

        <section>
          <Works></Works>
        </section>

        <section className="px-[25px] lg:px-[50px] ">
          <div>
            <Tools></Tools>
          </div>
          <div dir="ltr" className="w-full">
            <AnimatedBeam/>
          </div>
        </section>
        
      </main> 
    </>   
  );
}