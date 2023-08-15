
import { MessagesContext } from 'context/MessagesContext';
import { useContext, useEffect, useRef } from 'react';
import MessageCard from './components/MessageCard';
import Bg from './assets/empty-bg.png';
import './index.css';

const MessagesBox: React.FC = () => {
    const { messages } = useContext(MessagesContext);

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (ref.current) {
            const box = ref.current;
            ref.current.scrollTo({
                top: box.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    const renderElements = messages?.map(el => <MessageCard key={el.timeStamp} data={el} />)

    return (
        <div className="MessagesBox" ref={ref}>
            {messages.length > 0 ?
                renderElements
                :
                <img className="MessagesBox__img" src={Bg} alt="background" />
            }
        </div>
    )
}

export default MessagesBox;