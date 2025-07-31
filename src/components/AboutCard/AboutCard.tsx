import { AboutCardProps } from './types';

import './style.scss';

const AboutCard = ({title, subtitle, reverse}: AboutCardProps) => {
    return (
        <div className="about-card">
            <div className="about-card__wrapper">
                {!reverse ? (
                    <>
                        <div className="about-card__body">
                            <div className="about-card__title">{title}</div>
                            <div className="about-card__subtitle">
                                {subtitle.map((item, index) => (
                                    <div className="about-card__subtitle-item" key={index}>{item}</div>
                                ))}
                            </div>
                        </div>
                        <div className="about-card__img"></div>
                    </>
                ) : (
                    <>
                    <div className="about-card__img"></div>
                    <div className="about-card__body">
                        <div className="about-card__title">{title}</div>
                        <div className="about-card__subtitle">
                            {subtitle.map((item, index) => (
                                <div className="about-card__subtitle-item" key={index}>{item}</div>
                            ))}
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}
 
export default AboutCard;