import "./score.css"
import logo from "../../../public/rock-paper-scissors-master/images/logo.svg"

export default function Score({score}){
    return(
        <div className="Score">
            <img className="ScoreImg" src={logo} alt="" />
            <div className="ScoreDiv">
                <span className="ScoreText">SCORE</span>
                <span className="ScoreNombre">12</span>
            </div>
        </div>
    )
}