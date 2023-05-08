import React from 'react'
import Header from './Header'
import GaleriaProductos from './GaleriaProductos'

const Productos = () => {
  return (
    <div>
        <Header/>
        <h1 className='titulo'>
        Nuestros productos
        </h1>
        <h2 className='subtitulo'>
          Este es nuestro catalogo de cortes de cabello
        </h2>
        <GaleriaProductos />
    </div>
  )
}

export default Productos