import { LineCostProps } from './types';
import './style.scss'

const LineCost = ({name, amount, currency}: LineCostProps) => {
    return ( 
        <div className="line-cost">
            <div className="line-cost__wrapper">
                <div className="line-cost__name">
                    {name}
                </div>
                <div className="line-cost__price">
                    <span className="line-cost__amount">{amount}</span>
                    <span className="line-cost__currency">{currency}</span>
                </div>
            </div>
        </div>
     );
}
 
export default LineCost;