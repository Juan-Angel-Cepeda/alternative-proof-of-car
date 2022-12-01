import {pool} from '../../../config/db'

export default async function handler(req,res){
    
    switch(req.method){
        case 'GET':
            const [] = await  pool.query('SELECT * FROM Vehiculos');
            return res.status(200).json('OBTENIENDO INFO')
        
        case 'POST':
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
                NoSerie:'ddedddgefasf',
                brand: 'toyota',
                year: 1993,
                Model: 'Cambri',
                type: 2,
                Color: 'green',
                motor_type: '4 cil',
                fuel_capacity: 2.0 ,
                
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
}