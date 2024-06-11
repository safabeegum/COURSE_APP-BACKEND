const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":{type:String,required:true},
        "description":{type:String,required:true},
        "date":{type:Date,required:true},
        "duration":{type:String,required:true},
        "venue":{type:String,required:true},
        "trainer":{type:String,required:true}
    }
)

let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}
