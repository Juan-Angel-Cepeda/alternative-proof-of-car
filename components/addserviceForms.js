import React from 'react'

export default function AddserviceForms() {
  return (
    <div>
        <form>
            <label htmlFor='idService'>id Servicio: </label>
            <input type="number" name='idService'></input>

            <label htmlFor='Workshop'>Nombre del Taller: </label>
            <input type="text" name='Workshop' id='Workshop'></input>

            <label htmlFor='EntranceDate'>Fecha de Entrada: </label>
            <input type="date" name='EntranceDate' id='EntranceDate'></input>

            <label htmlFor='ExitDate'>Fecha de salida: </label>
            <input type="date" name='ExitDate' id='ExitDate'></input>

            <label htmlFor='Cost'>Costo del servicio: </label>
            <input type="number" name='Cost' id='Cost'></input>
            </form>
    </div>
  )
}
