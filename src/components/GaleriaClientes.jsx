import React from 'react'
import imagen1 from "./../img/img-clientes/imagen1.jpg"
import imagen2 from "./../img/img-clientes/imagen2.jpg"
import imagen3 from "./../img/img-clientes/imagen4.jpg"
import imagen4 from "./../img/img-clientes/imagen3.jpg"

const clientes = [
    {
        nombre: "George",
        img: imagen1,
        tiempo: "El lleva 5 años como nuestro cliente",

    },
    {
        nombre: "Harry",
        img: imagen2,
        tiempo: "El lleva 3 años como nuestro cliente"
    },
    {
        nombre: "Noha",
        img: imagen3,
        tiempo:"El lleva 10 años como nuestro cliente"
    },
    {
        nombre: "Thomas",
        img: imagen4,
        tiempo: "El lleva 9 meses como nuestro cliente"
    }
]

const GaleriaClientes = () => {
  return (
    <div className='card-cliente'>
        {
            clientes.map((cliente)=>(
                <section>
                    <img src={cliente.img}/>
                    <h3>{cliente.nombre}</h3>
                    <p>{cliente.tiempo}</p>
                </section>
            ))
        }
    </div>
  )
}

export default GaleriaClientes