import React from 'react'

export default function addaccidentForms() {
  return (
    <div>
        <form>
            <label htmlFor='idAccident'>Id siniestro: </label>
            <input type="number" name='idAccident'></input>

            <label htmlFor='idService'>Id servicio: </label>
            <input type="number" name='idService' id='idService'></input>

            <label htmlFor='Description'>Description: </label>
            <input type="text" name='Description' id='Description'></input>
            
        </form>
    </div>
  )
}
