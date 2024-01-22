
import Tratamiento from "../models/Tratamiento.js"
import mongoose from "mongoose";

const detalleTratamiento = (req,res)=>{
    res.send("Detalle del tratamiento")
}

const registrarTratamiento = async (req,res)=>{
    const {paciente} = req.body
    if( !mongoose.Types.ObjectId.isValid(paciente) ) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`});
    const tratamiento = await Tratamiento.create(req.body)
    res.status(200).json({msg:`Registro exitoso del tratamiento ${tratamiento._id}`,tratamiento})
}
const actualizarTratamiento = (req,res)=>{
    res.send("Actualizar tratamiento")
}

const eliminarTratamiento = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe ese tratamiento`})
    await Tratamiento.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Tratamiento eliminado exitosamente"})
}

const cambiarEstado = async(req,res)=>{
    await Tratamiento.findByIdAndUpdate(req.params.id,{estado:false})
    res.status(200).json({msg:"Estado del Tratamiento modificado exitosamente"})
}
export {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
}