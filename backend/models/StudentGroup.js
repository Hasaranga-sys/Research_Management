const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentGroupSchema = new Schema({
    groupId:{
        type:String,
        required:true
    },

            leaderName : {
                type:String,
                required:true
            },
            leaderId :{
                type:String,
                required:true
            },
            leaderEmail :{
                type:String,
                required:true
            },
            leaderContactNo :{
                type:String,
                required:true
            },


                member_1Name :{
                    type:String,
                    required:true
                },
                member_1Id :{
                    type:String,
                    required:true
                },
                member_1Email :{
                    type:String,
                    required:true
                },
                member_1ContactNo :{
                    type:String,
                    required:true
                },


                    member_2Name :{
                        type : String,
                        required : true
                    },
                    member_2Id :{
                        type:String,
                        required:true
                    },
                    member_2Email :{
                        type:String,
                        required:true
                    },
                    member_2ContactNo :{
                        type:String,
                        required:true
                    },


                        member_3Name :{
                            type : String,
                            required: true
                        },
                        member_3Id :{
                            type:String,
                            required:true
                        },
                        member_3Email :{
                            type:String,
                            required:true
                        },
                        member_3ContactNo :{
                            type:String,
                            required:true
                        },

})

module.exports = mongoose.model("StudentGroup",StudentGroupSchema);