import { createContext, useEffect, useState } from 'react';
import { MessageType } from 'types/interfaces';
import { db } from 'config/firebase';
import { ref, set, onValue } from "firebase/database";

type Props = {
    children: React.ReactNode
}

interface MessagesContextType {
    tags: string[],
    messages: MessageType[],
    addTags: (tagsValue: string[]) => void,
    deleteTags: (targetedTag: string) => void,
    sendMessage: (message: MessageType) => void
}

const MessagesContext = createContext<MessagesContextType>({
    tags: [],
    messages: [],
    addTags: (tagsValue) => { },
    deleteTags: (targetedTag) => { },
    sendMessage: (message) => { }
})

const MessagesProvider: React.FC<Props> = ({ children }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        const getMessages = () => {
            const messagesRef = ref(db, 'messages/');

            onValue(messagesRef, (snapshot) => {
                const data: MessageType[] = snapshot?.val()

                if (data) {
                    const readyData = Object.values(data);
                    if (tags.length > 0) {
                        const filterData = readyData.filter(el => {
                            if (el.tags === undefined) {
                                return true;
                            } else if (el.tags) {
                                return el.tags.some(value => tags.includes(value));
                            }
                            return false;
                        });

                        setMessages(filterData);
                    } else {
                        setMessages(readyData);
                    }
                }
            })
        }

        getMessages();
    }, [tags])

    const addTags = (tagsValue: string[]): void => {
        setTags(prev => [...prev, ...tagsValue])
    }

    const deleteTags = (targetedTag: string): void => {
        setTags(prev => prev.filter(el => el !== targetedTag))
    }

    const sendMessage = async (message: MessageType) => {
        setMessages(prev => [...prev, message]);

        const messageRef = ref(db, 'messages/' + message.timeStamp);

        try {
            await set(messageRef, message);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    return (
        <MessagesContext.Provider value={{ tags, addTags, deleteTags, sendMessage, messages }}>
            {children}
        </MessagesContext.Provider>
    )
}

export { MessagesContext, MessagesProvider }