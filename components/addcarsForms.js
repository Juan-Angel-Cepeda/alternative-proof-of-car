import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';

const AddcarsForms = () => {

  const formikAddCar = useFormik({
    initialValues: {
      SerialNumber: "a345kfd98lolai" ,
      Brand: "Toyota",
      Year: 2018,
      Model: "Corola",
      Type: 1,
      Color: "Green",
      MotorType: "4.0",
      FuelCapacity: 2.0,
    },
    validationSchema: Yup.object({
      SerialNumber: Yup.string().required('El numero de serie es necesario'),
      Brand: Yup.string().required("El campo es necesario"),
      Year: Yup.number().required("El campo es necesario"),
      Model: Yup.string().required("El campo es necesario"),
      Type: Yup.number().required('El campo es necesario'),
      Color: Yup.string().required('el campo es necesario'),
      MotorType: Yup.string().required('el campo es necesario'),
      FuelCapacity: Yup.number().required('El campo es necesario')
    }),
    onSubmit: async valores => {
      try {
        const res = await axios.post('/api/cars',valores);
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Creado',
          text: `El auto se ha creado exitosamente`
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text:  `Algo ha salido mal`,
          confirmButtonColor: '#ef4444'
        });
      }
      
    }
  })


  return (
    <div className="w-full ">
        <form onSubmit={formikAddCar.handleSubmit} className = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='lg:flex'>
              <div className='lg:w-2/5 md:w-2/5 w-full mb-2 lg:ml-0 ml-2'>
                <label htmlFor='serialNumber'>Numero de Serie: </label>
                <input type="text" name='SerialNumber' id='SerialNumber' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.SerialNumber}  className="
                shadow border rounded py-2 px-3 w-full text-gray-700"></input>
                {
                  formikAddCar.errors.SerialNumber && formikAddCar.touched.SerialNumber ? (
                    <div>{formikAddCar.errors.serialNumber}</div>
                  ): null
                }
              </div>

              <div className='lg:w-2/5 md:w-2/5 w-full ml-2'>
                <label htmlFor='brand'>Marca: </label>
                <input type="text" name='Brand' id='Brand' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.Brand} className="
                shadow border rounded py-2 px-3 w-full text-gray-700"></input>
              </div>

              <div className='lg:w-1/5 md:w-1/5 w-full ml-2'>
               <label htmlFor='year'>Año: </label>
                <input type="text" name='Year' id='Year' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.Year} className="
                shadow border rounded py-2 px-3 text-gray-700 w-full"></input>

              </div>
            </div>
            <div className='lg:flex'>
              <div className='lg:w-1/5 md:w-1/5 w-full lg:ml-0 ml-2'>
                <label htmlFor='model'>Modelo: </label>
                <input type="text" name='Model' id='Model' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.Model} className="
                shadow border rounded py-2 px-3 text-gray-700 w-full"></input>
              </div>
              <div className='lg:w-1/5 md:w-1/5 w-full ml-2'>
                <label htmlFor='type '>Tipo: </label>
                <input type="number" name='Type' id='Type' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.Type} className="
                shadow border rounded py-2 px-3 text-gray-700 w-full"></input>
              </div>
              <div className='lg:w-1/5 md:w-1/5 w-full ml-2'>
                <label htmlFor='color'>Color: </label>
                <input type="text" name='Color' id='Color' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.Color} className="
                shadow border rounded py-2 px-3 text-gray-700 w-full"></input>
              </div>
              <div className='lg:w-1/5 md:w-1/5 w-full ml-2'>
                <label htmlFor='motorType'>Tipo de motor: </label>
                <input type="text" name='MotorType' id='MotorType' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.MotorType} className="
                shadow border rounded py-2 px-3 text-gray-700 w-full"></input>
              </div>
              <div className='lg:w-1/5 md:w-1/5 w-full ml-2'>
                <label htmlFor='fuelCapacity'>Capacidad: </label>
                <input type="number" name='FuelCapacity' id='FuelCapacity' onChange={formikAddCar.handleChange} onBlur={formikAddCar.handleBlur} value={formikAddCar.values.FuelCapacity} className="
                shadow border rounded py-2 px-3 text-gray-700 w-full"></input>
              </div>
            </div>
            <div className='flex justify-center text-center mt-5'>
            <button type='submit' className='bg-blue-500 px-5 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white'>Guardar Auto</button>
            </div>   
        </form>
    </div>
  )
}

export default AddcarsForms;