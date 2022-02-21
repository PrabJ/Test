import app from './server.util.js'
// import express from 'express'
// const app = express()
const port = 3000

// app.set('view-engine','ejs')
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile('/home/prabhat/Desktop/Pathomation/try8/public/treeview.html')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})