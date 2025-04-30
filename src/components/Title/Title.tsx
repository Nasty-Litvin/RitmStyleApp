import { TitleProps } from './types';

import './style.scss';

const Title = ({textTitle}: TitleProps) => {
    return (
        <div className="title">
            <div className="title__wrapper">{textTitle}</div>
        </div>
    );
}
 
export default Title;