import ChatDate from "./ChatDate"
import ReciveMessage from "./ReciveMessage"
import SendMessage from "./SendMessage"

const UserChat=()=>{
    return(
        <>
            <div>
                <div>
                    <ChatDate/>
                </div>
                <div>
                    <SendMessage/>
                </div>
                <div>
                    <ReciveMessage/>
                </div>
            </div>
        </>
    )
}

export default UserChat