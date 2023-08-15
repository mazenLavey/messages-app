import { MessageType } from 'types/interfaces';
import Chip from '@mui/material/Chip';
import timeAgo from 'utils/getMoment';
import './index.css';

type Props = {
    data: MessageType;
}

const MessageCard: React.FC<Props> = ({ data }) => {

    const renderTags = data.tags?.map((el, index) => <Chip  key={index} label={`#${el}`}  variant="outlined" />);
    const date = timeAgo(data.timeStamp);

    return (
        <div className="MessageCard fedeIn-animation">
            <p className="MessageCard__text">{data.text}</p>
            <ul className="MessageCard__tags">
                {renderTags}
            </ul>
            <span className="MessageCard__time">
                {date}
            </span>
        </div>
    )
}

export default MessageCard;