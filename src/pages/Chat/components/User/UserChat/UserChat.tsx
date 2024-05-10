import ChatDate from "./component/ChatDate"
import ReciveMessage from "./component/ReciveMessage"
import SendMessage from "./component/SendMessage"

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