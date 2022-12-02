/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Menu from '../components/Menu';

export default function Home() {  
  return (
    <div className='h-screen overflow-hidden'>
      <Menu/>
      <div className='h-full borde flex items-center justify-center mb-100'>
        <div className=''>
          <img src="./index.gif" className='h-96' alt="" />
        </div>
        <div className='w-1/2 flex  mr-10'>
          <div className='ml-12'>
            <div className='flex flex-col justify-center text-center'>
              <h3 className='font-extrabold text-2xl tracking-wider'>La información relacionada a padron Vehícular en un solo lugar</h3>
              <h3 className='font-extrabold text-2xl tracking-wider'>Desde el principio.</h3>
            </div>
            <div className='mt-5 flex justify-center'>
              <p className='text-lg text-cyan-600 font-bold tracking-wide'>― Que se hace? ―</p>
            </div>
              <p className='mt-5 text-center tracking-tight'>
                Proof Of Car permite consultar los datos de un vehículo. Consulta los dueños, reparaciones, seguros y accidents
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
