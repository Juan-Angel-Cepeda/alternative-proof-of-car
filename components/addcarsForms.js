import React, { useState } from 'react';
import axios from 'axios';

export function AddcarsForms(){

  const [car,setCar] = useState({
      SerialNumber: "" ,
      Brand: "",
      Year: 1111,
      Model: "",
      Type: 1,
      Color: "",
      MotorType: "",
      FuelCapacity: 2.0,
      idInsurance: 1,
      IdOwner_Owner: 1,
      idLicence_Licence: 1,
      idService_Service: 1
  })

  const handleChange = ({target:{name,value}}) =>
    setCar({...car,[name]:value});

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/cars',car);
    console.log(res);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor='serialNumber'>Numero de Serie: </label>
            <input type="text" name='serialNumber' onChange={handleChange}></input>

            <label htmlFor='brand'>Marca: </label>
            <input type="text" name='brand' id='brand' onChange={handleChange}></input>

            <label htmlFor='year'>Año: </label>
            <input type="text" name='year' id='year' onChange={handleChange}></input>

            <label htmlFor='model'>Modelo: </label>
            <input type="text" name='model' id='model' onChange={handleChange}></input>

            <label htmlFor='type '>Tipo: </label>
            <input type="number" name='type' id='type' onChange={handleChange}></input>

            <label htmlFor='color'>Color: </label>
            <input type="text" name='color' id='color' onChange={handleChange}></input>

            <label htmlFor='motorType'>Tipo de motor: </label>
            <input type="text" name='motorType' id='motorType' onChange={handleChange}></input>

            <label htmlFor='fuelCapacity'>Capacidad: </label>
            <input type="number" name='fuelCapacity' id='fuelCapacity' onChange={handleChange}></input>

            <button>Guardar Auto</button>
        </form>
    </div>
  )
}
