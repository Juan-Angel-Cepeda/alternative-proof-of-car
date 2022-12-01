import React from 'react'
import axios from 'axios';

export function AddcarsForms(){

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/cars',{
      SerialNumber: "kfaks" ,
      Brand: "toyota",
      Year: 1990,
      Model: "Cambri",
      Type: 2,
      Color: "green",
      MotorType: "4 cil",
      FuelCapacity: 2.0,
      idInsurance: 1,
      IdOwner_Owner: 1,
      idLicence_Licence: 1,
      idService_Service: 1
    })
    console.log(res);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor='serialNumber'>Numero de Serie: </label>
            <input type="text" name='serialNumber'></input>

            <label htmlFor='brand'>Marca: </label>
            <input type="text" name='brand' id='brand'></input>

            <label htmlFor='year'>Año: </label>
            <input type="text" name='year' id='year'></input>

            <label htmlFor='model'>Modelo: </label>
            <input type="text" name='model' id='model'></input>

            <label htmlFor='type '>Tipo: </label>
            <input type="number" name='type' id='type'></input>

            <label htmlFor='color'>Color: </label>
            <input type="text" name='color' id='color'></input>

            <label htmlFor='motorType'>Tipo de motor: </label>
            <input type="text" name='motorType' id='motorType'></input>

            <label htmlFor='fuelCapacity'>Capacidad: </label>
            <input type="number" name='fuelCapacity' id='fuelCapacity'></input>

            <button>Guardar Auto</button>
        </form>
    </div>
  )
}
