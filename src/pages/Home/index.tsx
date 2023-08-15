import MessagesPanel from "components/MessagesPanel";
import TagsPanel from "components/TagsPanel";
import './index.css';

const Home: React.FC = () => {
    return (
        <main className="container">
            <div className="Home">
                <TagsPanel />
                <MessagesPanel />
            </div>
        </main>
    )
}

export default Home;