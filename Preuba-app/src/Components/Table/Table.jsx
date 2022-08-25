import React from "react";
import tableStyle from "./tableStyle.module.scss"
//los datos se colocaron en un json independiente por una mejor practica de manejo de datos ya que estos
//pueden venir del back-end o de una base de datos 
const {data} = require("./data.json")


export default function Table(){

    return(
        <div className={tableStyle.conteiner}>
         <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Hobbie</th>
                </tr>
            </thead>
            <tbody>
                    {data.map((e,i) => {
                    
                        return (
                        <tr key={i}>
                            <td>{e.nombre}</td>
                            <td>{e.edad}</td>
                            <td>{e.carrera}</td>
                            <td>{e.hobbie}</td>
                        </tr>

            );
                })}

            </tbody>
        </table>

        </div>
    )
}

