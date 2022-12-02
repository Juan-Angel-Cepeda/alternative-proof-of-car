import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';


export default function AddownerForms() {
  const formikAddCar = useFormik({
    initialValues: {
      idOwner: "JOHN" ,
      Fullname: "DOE",
      CURP: "CEFJ980722HCHPRN03",
      RFC: "CEFJ980722K10",
      
    },

    validationSchema: Yup.object({
      idOwner: Yup.string().required('id es necesario'),
      Fullname: Yup.string().required("El nombre es necesario"),
      CURP: Yup.number().required("El CURP es necesario"),
      RFC: Yup.string().required("El RFC es necesario"),
    }),

    onSubmit: async valores => {
      try {
        const res = await axios.post('/api/owners',valores);
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Creado',
          text: `El dueño se ha agregado exitosamente`
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
    <div className="w-full">        
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
