// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


import pkg from '@feathersjs/errors';
const { BadRequest } = pkg;

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app } = context
    const {post,comment}=data

    if (!post) {
      throw new BadRequest("PostId is required")
    }
    if (!comment) {
      throw new BadRequest("comment field is required")
    }
    await app.service('post').get(post).catch(() => {
      throw new BadRequest("Post is invaild")
    })

    return context;
  };
};
