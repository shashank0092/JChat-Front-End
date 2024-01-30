import USER from "../assets/User1.jpeg"
const TestimonalBox=()=>{
    return(
        <>
            <div className="w-96  border  border-black rounded-3xl">
                <div className="flex justify-center  items-end h-48 rounded-3xl ">
                    <div className="w-1/2  flex justify-center" >
                        <img src={USER} className="w-5/6 rounded-full "  />
                    </div>
                </div>
                <div className="bg-black h-full rounded-3xl" >
                    <div>
                        <p className="text-white text-center">SHASHANK SHUKLA</p>
                    </div>
                    <div>
                        <p className="text-white text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga unde rerum omnis possimus, ratione tempora cumque totam mollitia dolor, nam laudantium laboriosam quibusdam fugit distinctio quidem veritatis maiores? Minus. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonalBox