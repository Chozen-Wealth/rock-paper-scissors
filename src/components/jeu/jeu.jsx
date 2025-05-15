import "./jeu.css"
import triangle from "../../../public/rock-paper-scissors-master/images/bg-triangle.svg"
import paper from "../../../public/rock-paper-scissors-master/images/icon-paper.svg"
import scissors from "../../../public/rock-paper-scissors-master/images/icon-scissors.svg"
import rock from "../../../public/rock-paper-scissors-master/images/icon-rock.svg"

export default function Jeu(){
    return(
        <div className="Jeu">
            <div className="JeuChoix">
                <div className="divPaper"><img className="paper" src={paper} alt="" /></div>
                <div className="divScissors"><img className="scissors" src={scissors} alt="" /></div>
                <div className="divRock"><img className="rock" src={rock} alt="" /></div>
                <img className="triangle" src={triangle} alt="" />
            </div>
        </div>
    )
}