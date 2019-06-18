const express = require('express')
const Router = express.Router();

const mongoose = require("../db/Shema_Mapper");
const subjectShema = mongoose.model("Subject");

Router.post('/add', function (req, res) {
    const subject = new subjectShema(req.body);

    subject.save()
        .then(
            ()=>res.status(200).send({"message":"Successfully saved"})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.get('/view', function (req, res) {

    subjectShema.find().exec()
        .then(
            (subject)=>res.status(200).send({"message":"Successfully retrived","data":subject})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.get('/view/:id', function (req, res) {

    subjectShema.findById(req.params.id).exec()
        .then(
            (subject)=>res.status(200).send({"message":"Successfully retrived","data":subject})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.put('/update/:id', function (req, res) {

    subjectShema.update({"_id":req.params.id},req.body)
        .then(
            (subject)=>res.status(200).send({"message":"Successfully updated","data":subject})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});

Router.delete('/delete/:id', function (req, res) {

    subjectShema.remove({"_id":req.params.id})
        .then(
            ()=>res.status(200).send({"message":"Successfully deleted"})
        )
        .catch(
            (err)=>res.status(400).send({"message":err})
        )
    
});


module.exports = Router;
