import React from 'react'

export default function addownerForms() {
  return (
    <div>        
        <form>
            <label htmlFor='idOwner'>Id Dueño: </label>
            <input type="number" name='idOwner'></input>

            <label htmlFor='FullName'>Nombre Completo: </label>
            <input type="text" name='FullName' id='FullName'></input>

            <label htmlFor='CURP'>CURP: </label>
            <input type="text" name='CURP' id='CURP'></input>

            <label htmlFor='RFC'>RFC: </label>
            <input type="text" name='RFC' id='RFC'></input>
            
    </form>
</div>
  )
}
