import { useContext } from 'react';
import { MessagesContext } from 'context/MessagesContext';
import Chip from '@mui/material/Chip';
import './index.css';

const TagsBox: React.FC = () => {
    const { tags, deleteTags } = useContext(MessagesContext);

    const handleDelete = (tagValue: string) => {
        deleteTags(tagValue)
    }

    const renderElements = tags?.map((el, index) => {
        return (
            <Chip
                key={index}
                className='fedeIn-animation'
                label={el}
                onDelete={() => handleDelete(el)}
                sx={{
                    margin: "0 10px 10px 0"
                }}
            />
        )
    })
    return (
        <div className="TagsBox">
            {renderElements}
        </div>
    )
}

export default TagsBox;