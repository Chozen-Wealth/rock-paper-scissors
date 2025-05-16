import { useState } from "react"
import "./modal.css"
import imgRules from "../../../public/rock-paper-scissors-master/images/image-rules.svg"
import closeRules from "../../../public/rock-paper-scissors-master/images/icon-close.svg"

export default function Modal({dark, setDark}){

    const [active, setActive] = useState(false)

    let btnActive = ()=>{
        if (active) {
            setActive(false)
        }
        else {
            setActive(true)
        }
    }

    let modal = ()=>{
        return(
            <>
            <div onClick={()=> setActive(false)} className="bgModal">
            </div>
                <div  className="ModalRules">
                    <img onClick={()=> setActive(false)} id="closeRules" className="closeRules" src={closeRules} alt="" />
                    <img className="imgRules" src={imgRules} alt="" />
                </div>
            </>
        )
    }

    return(
        <div className="Modal">
            {active === true ? modal() : "" }
            {dark === true ? (<button onClick={()=> setDark(false)} className="btnMode btnLight">Light Mode</button>):(<button onClick={()=> setDark(true)} className="btnMode btnDark">Dark Mode</button>) }
            <button onClick={()=> btnActive()} className={`btnRules ${dark === true ? "" : "dark"}`}>RULES</button>
            
        </div>
    )
}