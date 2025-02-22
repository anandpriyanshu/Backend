// require('dotenv').config({ path: './env' })

import dotenv from 'dotenv'
import connectDB from './db/index.js';
// import express from 'express'



dotenv.config({
  path: './env'
})



connectDB()



// const app = express()
//   (async () => {

//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on('error', (error) => {
//         console.log('Err', error)
//         throw error
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`APP is running on ${process.env.PORT}`)
//       })
//     } catch (error) {
//       console.log(error.message)
//       throw error
//     }
//   })()