import {pool} from '../../../config/db'

export default async function handler(req,res){
    
    switch(req.method){
        case 'GET':
            return await getCar(req,res)
        case 'POST':
           return await saveCar(req,res)
    }
}

const saveCar = async (req, res)=>{
    const { 
        SerialNumber,
        Brand,
        Year,
        Model,
        Type,
        Color,
        MotorType,
        FuelCapacity
     } = req.body;
     
     const result = await pool.query('INSERT INTO Vehiculo SET ?',{
        noSerie : SerialNumber,
        Brand: Brand,
        Year: Year,
        Model : Model,
        Type : Type,
        Color : Color,
        motor_type: MotorType,
        fuel_capacity : FuelCapacity
    });
    return res.status(200).json(
        {SerialNumber,
        Brand,
        Year,
        Model,
        Type,
        Color,
        MotorType,
        FuelCapacity
    })
}

const getCar = async(req,res) => {
    const [result] = await  pool.query('SELECT * FROM Vehiculo WHERE NoSerie = 1234567824');
    return res.status(200).json(result)
}