import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';


export default function AddlicenceForms() {
  return (
    <div>
        <form>

            <label htmlFor='idLicense'>Id Licencia: </label>
            <input type="number" name='idLicense'></input>

            <label htmlFor='LicenceType'>Tipo de Licencia: </label>
            <input type="text" name='FullName' id='FullName'></input>

            <label htmlFor='Validity'>Vigencia: </label>
            <input type="date" name='Validity' id='Validity'></input>

        </form>
    </div>
  )
}
