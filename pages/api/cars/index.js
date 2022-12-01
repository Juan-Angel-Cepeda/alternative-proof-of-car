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
        NoSerie:req.body.SerialNumber,
        brand:req.body.Brand,
        year: req.body.Year,
        Model: req.body.Model,
        type: req.body.Type,
        Color: req.body.Color,
        motor_type: req.body.MotorType,
        fuel_capacity: req.body.fuel_capacity,
        
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
    const [result] = await  pool.query('SELECT * FROM Vehiculo');
    return res.status(200).json(result)
}