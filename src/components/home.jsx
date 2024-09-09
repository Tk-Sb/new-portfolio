import PhoneAnimation from "./phone-animation";

export default function Home () {
    return (
        <div className="flex flex-wrap gap-[25px] w-full h-fit ">
            <div className="flex flex-col gap-[25px] w-fit h-fit ">
                <div className="flex flex-col gap-[10px] md:gap[15px] w-fit h-fit"> 
                    <p className="w-fit h-fit header-font font-bold ">
                        انقل اسمك
                        <br/> 
                        إلى 
                        <br/>
                        المستوى التالي 
                    </p>
                    <p className="w-fit h-fit subHeader-font ">
                        دليلك في العالم الرقمي سريع التغير
                        <br/>
                        نساعدك لإثبات حضورك في عالم الإنترنت.
                    </p>
                </div>
                <div className="flex lg:flex-col gap-[15px] md:gap-[20px] lg:gap-[15px] ">
                    <button className="md:text-[18px] w-[125px] h-[50px] md:w-[150px] lg:w-[335px] flex justify-center items-center rounded-[15px] border-[2px] border-[#143EEA] bg-[#143EEA] font-medium text-white transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
                        تواصل معنا
                    </button>

                    <button className="md:text-[18px] w-[125px] h-[50px] md:w-[150px] lg:w-[335px]  flex justify-center items-center rounded-[15px] border-[2px] border-[#143EEA] bg-transparent font-medium text-[#143EEA] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
                        أعمالنا
                    </button>
                </div>
            </div>
            <div className="flex flex-grow justify-center h-fit ">
                <PhoneAnimation></PhoneAnimation>
            </div>
        </div>
        
    )
}
