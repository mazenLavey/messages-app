import React, { createContext, useEffect, useState } from "react";
import { db } from 'config/firebase';
import { ref, onValue } from "firebase/database";
import { MessageType } from "types/interfaces";

type Props = {
    children: React.ReactNode
}

interface TagsArchiveContextType {
    tagsArchive: string[]
}

const TagsArchiveContext = createContext<TagsArchiveContextType>({
    tagsArchive: []
})

const TagsArchiveProvider: React.FC<Props> = ({ children }) => {
    const [tagsArchive, setTagsArchive] = useState<string[]>([]);

    useEffect(() => {
        const getMessages = () => {
            const messagesRef = ref(db, 'messages/');

            onValue(messagesRef, (snapshot) => {
                const data: MessageType[] = snapshot?.val()

                if (data) {
                    const allMessages = Object.values(data);
                    const allTags = Array.from(new Set(allMessages?.map(({ tags }) => tags).flat().filter(el => el !== undefined && el !== null && el!== '')));
                    setTagsArchive(allTags)
                }
            })
        }

        getMessages();
    }, [])

    return (
        <TagsArchiveContext.Provider value={{ tagsArchive }}>
            {children}
        </TagsArchiveContext.Provider>
    )
}

export { TagsArchiveProvider, TagsArchiveContext }