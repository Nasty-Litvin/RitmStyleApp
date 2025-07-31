import Card from '../Card/Card';
import Line from '../Line/Line';
import './style.scss'

const cardData = [
    {
        "id": 1,
        "title": "Бассейн WorkClass",
        "textBtn": "Записаться на сеанс",
        "cover": "#018ABE",
        "content": [
            {
                "id": 1,
                "icon": "/location/location.svg",
                "name": "Невский 140"
            },
            {
                "id": 2,
                "icon": "/location/metro.svg",
                "name": "м. Спасская"
            },             {
                "id": 3,
                "icon": "/location/note.svg",
                "name": "Запись по договоренности"
            }
        ]
    }, 
    {
        "id": 2,
        "title": "Бассейн На 'Гороховой'",
        "textBtn": "Записаться на сеанс",
        "cover": "#018ABE",
        "content": [
            {
                "id": 1,
                "icon": "/location/location.svg",
                "name": "3-й проезд Иванова"
            },
            {
                "id": 2,
                "icon": "/location/metro.svg",
                "name": "м. Крестовский остров"
            },             {
                "id": 3,
                "icon": "/location/note.svg",
                "name": "Запись по договоренности"
            }
        ]
    },
]


const Location = () => {
    return (
        <div className="location">
            <div className="location__wrapper">
                <div className="location__map-wrapper">
                    <div className="location__map">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af2fe7b3e569a6fdfb6c9459eda6be0f350094b0b9beb6dca7976c13c5cd06aa0&amp;source=constructor" 
                        width="100%" 
                        height="100%"></iframe>
                    </div>
                </div>

                <div className="location__cards-wrapper">
                    <div className="location__cards">
                        {cardData.map((item) => (
                            <Card key={item.id} title={item.title} btn={item.textBtn} cover={item.cover}>
                                {item.content.map((i) => (
                                    <Line key={i.id} image={i.icon} name={i.name}/>
                                ))}
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Location;