import { ButtonProps } from './types';
import './style.scss';

const Button = ({textBtn, color}: ButtonProps) => {
    return (
        <div className="btn">
            <button className={color === 'white' ? 'btn__color btn__color--white' : 'btn__color'}>{textBtn}</button>
        </div>
    );
}
 
export default Button;