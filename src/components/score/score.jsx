import "./score.css"
import logo from "../../../public/rock-paper-scissors-master/images/logo.svg"

export default function Score({score, dark}){
    return(
        <div className={`Score ${dark === true ? "" : "dark"}`}>
            <img className={`ScoreImg ${dark === true ? "" : "dark"}`} src={logo} alt="" />
            <div className={`ScoreDiv ${dark === true ? "" : "dark"}`}>
                <span className={`ScoreText ${dark === true ? "" : "dark"}`}>SCORE</span>
                <span className={`ScoreNombre ${dark === true ? "" : "dark"}`}>{score}</span>
            </div>
        </div>
    )
}