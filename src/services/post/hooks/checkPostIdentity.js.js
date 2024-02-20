// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app, params, id } = context

    const { user } = params
    const { _id } = user
    if(data?.user){
      throw new BadRequest("UserId Can't be updated ")
    }
    await app.service('post').get(id).then((res) => {
      const { user } = res
      if (user.toString() !== _id.toString()) {
        throw new BadRequest('you do not have permission to access the perticular resource')
      }
    }).catch(()=>{
      throw new BadRequest('invalid post')
    })
    return context;
  };
};


















