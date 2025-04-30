import Title from '../Title/Title';
import './style.scss';

let textTitle = 'Укрепление здоровья'

const FirstScreen = () => {
    return (
        <div className="first-screen">
            <div className="first-screen__title">
                <Title textTitle={textTitle} />
            </div>
            <div className="first-screen__subtitle">Акватерапия
            RitmStyle</div>
        </div>
    );
}
 
export default FirstScreen;