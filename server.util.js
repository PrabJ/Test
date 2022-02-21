import express from 'express'
const app = express()
const port = 3000

app.set('view-engine','ejs')
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/home/prabhat/Desktop/Pathomation/try8/public/treeview.html')
})

export default app;