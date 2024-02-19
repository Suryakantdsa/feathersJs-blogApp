// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const {data,params,id,app}=context
    
    const {user} =data

    console.log(params.user._id.toString(),data,id )

    // checking the userId from param ,whether it is same or not
    // if(user){
    //   if(user!==params.user._id.toString()){
    //     throw new BadRequest("user can't be changed")
    //   }
    //   console.log(id,data)
    // }
    return context;
  };
};


















