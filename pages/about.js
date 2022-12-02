import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';

const About = () => {
 
    return(
        <div className='h-screen'>
            <Menu/>
            <div className='lg:flex lg:p-16 md:p-16 sm:p-16 p-5 '>
                <div className='lg:center md:w-full mb-10'>
                    <h3 className='font-bold text-xl mb-2'>De que va?</h3>
                    <p className='mr-12 ml-2'>Toda la información relevante de los automoviles, accesible desde cualquier dispositivo en web.</p>
                    
                    <p className='mr-12 ml-2'>Toda la información sobre los automoviles en disponible para aseguradoras, bancos, gobiernos y ciudadanos. Un solo sistema de consulta. La modificación de los datos están sujetos al consentimiento del poseedor del vehículo y a su banco o aseguradora. Registra facturaciones, siniestros, compra - venta de vehículos</p>
                    
                </div>
            </div>
        </div>
    );
}
export default About