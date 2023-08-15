import { useContext, useState } from 'react';
import { MessagesContext } from 'context/MessagesContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
        <form onSubmit={handleSubmit}>
            <Stack direction="row">
                <TextField
                    fullWidth
                    id="userTag"
                    name="userTag"
                    variant="outlined"
                    value={userTag}
                    placeholder='Add a tag / filter by tag'
                    onChange={handleChange}
                />

                <Button
                    variant="outlined"
                    type="submit"
                >
                    add
                </Button>
            </Stack>
        </form>
    )
}

export default TagsInput;