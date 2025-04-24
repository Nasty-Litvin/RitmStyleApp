import { TitleProps } from './types';

import './style.scss';

const Title = ({textTitle}: TitleProps) => {
    return (
        <div className="title">{textTitle}</div>
    );
}
 
export default Title;