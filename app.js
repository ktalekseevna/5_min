const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

let USERS = [
    {id: v4(), task:'Изменение пака иконок', date:'23.03.3000', company_name:'Google'}
]


app.use(express.json())



//for creating users 

app.get('https://tele2quiz.store/api/auth/register', (req, res) =>{
    res.status(200).json()
})


//for creating tasks and projects

//GET
app.get('https://tele2quiz.store/api/tasks/me', (req, res) =>{
    res.status(200).json()
})

// POST
app.post('https://tele2quiz.store/tasks', (req, res) => {
    const user = {...req.body, id: v4()}
    USERS.push(user)
    res.status(201).json(user)
})

// DELETE
app.delete('https://tele2quiz.store/api/tasks/:id', (req, res) => {
    USERS = USERS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'Контакт был удален'})
  })



app.use(express.static(path.resolve(__dirname, 'user')))        //makes static folder 

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'user', 'registration.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000'))