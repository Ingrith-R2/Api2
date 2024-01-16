import {Router} from 'express'
const router = Router()

import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

//ruta para el login del paciende o dueño 
router.post('/paciente/login',loginPaciente)
router.get('/paciente/perfil',verificarAutenticacion,perfilPaciente)
//router para listar pacientes 
router.get("/pacientes",verificarAutenticacion,listarPacientes);
// ver el detalle de un paciente en particular
router.get("/paciente/:id",verificarAutenticacion, detallePaciente);
//ruta para registrar un paciente 
router.post("/paciente/registro", verificarAutenticacion,registrarPaciente);
//ruta para actualizar un paciente 
router.put("/paciente/actualizar/:id", verificarAutenticacion,actualizarPaciente);
//ruta para eliminar un paciente -- cambiar el estado
router.delete("/paciente/eliminar/:id", verificarAutenticacion,eliminarPaciente);
//exportar
export default router