const express = require('express')
const Router = express.Router();

const mongoose = require("../db/Shema_Mapper");
const courseShema = mongoose.model('Course');

Router.post('/add', function (req, res) {
    console.log(req.body)
    const course = new courseShema(req.body);

    course.save()
        .then(
            ()=>res.status(200).send({"message":"Successfully saves"})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    // res.status(200).send({"message":"Successfully saves"})
    
});

Router.get('/view', function (req, res) {
    courseShema.find().populate('subjects').exec()
        .then(
            (courses)=>res.status(200).send({"message":"Successfully retrived","data":courses})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.get('/view/:id', function (req, res) {

    courseShema.findById(req.params.id).populate('subjects').exec()
        .then(
            (course)=>res.status(200).send({"message":"Successfully retrived","data":course})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.get('/view/specific/:id', function (req, res) {

    courseShema.findById(req.params.id).exec()
        .then(
            (course)=>res.status(200).send({"message":"Successfully retrived","data":course})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.put('/update/:id', function (req, res) {

    courseShema.update({"_id":req.params.id},req.body)
        .then(
            (course)=>res.status(200).send({"message":"Successfully updated","data":course})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.delete('/delete/:id', function (req, res) {

    courseShema.remove({"_id":req.params.id})
        .then(
            ()=>res.status(200).send({"message":"Successfully deleted"})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});


module.exports = Router;
