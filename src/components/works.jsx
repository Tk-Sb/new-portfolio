import HoverCard from "./hover-card/hover-card";


export default function Works() {
    return (
        <div className="flex flex-col gap-[25px] w-full h-fit ">
            <div className="px-[25px] lg:px-[50px] flex flex-col gap-[10px] w-fit h-fit"> 
                <p className="w-fit h-fit header-font ">
                نجاحنا في تحويل 
                <br/>
                خيالك
                <br/>
                إلى واقع رقمي
                </p>
                <p className="w-fit h-fit subHeader-font ">
                إليك نبذة من مشاريعنا السابقة.
                </p>
            </div>
            <div className="w-fit px-[25px] md:px-[50px] ">
                <HoverCard/>
            </div>
        </div>
    )
}
