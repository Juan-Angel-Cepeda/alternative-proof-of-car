export default function handler(req,res){
    if(req.method === 'POST'){
        console.log('Agregando carro')
        return res.status(200).json('INSERTANDO INFO')
    }else{
        return res.status(200).json('OBTENIENDO INFO')
    }
    
}