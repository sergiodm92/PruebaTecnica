import React from "react";
import { useState } from "react";
import formstyle from "./styleform.module.scss"
const formData = {
    Name: "",
    Age:"",
    City:""
    };

export default function Form(){

    const [form, setForm] = useState(formData);
    const[bandera,setBandera] = useState(0)
    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
            });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    console.log(form)
    if(form.Name!=="" && form.Age!=="" && form.City!==""){
        setBandera(1)
    }
    else{alert("debe completar todos los campos")}
    }

    return(
        <div className={formstyle.conteiner}>
            <div className={formstyle.form} >
            <p className={formstyle.title}>Form</p>
            <form>
                <p>Name</p>
                <input type="text"  name= "Name" onChange={handleChange} placeholder="💬Insert Name" />
                <p>Age</p>
                <input type="text"  name= "Age" onChange={handleChange} placeholder="💬Insert Age"/>
                <p>City</p>
                <input type="text"  name= "City" onChange={handleChange} placeholder="💬Insert City"/>
                
            </form>
            <br></br>
            <button onClick={handleSubmit}>submit</button> 
            {bandera===1?
            <div className={formstyle.result}>
            <br></br>
            <p>Name = {form.Name}</p>
            <p>Age = {form.Age}</p>
            <p>City = {form.City}</p>
            </div>
            : <p></p>
            }
            </div>

        </div>
    )

}

