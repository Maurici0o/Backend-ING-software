const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel.js')

const getTareas = asyncHandler( async (req, res) => {
    const tareas = await Tarea.find({})
    res.status(201).json(tareas)
})

const createTareas = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const tarea = await Tarea.create({
        description: req.body.description
    })
    res.status(201).json({tarea})
})

const updateTareas = asyncHandler( (req, res) => {
    res.status(200).json({message: `Update Tareas ${req.params.id}`})
})

const deleteTareas = asyncHandler( (req, res) => {
    res.status(204).json({message: `Delete Tareas ${req.params.id}`})
})
module.exports = {getTareas, createTareas, updateTareas, deleteTareas}