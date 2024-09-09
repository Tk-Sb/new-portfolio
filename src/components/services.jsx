import FeatureCards from "./feature-cards/feature-cards";


export default function Services() {
  return (
    <>
      <div className="flex flex-col gap-[25px] w-full h-fit ">
        <div className="flex flex-col gap-[10px] w-fit h-fit"> 
          <p className="w-fit h-fit header-font ">
            أفضل الحلول
            <br/>
            التقنية 
            <br/>
            بين يديك
          </p>
          <p className="w-fit h-fit subHeader-font ">
            نقدم لك الجودة و السرعة و الأمان و الخصوصية
            <br />
            باستخدام أحدث أدوات التصميم و البرمجة.
          </p>
        </div>
      </div>
    </>
  )
}
