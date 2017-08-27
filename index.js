const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {isNumeric,minus,multiply,divide,plus} = require('./utility');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req,res,next)=>{
    const {opone,optwo} = req.body;
    const num1 = parseInt(opone,10);
    const num2 = parseInt(optwo,10);
    
    if(!isNumeric(num1) || !isNumeric(num2)){
        res.status(400).json({
            message:"it's not a number"
        });
        next("user doesn't send correct number");
    }
    req.body.num1 = num1;
    req.body.num2 = num2;
    next();
});
app.post('/plus',(req,res)=>{
    const {num1,num2} = req.body;
    const result = plus(num1,num2);
    res.json({
        result
    });
});

app.post('/multiply',(req,res)=>{
    const {num1,num2} = req.body;
    const result = multiply(num1,num2);
    res.json({
        result
    });
});

app.post('/divide',(req,res)=>{
    const {num1,num2} = req.body;
    const result = divide(num1,num2);
    res.json({
        result
    });
});

app.post('/minus',(req,res)=>{
    const {num1,num2} = req.body;
    const result = minus(num1,num2);
    res.json({
        result
    });
});

app.listen(3000,()=>{
    console.log('Start');
});