const express = require('express')
var cors = require("cors");

const app=express()
app.use( cors({origin: "*"}) );

const PORT=4000;


const resObj=[
    {
        id:1,
        name:'Satish Kumar',
        speciality:'Physian',
        city:'Ranchi'       
    },
    
    {
        id:2,
        name:'Animesh Anand',
        speciality:'Neuro Sergeon',
        city:'Bangalore'
    },
    
    {
        id:3,
        name:'Priya Raj',
        speciality:'Cardiologist',
        city:'Chennai'
    },
    {
        id:4,
        name:'Reshma Khan',
        speciality:'Orthopaedics',
        city:'Ranchi'       
    },
    
    {
        id:5,
        name:'Shilpa Rao',
        speciality:'Orthologist',
        city:'Indore'
    },
    {
        id:6,
        name:'Mukesh Sighania',
        speciality:'Pediatrician',
        city:'Patna'
    },
    
    {
        id:7,
        name:'Preeti Bhatt',
        speciality:'Orthologist',
        city:'Bangalore'
    },
    
    {
        id:8,
        name:'Sunny Bhalla',
        speciality:'Endocrinologist',
        city:'Patna'
    },
    
    {
        id:9,
        name:'Arvind Sinha',
        speciality:'Pediatrician',
        city:'Indore'
    },
    
    {
        id:10,
        name:'Neeraj Rai',
        speciality:'Gastroenterology',
        city:'Patna'
    },
    
    
    {
        id:11,
        name:'Sachin Chada',
        speciality:'Gynecologist',
        city:'Patna'
    },
    
    {
        id:12,
        name:'Chandni Jha',
        speciality:'Psychiatrist',
        city:'Chennai'
    }

]


app.get('/',(req,res)=>{

    res.json({'name':'Animesh'})
})



app.get('/getDetails',(req,res)=>{

    res.status(200).json(resObj);
})

app.listen(PORT, (req,res)=>{
console.log("Server is Listining at PORT:",PORT);
})