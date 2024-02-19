// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const{data,app}=context
    // console.log(context.toJSON())
    const {user,title,description}=data

    if(!user){
      throw new BadRequest("User is required")
    }
    if(!title){
      throw new BadRequest("title is required")
    }
    if(!description){
      throw new BadRequest("description is required")
    }

    await app.service("users").get(user).catch(
      ()=>{
        throw new BadRequest("user is invalid")
      }
    )

    return context;
  };
};
