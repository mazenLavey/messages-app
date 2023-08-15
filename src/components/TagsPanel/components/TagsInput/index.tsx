import { useContext, useState } from 'react';
import { MessagesContext } from 'context/MessagesContext';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const TagsInput: React.FC = () => {
    const { addTags } = useContext(MessagesContext)
    const [userTag, setUserTag] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserTag(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userTag.length > 0) {
            const tags: string[] = userTag.split(' ');
            addTags(tags);
            setUserTag('');
        }
    }

    return (
        <form className='TagsInput' onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="userTag"
                    name="userTag"
                    value={userTag}
                    placeholder='Add a tag / filter by tag'
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        backgroundColor: '#6dbad8'
                    }}
                    endIcon={<FontAwesomeIcon icon={faPlus} />}
                >
                    add
                </Button>
        </form>
    )
}

export default TagsInput;