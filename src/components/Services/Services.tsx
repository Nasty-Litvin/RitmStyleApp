import Title from '../Title/Title';
import './style.scss';

const servicesTitle = 'Сеансы RitmStyle';

const Services = () => {
    return (
        <div className="services">
            <div className="services__wrapper">
                <div className="services__title">
                    <Title textTitle={servicesTitle}/>
                </div>
            </div>
        </div>
    );
}
 
export default Services;