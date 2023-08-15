import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MessagesContext } from 'context/MessagesContext';
import { MessageType } from 'types/interfaces';

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
        <form onSubmit={handleSubmit}>
            <Stack direction="row">
                <TextField
                    fullWidth
                    id="userMessage"
                    name="userMessage"
                    variant="outlined"
                    value={userMessage}
                    placeholder='Write a message...'
                    onChange={handleChange}
                />

                <Button
                    variant="outlined"
                    type="submit"
                >
                    send
                </Button>
            </Stack>
        </form>
    )
}

export default MessagesInput;