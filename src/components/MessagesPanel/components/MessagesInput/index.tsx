import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { MessagesContext } from 'context/MessagesContext';
import { MessageType } from 'types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const MessagesInput: React.FC = () => {
    const { sendMessage, tags } = useContext(MessagesContext);
    const [userMessage, setUserMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userMessage.length > 0) {
            const timeStamp: number = new Date().getTime();

            const message: MessageType = {
                timeStamp: timeStamp,
                text: userMessage,
                tags: tags
            }

            sendMessage(message);
            setUserMessage('');
        }
    }

    return (
        <form className='MessagesInput' onSubmit={handleSubmit}>
                <input
                    type='text'
                    id="userMessage"
                    name="userMessage"
                    value={userMessage}
                    placeholder='Write a message...'
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        backgroundColor: '#6dbad8'
                    }}
                    endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                >
                    send
                </Button>
        </form>
    )
}

export default MessagesInput;