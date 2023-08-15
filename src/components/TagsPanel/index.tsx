import TagsBox from "./components/TagsBox";
import TagsSlider from "./components/TagsSlider";
import TagsInput from "./components/TagsInput";
import './index.css';

const TagsPanel: React.FC = () => {
    return (
        <div className="TagsPanel">
            <div className="TagsPanel__slider">
                <TagsSlider />
            </div>
            <div className="TagsPanel__body">
                <TagsBox />
                <TagsInput />
            </div>
        </div>
    )
}

export default TagsPanel;