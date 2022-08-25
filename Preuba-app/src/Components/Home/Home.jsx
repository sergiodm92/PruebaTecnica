import React from "react";
import {useNavigate} from "react-router-dom"
import homeStyle from "./homestyle.module.scss"

export default function Home(){
const navigate = useNavigate() 
return(
    <div className={homeStyle.conteiner}>
    <div className={homeStyle.buttonform}>
    <button onClick={()=> navigate("/form")}>FORM</button>
    </div>
    <div className={homeStyle.buttontable}>
    <button onClick={()=> navigate("/table")}>TABLE</button>
    </div>
    </div>
)

}