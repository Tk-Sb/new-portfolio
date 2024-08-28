
export default function Home () {
    return (
        <div className="flex flex-col gap-[25px] w-fit h-fit px-[25px]">
            <div className="flex flex-col gap-[10px] max-w-[360px] h-fit"> 
                <p className="max-w-[310px] h-[132px] text-[36px] font-bold leading-[44px]">
                    انقل اسمك
                    <br/> 
                    إلى 
                    <br/>
                    المستوى التالي 
                </p>

                <p className="max-w-[310px] h-[50px] text-[16px] leading-[25px]">
                    دليلك في العالم الرقمي سريع التغير
                    نساعدك لإثبات حضورك في عالم الإنترنت.
                </p>
            </div>
            <div className="flex gap-[15px]">
                <button className="w-[125px] h-[50px] flex justify-center items-center rounded-[15px] border-[2px] border-[#143EEA] bg-[#143EEA] font-bold text-white transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
                    تواصل معنا
                </button>
                
                <button className="w-[125px] h-[50px] flex justify-center items-center rounded-[15px] border-[2px] border-[#143EEA] bg-transparent font-bold text-[#143EEA] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
                    أعمالنا
                </button>
            </div>
        </div>
    )
}
