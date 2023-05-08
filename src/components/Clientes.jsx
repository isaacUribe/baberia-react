import React from 'react'
import Header from './Header'
import GaleriaClientes from './GaleriaClientes'
import imagen5 from "./../img/img-clientes/imagen5.jpg"

const Clientes = () => {
  return (
    <div>
        <Header/>
        <img src={imagen5}  className='img-clientes'/>
        <h1 className='titulo'>
          Nuestros Clientes
        </h1>
        <h2>Nuestros siempre se ven elegantes y alegres con su nuevo corte</h2>
        <GaleriaClientes/>
    </div>
  )
}

export default Clientes