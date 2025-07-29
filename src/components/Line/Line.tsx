import { LineProps } from "./types";

const Line = ({image, name}: LineProps) => {
    return (
        <div className="line">
            <div className="line__wrapper">
               <div className="line__img">
                    <img src={image} alt="#" />
               </div>
               <div className="line__name">{name}</div>
            </div>
        </div>
    );
}
 
export default Line;