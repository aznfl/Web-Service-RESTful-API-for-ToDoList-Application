const User = require("../models/user")
const bcrypt = require('bcrypt')

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({})
  
      res.status(201).json({
        message: "success get data user",
        data: users
      })
      
    } catch (error) {
      
    }
  },

  getUserByID: (req, res) => {

  },

  addUser: async (req, res) => {
    try {
      const data = req.body

      const saltRounds = 10
      const hash = bcrypt.hashSync(data.password, saltRounds)
      data.password = hash

      const user = new User(data)
      // console.log(user)
      await user.save()
  
      res.status(201).json({
        message: "data has been created!!"
      })
      
    } catch (error) {
      res.status(500).json({
        message: "data not created!!"
      })
    }
  },

  deleteUserByID: async (req, res) => {
    try {
      const data = req.body

      const users = await User.deleteOne({id: data.name})
  
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

  updateUserByID: (req, res) => {

  },

  login: async (req, res) => {
    const data = req.body

    const user = await User.findOne({email: data.email})

    const checkPwd = bcrypt.compareSync(data.password, user.password)

    if (checkPwd) {
      res.json({
        message: "Anda Berhasil Login",
        token: "Kasih Token Di Sini"
      })
    }
  }
}