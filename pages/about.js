import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';

const About = () => {
 
    return(
        <div className='h-screen'>
            <Menu/>
            <div className='lg:flex lg:p-16 md:p-16 sm:p-16 p-5 '>
                <div className='lg:center md:w-full mb-10'>
                    <h3 className='font-bold text-xl mb-2'>Sobre</h3>
                    <p className='mr-12 ml-2'>Toda la información relevante de los automoviles, descentralizada, confiable, inviolable, segura y accesible desde cualquier dispositivo sobre blockchain y web.</p>
                    
                    <p className='mr-12 ml-2'>La engorrosa papelería que desprende un automovil se acabó. Toda la información sobre los automoviles en blockchain disponible para aseguradoras, bancos, gobiernos y ciudadanos. Un solo sistema descentralizado, abierto a consulta, seguro e incorruptible.La modificación de los datos están sujetos al consentimiento del poseedor de la llave. Registra refacturaciones, siniestros, compra - venta de vehículos, todo con una perfecta trazabilidad de los datos.</p>
                    
                </div>
            </div>
        </div>
    );
}
export default About