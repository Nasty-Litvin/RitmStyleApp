import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__menu">
                    <Menu />
                </div>
                <div>
                    <Button textBtn="Записаться на сеанс" />
                </div>
            </div>
        </header>
    );
}
 
export default Header;