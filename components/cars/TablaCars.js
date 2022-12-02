import React from 'react'
import axios from 'axios';


const TablaCars = ({cars}) => {
    return(
        <div className='xl:grid grid-cols-4 gap-4'>
            {cars.map(car => (
            <div className='bg-slate-200 xl:mb-0 mb-2 rounded-lg p-5' key={car.id}>
                <div className='flex mb-2'>
                    <p className='text-base'>Numero de serie: <span className='text-xl font-bold' >{car.NoSerie}</span></p>
                </div>
                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Marca: <span className='font-normal' >{car.brand}</span></p>
                </div>
                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Modelo: <span className='font-normal' >{car.Model}</span></p>
                </div>
                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Tipo: <span className='font-normal' >{car.type}</span></p>
                </div>
                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Color: <span className='font-normal' >{car.Color}</span></p>
                </div>
                
                <div className='flex mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 icon icon-tabler icon-tabler-engine" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 10v6" /> <path d="M12 5v3" /> <path d="M10 5h4" /> <path d="M5 13h-2" /> <path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2v-2h-3v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6z" /> </svg>
                    <span className='font-normal ml-2' >{car.motor_type}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 ml-2' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M3 19V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A.997.997 0 0 1 22 9v9a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1zM5 5v6h7V5H5z"/> </g> </svg>
                    <span className='font-normal ml-2' >{car.fuel_capacity}</span>
                </div>
                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Aseguradora: <span className='font-normal' >{car.idInsurance}</span></p>
                </div>

                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Dueño: <span className='font-normal' >{car.IdOwner_Owner}</span></p>
                </div>

                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Licencia: <span className='font-normal' >{car.idLicence_Licence}</span></p>
                </div>

                <div className='flex mb-2'>
                    <p className='text-base font-bold'>Servicio: <span className='font-normal' >{car.idService_Service}</span></p>
                </div>
            </div>
            ))}
        </div>
    )
}


export default TablaCars;