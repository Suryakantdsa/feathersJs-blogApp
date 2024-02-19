// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const {data}=context;
    const {password,email}=data
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!password){
      throw new BadRequest("Password field is required")
    }
    if(!email){
      throw new BadRequest("email field is required")
    }
    if(!emailRegex.test(email)){
      throw new BadRequest("Enter a valid email")
    }
    return context;
  };
};
