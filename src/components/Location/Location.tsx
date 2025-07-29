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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5851632564067!2d30.314130315775364!3d59.93873298187643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f27.9!3m3!1m2!1s0x46963101f2d72a55%3A0x6972d2c6b40772de!2z0KHQtdC80LDRgtGL0Lkg0J_QsNC00LXRgdC60L7Qs9C-LCDQnNC-0YHQutCy0LAsINCR0L7Qu9C-0LvQsNCy0YHQutC40Lkg0LrQsNCy0YHQutC-0LU!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
                            width="100%"
                            height="400"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Санкт-Петербург"
                        />
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