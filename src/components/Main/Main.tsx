import About from '../About/About';
import CostSessions from '../CostSessions/CostSessions';
import FirstScreen from '../FirstScreen/FirstScreen';
import Services from '../Services/Services';
import Location from '../Location/Location';
import './style.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__first-screen">
                    <FirstScreen />
                </div>
                <div className="main__services">
                    <Services />
                </div>
                <div className="main__about">
                    <About />
                </div>
                <div className="main__cost-sessions">
                    <CostSessions />
                </div>
                <div className="main__location">
                    <Location />
                </div>
            </div>
        </main>
    );
}
 
export default Main;