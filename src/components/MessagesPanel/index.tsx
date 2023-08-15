import MessagesBox from "./components/MessagesBox";
import MessagesInput from "./components/MessagesInput";
import './index.css';

const MessagesPanel: React.FC =()=>{
    return(
        <div className="MessagesPanel">
            <MessagesBox />
            <MessagesInput />
        </div>
    )
}

export default MessagesPanel;