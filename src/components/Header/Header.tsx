import { useState } from 'react';
import BaseModal from '../BaseModal/BaseModal';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './style.scss';

const content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Magnam illo nihil quo eveniet obcaecati! Doloribus, 
               iste quasi nisi vel quam rerum labore. Nisi labore 
               perferendis consequuntur sequi ipsum porro assumenda.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Magnam illo nihil quo eveniet obcaecati! Doloribus, 
               iste quasi nisi vel quam rerum labore. Nisi labore 
               perferendis consequuntur sequi ipsum porro assumenda.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Magnam illo nihil quo eveniet obcaecati! Doloribus, 
               iste quasi nisi vel quam rerum labore. Nisi labore 
               perferendis consequuntur sequi ipsum porro assumenda.`

const isBtn = true;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handlerOpen = () => setIsOpen(true)

    const handlerClose = () => setIsOpen(false)
    

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__menu">
                    <Menu />
                </div>
                <div className="header__btn">
                    <Button textBtn="Записаться на сеанс" onClick={handlerOpen}/>
                </div>
            </div>
            <BaseModal open={isOpen} handleClose={handlerClose} titleModal='Hello' content={content} btn={isBtn}/>
        </header>
    );
}
 
export default Header;