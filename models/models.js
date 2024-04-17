import mongoose from "mongoose"

const mongoModel = mongoose.Schema({
    userid_639097:{
        type:String,
        required:true
    },
    Name:{
        type:String
    },
    State:{
        type:String
    }
})

export default mongoose.model("mongoModel",mongoModel)