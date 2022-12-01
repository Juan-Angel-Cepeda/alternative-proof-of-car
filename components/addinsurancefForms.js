import React from 'react'

export default function AddinsurancefForms() {
  return (
    <div>
        <form>
            <label htmlFor='idInsurance'>IdSeguro: </label>
            <input type="number" name='idInsurance'></input>

            <label htmlFor='InsuranceName'>Nombre de aseguradora: </label>
            <input type="text" name='InsuranceName' id='InsuranceName'></input>

            <label htmlFor='Phone'>Telefono: </label>
            <input type="tel" name='Phone' id='Phone'></input>

            <label htmlFor='Address'>Direccion: </label>
            <input type="text" name='Address' id='Address'></input>

            <label htmlFor='Amount'>Monto Asegurado: </label>
            <input type="number" name='Amount' id='Amount'></input>

            <label htmlFor='StartDate'>Inicio covertura: </label>
            <input type="date" name='StartDate' id='StartDate'></input>

            <label htmlFor='EndDate'>Termino covertura: </label>
            <input type="date" name='EndDate' id='EndDate'></input>

            <label htmlFor='InsuranceType'>Tipo de Seguro: </label>
            <input type="text" name='InsuranceType' id='InsuranceType'></input>

        </form>
    </div>
  )
}
