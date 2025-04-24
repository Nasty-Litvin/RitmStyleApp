import FirstScreen from '../FirstScreen/FirstScreen';
import './style.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__first-screen">
                    <FirstScreen />
                </div>
            </div>
        </main>
    );
}
 
export default Main;