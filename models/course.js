const mongoose = require("mongoose");

const schema = mongoose.Schema({



    title:{
        type:String,
        require:true
    }
})

const model=mongoose.models.course || mongoose.model("Course" , schema)
export default model;