
import Home from "@/components/home";
import Navbar from "@/components/navbar";

export default function App() {
  return (
      <main dir="rtl" className="flex justify-start items-start flex-col gap-[50px]">
        <nav className="w-[100vw] h-[75px] z-10">
          <Navbar></Navbar>
        </nav>
        <section className="pt-[0px]">
          <Home/>
        </section>

        {/* <section>
          
        </section> */}
        
        {/* it will be sections */}

      </main>  
  );
}
