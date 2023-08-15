import Logo from './assets/logo.png';
import './index.css';

const Header: React.FC = () => {
    return (
        <header className="Header">
            <div className='container'>
                <div className="Header__logo">
                    <img className="Header__logo-img" src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;