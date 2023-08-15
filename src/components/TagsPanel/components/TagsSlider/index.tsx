import { useContext } from 'react';
import { TagsArchiveContext } from 'context/TagsArchiveContext';
import { MessagesContext } from 'context/MessagesContext';
import Chip from '@mui/material/Chip';
import './index.css';

const TagsSlider: React.FC = () => {
    const { tagsArchive } = useContext(TagsArchiveContext);
    const { addTags } = useContext(MessagesContext);

    const renderElements = tagsArchive?.map((el, index) => {
        return (
            <Chip
                key={index}
                label={el}
                title={el}
                onClick={() => addTags([el])}
                sx={{
                    cursor: "pointer"
                }}
            />
        )
    })

    return (
        <div className='TagsSlider'>
            <div className='TagsSlider__wrapper'>
                {renderElements}
            </div>
        </div>
    )
}

export default TagsSlider;