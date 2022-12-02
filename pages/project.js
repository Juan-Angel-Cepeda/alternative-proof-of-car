import axios from 'axios';
import AddcarsForms from '../components/AddcarsForms'
import TablaCars from '../components/cars/TablaCars';
import Menu from '../components/Menu';



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
    <div className='h-screen'>
        <Menu/>
        <AddcarsForms/>
        <TablaCars cars={cars}/>
    </div>
  );
}
export default HomePage;