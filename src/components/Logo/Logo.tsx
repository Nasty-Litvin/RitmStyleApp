import './style.scss';

const Logo = () => {
    return (
        <div className="logo">
            <a className="logo__link" href="#">
                <img className="logo__img" src="/logo.svg" alt="logo" />
            </a>
        </div>
    );
}
 
export default Logo;