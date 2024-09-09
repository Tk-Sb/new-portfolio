import PhoneAnimation from "./phone-animation";

export default function Home () {
    return (
        <div className="md:flex justify-between md:w-screen ">
            <div className="flex flex-col gap-[25px] w-fit h-fit px-[25px] md:px-[50px]">
                <div className="flex flex-col gap-[10px] md:gap[15px] max-w-[360px] h-fit"> 
                    <p className="w-fit h-fit md:h-[153px] header-font font-bold leading-[44px] md:leading-[50px]">
                        انقل اسمك
                        <br/> 
                        إلى 
                        <br/>
                        المستوى التالي 
                    </p>
                    <p className="w-fit h-fit md:w-[342px] md:h-[60px] subHeader-font leading-[25px] md:leading-[30px]">
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
                <div className="flex flex-grow justify-center h-fit pt-[25px] md:pt-[0px] ">
                    <PhoneAnimation></PhoneAnimation>
                </div>
        </div>
        
    )
}
