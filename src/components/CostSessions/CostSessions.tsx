import LineCost from '../LineCost/LineCost';
import Title from '../Title/Title';
import './style.scss'

const costSessions = 'Стоимость сеансов';
const amountsData = [
    {
        "id": 1,
        "name": "RitmStyle с погружением",
        "amount": 1000,
        "currency": "р."
    },
        {
        "id": 2,
        "name": "Абонемент на RitmStyle",
        "amount": 5500,
        "currency": "р."
    },
        {
        "id": 3,
        "name": "RitmStyle для пар",
        "amount": 6000,
        "currency": "р."
    },
        {
        "id": 4,
        "name": "RitmStyle для беременных",
        "amount": 13500,
        "currency": "р."
    },
        {
        "id": 5,
        "name": "RitmStyle +  фотосессия",
        "amount": 11500,
        "currency": "р."
    }
];

const CostSessions = () => {
    return (
        <div className="cost-sessions">
            <div className="cost-sessions__wrapper">
                <div className="cost-sessions__title">
                    <Title textTitle={costSessions} />
                </div>
                <div className="cost-sessions__body">
                    <div className="cost-sessions__price">
                        <div className="cost-sessions__lines">
                            {amountsData.map((item) => (
                                <LineCost key={item.id} name={item.name} amount={item.amount} currency={item.currency}/>
                            ))}    
                        </div>
                    </div>
                    <div className="cost-sessions__certificate">
                        <div className="cost-sessions__certificate-img-wrapper">
                            <img  className="cost-sessions-img" src="/costSessions/certificate.png" alt="#" />
                        </div>
                        <div className="cost-sessions__gift-certificate">Подарочный сертификат </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CostSessions;