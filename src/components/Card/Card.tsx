import Button from '../Button/Button';
import Title from '../Title/Title';
import { CardProps } from './types';

import './styles.scss';

const Card = ({title, btn, coverImg, cover, children}: CardProps) => {
    const backGroundStyle = coverImg 
    ? {background: `url(${coverImg}) 50%/auto 100% no-repeat`} :
    cover 
        ? {background: cover} 
        : {};

        console.log('backGroundStyle====', backGroundStyle)
    return (
        <div className="card">
            <div className="card__wrapper" style={backGroundStyle}>

                {title && (
                    <div className="card__title">
                        <Title textTitle={title} />
                    </div>
                )}

                <div className="card__content">
                    {children}
                </div>

                {btn && (
                    <div className="card__btn">
                        <Button textBtn={btn}/>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Card;