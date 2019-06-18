
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
    passMark:{
        type:Number,
        require:true
    },
    lecturer:{
        type:String,
        require:true
    },
    subjects:[
        {
            type:Schema.Types.ObjectId,
            ref:"Subject"
        }
    ]
})

const subjectSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    }
})

mongoose.model('Subject',subjectSchema);
mongoose.model('Course',courseSchema);

module.exports=mongoose;