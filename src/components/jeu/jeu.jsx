import "./jeu.css"
import triangle from "../../../public/rock-paper-scissors-master/images/bg-triangle.svg"
import paper from "../../../public/rock-paper-scissors-master/images/icon-paper.svg"
import scissors from "../../../public/rock-paper-scissors-master/images/icon-scissors.svg"
import rock from "../../../public/rock-paper-scissors-master/images/icon-rock.svg"
import { useState } from "react"

export default function Jeu({points, setPoints, dark}){

    const [start, setStart] = useState(false)

    const [PC, setPC] = useState("")
    const [moi, setMoi] = useState("")
    const [win, setWin] = useState(false)

    let Choix = (choix)=>{
        const pcChoix = Math.floor(Math.random() * 3 + 1) 
        let choixPc = pcChoix === 1 ? "paper" : pcChoix === 2 ? "scissors" : "rock";

        console.log(`Choix du PC = ${choixPc}`)
        console.log(`Choix du Joueur = ${choix}`)

        setMoi(choix)
        setPC(choixPc)
        setStart(true)

        if (
            (choix === "rock" && choixPc === "scissors") ||
            (choix === "paper" && choixPc === "rock") ||
            (choix === "scissors" && choixPc === "paper")
        ) {
            setWin(true)
            setPoints(points + 1)
        } else if (
            (choix === "rock" && choixPc === "paper") ||
            (choix === "paper" && choixPc === "scissors") ||
            (choix === "scissors" && choixPc === "rock")
        ) {
            setWin(false)
            setPoints(points - 1)
        } else if (choix === choixPc) {
            setWin(true)
        }
    }

    return(
        <div className="Jeu">
            {start === false ? (<div className="JeuChoix">
                <div className="JeuChoixTop">
                    <div onClick={()=> Choix("paper")} className="divPaper"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`paper ${dark === true ? "" : "dark"}`} src={paper} alt="" /></div></div>
                    <div onClick={()=> Choix("scissors")} className="divScissors"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`scissors ${dark === true ? "" : "dark"}`} src={scissors} alt="" /></div></div>
                </div>
                <div className="JeuChoixBot">
                    <div onClick={()=> Choix("rock")} className="divRock"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`rock ${dark === true ? "" : "dark"}`} src={rock} alt="" /></div></div>
                </div>
                <img className="triangle" src={triangle} alt="" />
            </div>)
            :
            (
                <div className="JeuStart">
                    <div className="divJeuStart">
                        <div className={`divMonChoix ${dark === true ? "" : "dark"}`}>
                            <span>YOU PICKED</span>
                            <div className="mesChoix">
                                {moi === PC ? "" : win === true ? (<div className={`win1 ${dark === true ? "" : "dark"}`}><div className={`win2 ${dark === true ? "" : "dark"}`}></div></div>): "" }
                                
                                {moi === "paper" ? (<div className="divPaper"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`paper ${dark === true ? "" : "dark"}`} src={paper} alt="" /></div></div>) : ""}
                                {moi === "scissors" ? (<div className="divScissors"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`scissors ${dark === true ? "" : "dark"}`} src={scissors} alt="" /></div></div>) : ""}
                                {moi === "rock" ? (<div className="divRock"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`rock ${dark === true ? "" : "dark"}`} src={rock} alt="" /></div></div>) : ""}
                            </div>
                        </div>
                        <div className={`divJeuResultat ${dark === true ? "" : "dark"}`}>
                            {win === true ? (
                                moi === PC ? (<span>DRAW.</span>) : (<span>YOU WIN !</span>)
                            ) : (
                                <span>YOU LOST...</span>
                            )}
                            <button onClick={()=> setStart(false)} className={`btnPlayAgain ${dark === true ? "" : "dark"}`}>PLAY AGAIN</button>
                        </div>
                        <div className={`divPcChoix ${dark === true ? "" : "dark"}`}>
                            <span>THE HOUSE PICKED</span>
                            <div className="mesChoix">
                                {win === false ? (<div className={`win1 ${dark === true ? "" : "dark"}`}><div className={`win2 ${dark === true ? "" : "dark"}`}></div></div>): ""}
                                {PC === "paper" ? (<div className="divPaper"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`paper ${dark === true ? "" : "dark"}`} src={paper} alt="" /></div></div>) : ""}
                                {PC === "scissors" ? (<div className="divScissors"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`scissors ${dark === true ? "" : "dark"}`} src={scissors} alt="" /></div></div>) : ""}
                                {PC === "rock" ? (<div className="divRock"><div className={`divInner ${dark === true ? "" : "dark"}`}><img className={`rock ${dark === true ? "" : "dark"}`} src={rock} alt="" /></div></div>) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}