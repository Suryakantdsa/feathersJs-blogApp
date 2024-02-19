// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const {data,params}=context
    // console.log(data)
    if(data.email!==params.user.email){
      throw new BadRequest("User email can't be changed")
    }
    return context;
  };
};
