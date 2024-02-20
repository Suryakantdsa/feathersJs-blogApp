// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import pkg from '@feathersjs/errors';
const { BadRequest,NotAuthenticated } = pkg;

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const{data,params}=context
    const {user}=params

    const {title,description}=data
    console.log(user)
    
    if(user){
      data.user=user?._id
    }else{
      throw new NotAuthenticated()
    }
    if(!title){
      throw new BadRequest("title is required")
    }
    if(!description){
      throw new BadRequest("description is required")
    }
    return context;
  };
};
