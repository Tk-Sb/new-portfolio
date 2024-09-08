import FeatureCards from "./feature-cards/feature-cards";


export default function Services() {
    return (
            <div className="flex flex-col gap-[50px] w-fit h-fit ">
                <div className="px-[25px] flex flex-col gap-[10px] max-w-[360px] h-fit"> 
                    <p className="max-w-[310px] h-[132px] header-font leading-[44px]">
                    أفضل الحلول
                    <br/>
                    التقنية 
                    <br/>
                    بين يديك
                    </p>
                    <p className="max-w-[310px] h-[50px] subHeader-font leading-[25px]">
                    قدم لك الجودة و السرعة و الأمان و الخصوصية
                    باستخدام أحدث أدوات التصميم و البرمجة.
                    </p>
                </div>
                <div dir="ltr" className="w-screen flex flex-col">
                    <FeatureCards/>
                </div>
            </div>
    )
}
