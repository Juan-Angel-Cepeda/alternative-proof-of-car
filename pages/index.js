import axios from 'axios';
import {AddcarsForms}from '../components/AddcarsForms'

export const getServerSideProps = async context => {
  const {data:cars} = await axios.get(
    "http://localhost:3000/api/cars"
    )
  return {
    props:{
      cars,
    }
  }
}

function HomePage({cars}) {  
  console.log(cars);
  return (
    <div>
        <AddcarsForms/>

        {cars.map(car => (
          <div key={car.id}>
            <h2>{car.NoSerie}</h2>
            <p>{car.brand}</p>
            <p>{car.Model}</p>
            <p>{car.type}</p>
            <p>{car.Color}</p>
            <p>{car.motor_type}</p>
            <p>{car.fuel_capacity}</p>
            <p>{car.idInsurance}</p>
            <p>{car.IdOwner_Owner}</p>
            <p>{car.idLicence_Licence}</p>
            <p>{car.idService_Service}</p>
          </div>
        ))}
    </div>
  );
}
export default HomePage;