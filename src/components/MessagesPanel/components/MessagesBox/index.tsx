
import { MessagesContext } from 'context/MessagesContext';
import { useContext, useEffect, useRef } from 'react';
import MessageCard from './components/MessageCard';
import './index.css';

const MessagesBox: React.FC = () => {
    const { messages } = useContext(MessagesContext);

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(ref.current) {
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
            {renderElements}
        </div>
    )
}

export default MessagesBox;