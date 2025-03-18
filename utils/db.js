const mongoose=require("mongoose");
const connectToDB = async()=>{

    try {
        if(mongoose.connections[0].readyState){
            return false;
        }
        await mongoose.connect("mongodb://127.0.0.1:27017/next-cms");
        console.log("success")
        
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;