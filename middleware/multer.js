// Shree Ganeshay namah 

const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() )
      cb(null,uniqueSuffix  + '_' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload