import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app, params, id } = context
    const { user } = params
    const { _id } = user
    if (_id.toString() !== id.toString()) {
        throw new BadRequest('the current user can not be updated')
      }
    return context;
  };
};