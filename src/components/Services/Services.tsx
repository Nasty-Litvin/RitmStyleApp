import Card from '../Card/Card';
import Title from '../Title/Title';
import './style.scss';

const servicesTitle = 'Сеансы RitmStyle';
const cardData = [
    {
        "id": 1,
        "title": "Стандартный RitmStyle",
        "textBtn": "",
        "coverUrl": "/services/cover.png"
    }, 
    {
        "id": 2,
        "title": "RitmStyle для пар",
        "textBtn": "",
        "coverUrl": "/services/cover.png"
    },
    {
        "id": 3,
        "title": "RitmStyle с полным погружением под воду",
        "textBtn": "",
        "coverUrl": "/services/cover.png"
    },
    {
        "id": 4,
        "title": "RitmStyle для беременных",
        "textBtn": "",
        "coverUrl": "/services/cover.png"
    },
    {
        "id": 5,
        "title": "RitmStyle + красочная подводная фотосессия",
        "textBtn": "",
        "coverUrl": "/services/cover.png"
    }
]


const Services = () => {
    return (
        <div className="services">
            <div className="services__wrapper">
                <div className="services__title">
                    <Title textTitle={servicesTitle}/>
                </div>
                <div className="services__cards">
                    {cardData.map((item) => (
                        <Card 
                            key={item.id}
                            title={item.title}
                            btn={item.textBtn}
                            cover={item.coverUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Services;