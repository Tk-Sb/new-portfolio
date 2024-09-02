import Rive from "./rive";

const cards = [
  { mainText: "Responsive design", secondLine: "(Screen width adaptation)", subText: "يأخذ الموقع الشكل المناسب ليظهر بالشكل الأمثل على جميع أنواع و أحجام الشاشات", animation: "/responsive.riv" },
  { mainText: "UI/UX", secondLine: "(User Interface / User Experience)", subText: "هوية بصرية خاصة بموقعك، مصممة لتعكس الجودة العالية، و مدروسة بناءاً على تجارب المستخدمين لتسهل تفاعل المستخدم مع الموقع", animation: "/UI-UX.riv" },
  { mainText: "SPA", secondLine: "(Single Page Application)", subText: "سلاسة كبيرة في التنقل بين الصفحات تعطي سرعة في الأداء مما يزيد من تفاعل المستخدم مع التطبيق. (بالأخص على أجهزة الموبايل)", animation: "/spa.riv" },
  { mainText: "SSR", secondLine: "(Server-Side Rendering)", subText: "يعمل موقعك بنسبة %90 على السيرفر الخاص بك، مما يرفع مستوى أمان و خصوصية البيانات ضمن التطبيق، كما يسهل عليك إدارة موقعك", animation: "/ssr.riv" },
  { mainText: "SEO", secondLine: "(Search Engine Optimization)", subText: "بفضل ال SSR عالي الأداء يتم تحسين نتائج محركات البحث الذكية، مما يزيد من نسبة عثور المستخدمين على موقعك في أي مكان في العالم", animation: "/seo.riv" },
  { mainText: "CMS", secondLine: "(Content Management System)", subText: "تحكم بموقعك بالكامل عن طريق لوحة تحكم خاصة بك، تستطيع عن طريقها التعديل على التفاصيل في الموقع بخطوتين فقط", animation: "/cms.riv" },
]

export default function FeatureCard() {

	return (
    <>
      <div className="flex flex-col w-fit h-fit">
        <div className="w-[350px] h-[350px]">
          <Rive animation={cards[0].animation}></Rive>
        </div>
        <div dir="rtl"  className="flex flex-col items-center text-white w-[350px] h-[250px] gap-[15px] p-[25px] bg-gradient-to-tr from-gray-900 to-slate-700">
          <p dir="ltr" className="text-[24px] font-bold w-full">
            {cards[0].mainText}
            <br />
            {cards[0].secondLine}
          </p>
          <p className="text-[18px] w-full">
            {cards[0].subText}
          </p>
        </div>
      </div>
    </>
  );
}