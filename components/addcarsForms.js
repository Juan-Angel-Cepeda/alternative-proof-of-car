import React from 'react'

export default function addcarsForms() {
  return (
    <div>
        <form>
            <label htmlFor='SerialNumber'>Numero de Serie: </label>
            <input type="text" name='SerialNumber'></input>

            <label htmlFor='Brand'>Marca: </label>
            <input type="text" name='Brand' id='Brand'></input>

            <label htmlFor='Year'>Año: </label>
            <input type="text" name='Year' id='Year'></input>

            <label htmlFor='Model'>Modelo: </label>
            <input type="text" name='Model' id='Model'></input>

            <label htmlFor='Type '>Tipo: </label>
            <input type="number" name='Type' id='Type'></input>

            <label htmlFor='Color'>Color: </label>
            <input type="text" name='Color' id='Color'></input>

            <label htmlFor='MotorType'>Tipo de motor: </label>
            <input type="text" name='MotorType' id='MotorType'></input>

            <label htmlFor='FuelCapacity'>Capacidad: </label>
            <input type="number" name='FuelCapacity' id='FuelCapacity'></input>

        </form>
    </div>
  )
}
