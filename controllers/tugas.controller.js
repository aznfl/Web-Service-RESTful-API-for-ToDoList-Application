const Tugas = require("../models/tugas")

module.exports = {
  getAllTugas: async (req, res) => {
    const tugas = await Tugas.find().populate("user", "name")

    res.json({
      message: "Success get data",
      data: tugas
    })
  },

  getTugasByID: async(req, res) => {
    try {
      const data = req.body

      const users = await Tugas.findOne({id: data.name})
  
      res.status(201).json({
        message: "data has been created!!",
        data: users
      })
      
    } catch (error) {
      res.status(500).json({
        message: "data not created!!"
      })
    }
  },

  addTugas: async (req, res) => {
    const data = req.body
    const tugas = new Tugas(data)
    tugas.save()

    res.json({
      message: "tugas has been created"
    })
  },

  deleteTugasByID: async (req, res) => {
    try {
      const data = req.body

      const users = await Tugas.deleteOne({id: data.id})
  
      res.status(201).json({
        message: "data has been created!!",
        data: users
      })
      
    } catch (error) {
      res.status(500).json({
        message: "data not created!!"
      })
    }
  },

  updateTugasByID: (req, res) => {

  },

}