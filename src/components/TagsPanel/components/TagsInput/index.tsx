import { useContext, useState } from 'react';
import { MessagesContext } from 'context/MessagesContext';
import { TagsArchiveContext } from 'context/TagsArchiveContext';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Autosuggest from 'react-autosuggest';
import './index.css';

const TagsInput: React.FC = () => {
    const { addTags } = useContext(MessagesContext);
    const { tagsArchive } = useContext(TagsArchiveContext);
    const [userTag, setUserTag] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

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

    const getSuggestions = (value: string) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : tagsArchive.filter(tag => tag.toLowerCase().includes(inputValue));
    };

    const renderSuggestion = (suggestion: string) => <div>{suggestion}</div>;

    const onSuggestionsFetchRequested = ({ value }: any) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: 'Add a tag / filter by tag',
        value: userTag,
        onChange: handleChange
    };

    return (
        <form className='TagsInput' onSubmit={handleSubmit}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={(suggestion: string) => suggestion}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
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