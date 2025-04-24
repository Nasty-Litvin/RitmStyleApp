import {MenuItemProps} from './types';
import './style.scss';

const MenuItem = ({textMenu}: MenuItemProps) => {
    return (
        <li className="menu-item">
            <a className="menu-item__link" href="#">{textMenu}</a>
        </li>
    );
}
 
export default MenuItem;