// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const {result,app,params}=context
    const {user}=params
    const {data}=result
    // console.log(user,data)

  for(let i=0;i<data.length;i++){
    data[i].comment=await app.service("comment").find({
      query:{
        post:data[i]._id,
      }
    }).then((res)=>res.total?res.data[0]:null)
  }

    return context;
  };
};


















