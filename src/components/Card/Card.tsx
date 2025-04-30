import Button from '../Button/Button';
import Title from '../Title/Title';
import { CardProps } from './types';

import './styles.scss';

const Card = ({title, btn, cover}: CardProps) => {
    return (
        <div className="card">
            <div className="card__wrapper" style={{background: `url(${cover}) 50%/auto 100% no-repeat`}}>
                {btn && (
                    <div className="card__btn">
                    <Button textBtn={btn}/>
                </div>
                )}
                <div className="card__title">
                    <Title textTitle={title} />
                </div>
            </div>
        </div>
    );
}
 
export default Card;