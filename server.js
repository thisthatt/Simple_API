const express  = require('express')
const app = express()
const cors = require('cors')
const myDB={
        'name': 'Luke Skywalker',
        'height': '172',
        'mass': '77',
        'hair_color': 'blond',
        'skin_color': 'fair',
        'eye_color': 'blue',
        'birth_year': '19BBY',
        'gender': 'male',
    
    
}

app.get('/', (req,res)=>{

res.send('Api server')
})
app.get('/api',(req,res)=>{
    res.json(myDB)
})

const PORT = 3001
app.listen(process.env.PORT || PORT ,()=>{
    console.log(`Server started on PORT:${PORT}`)

})