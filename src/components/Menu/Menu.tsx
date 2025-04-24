import MenuItem from '../MenuItem/MenuItem';
import MenuData from '../../data/menu.json';
import './style.scss';

const Menu = () => {
    return (
        <div>
            <nav className="menu">
                <ul className="menu__list">
                    {MenuData.map((item) => (
                        <MenuItem 
                            key={item.id}
                            textMenu={item.name} 
                        />
                    ))}
                    
                </ul>
            </nav>
        </div>
    );
}
 
export default Menu;