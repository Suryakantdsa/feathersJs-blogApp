// post-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
export default function (app) {
  const modelName = 'post';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
  {
    user: { 
      type: Schema.Types.ObjectId,
      ref:"users",
      required: true
     },
     title:{
      type:String,
      required:true
     },
     description:{
      type:String,
      required:true
     },
     likeCount:{
      type:Number,
      default:0
     },
     commentCount:{
      type:Number,
      default:0
     },
     status:{
      type:Number,
      enum:[
        1 //active
        ,-1 //inactive
      ]
      ,default:1
    }
  }  , 
  {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
