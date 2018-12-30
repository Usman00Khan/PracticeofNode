const Joi = require('joi')
const express = require('express')
const app = express()
app.use(express.json())
courses = [
    {id:1, name: 'course 1'},
    {id:2, name: 'course 2'},
    {id:3, name: 'course 3'}
]

app.get('/',(req,res) => {
    res.send("Hello world!!!")
})

app.get('/api/courses/',(req,res) => {
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(p => p.id === parseInt(req.params.id))
    if(!course){
        return res.status(404).send('Course not found!')
    }
    res.send(course)
})

app.post('/api/courses',(req,res)=>{
    const {error} = validateCoure(req.body)
    if(error) {
        res.status(400).send(error.details[0].message)
        return
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.status(201).send(course)
})

app.put('/api/courses/:id',(req,res) => {

    const course = courses.find(p => p.id === parseInt(req.params.id))
    if(!course){
        return res.status(404).send('Course not found!')
    }

    const {error} = validateCoure(req.body)
    if(error) {
        res.status(400).send(error.details[0].message)
        return
    }

    course.name = req.body.name
    res.status(200).send(course)

})

app.delete('/api/courses/:id',(req,res) => {
    
    const course = courses.find(p => p.id === parseInt(req.params.id))
    if(!course){
        return res.status(404).send('Course not found!')
    }

    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.status(200).send(course)
})

function validateCoure(course){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course,schema)
}

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening to port ${port}...`)
})
