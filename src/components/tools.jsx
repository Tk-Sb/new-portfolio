import AnimatedBeam from "./animated-beam/animated-beam";

export default function Tools() {
    return (
        <div className="flex flex-col gap-[25px] w-fit h-fit ">
            <div className="px-[25px] lg:px-[50px] flex flex-col gap-[10px] w-fit h-fit"> 
                <p className="w-fit h-fit header-font ">
                أفضل تنقنيات و أدوات
                <br/>
                التصميم و البرمجة
                <br/>
                في خدمتك
                </p>
                <p className="w-fit h-fit subHeader-font ">
                تشكيلة عالية المستوى من لغات البرمجة و تطبيقات التصميم
                <br/>
                جاهزة لبناء تطبيقك التالي.
                </p>
            </div>
            <div className="w-screen">
                <AnimatedBeam/>
            </div>
        </div>
    )
}
