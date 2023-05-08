import React from 'react'
import Header from './Header'
import logotipo from './../img/logotipo.avif'
import imagen1 from './../img/imagen1.jpg'

const Home = () => {
  return (
    <div>
        <Header/>
        <h1 className='titulo'>Barberia Man Cut</h1> 
        <section className='cuerpo-home'>
          <section className='texto-home'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic nesciunt quo obcaecati quisquam at, a eveniet, quae, tempora deserunt fuga aspernatur consequatur dolorum dolores? Cum non ducimus quo veritatis!z Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quas molestias ullam recusandae neque animi, nesciunt incidunt nam iure, odio doloribus sint, dolore dolores modi asperiores deserunt saepe! Possimus, corrupti.
            </p>
            <img src={imagen1} alt="img"/>
          </section>
          <img src={logotipo} alt="img"/>
        </section>
    </div>
  )
}

export default Home