const mongoose=require("mongoose");
const schema=mongoose.schema({
    title:{
        type:String,
        require:true
    }
})

const model=mongoose.models.course || mongoose.model("course" , schema)
export default model;