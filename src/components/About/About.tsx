import AboutCard from '../AboutCard/AboutCard';
import Title from '../Title/Title';
import './style.scss';

const aboutTitle = 'Об RitmStyle';

const aboutData = [
    {
        "id": 1,
        "name": "RitmStyle массаж ",
        "description": [
            "RitmStyle массаж Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing. Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.",
            "Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.",
        ],
    },
    {
        "id": 2,
        "name": "RitmStyle гидротерапия",
        "description": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cras quis ac a non ut viverra turpis eget. Hendrerit quis pulvinar massa ipsum sem. Donec posuere nulla enim non neque etiam. Eros arcu, pulvinar penatibus luctus ridiculus sagittis vel nunc hac. Nisi, diam tincidunt dui viverra. Eget quis ultricies sem nunc risus senectus luctus ultricies. Enim feugiat pharetra pharetra et.",
            "Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.",
        ],
    }

]

const About = () => {
    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about__title">
                    <Title textTitle={aboutTitle}/>
                </div>
                <div className="about__cards">
                    {aboutData.map((item) => (
                        <AboutCard
                            key={item.id}
                            title={item.name}
                            subtitle={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default About;