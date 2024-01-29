import React, { useState } from "react"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


interface Props {
    data: {
        question: string;
        answer: string;
    }

}

const QuestionModel: React.FC<Props> = ({ data }) => {
    const[showAnswer,setShowAnswer]=useState(false)
    return (
        <>
            <div className="py-2 ml-5 mr-5" >
                <div className="border border-black rounded-lg bg-slate-100 " >
                    <div className="ml-5 py-3 flex items-center " >
                        <div className="flex-1" >
                            <p className="text-3xl font-bold xsm:text-xl" >{data?.question}</p>
                        </div>
                        <div className="mr-10" >
                            <button className="rounded-lg bg-slate-300" >
                                {
                                    showAnswer?(
                                    <>
                                        <IoIosArrowDropupCircle className="text-3xl" onClick={()=>setShowAnswer(false)} />
                                    </>):
                                    (
                                    <>
                                        <IoIosArrowDropdownCircle className="text-3xl" onClick={()=>setShowAnswer(true)} />
                                    </>)
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`ml-5 py-3 ${showAnswer?(`block`):(`hidden`)} xsm:py-0`}  >
                        <p className="text-xl xsm:text-base" >{data?.answer}</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default QuestionModel