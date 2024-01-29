import QuestionModel from "../../../components/QuestionModel"
import QUESTION from "../../../utills/QuestionAnswer.json"

const Questions = () => {
    return (
        <>
            <div className="bg-blue-300 ml-10 mr-10 rounded-xl py-5 mb-10 xsm:ml-2 xsm:mr-2" >
                <div className="ml-7 text-4xl font-bold py-3 xsm:text-xl" >
                    <p>Frequntaly Ask Questions</p>
                </div>
                {
                    QUESTION.map((ele) => {
                        return (
                            <QuestionModel data={ele} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Questions